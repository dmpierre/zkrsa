import { FunctionComponent, useEffect, useRef, useState } from "react";
import { splitToWords } from "../utils/crypto";
//@ts-ignore
import snarkjs from "snarkjs";
//@ts-ignore
import { unstringifyBigInts } from "snarkjs/src/stringifybigint";

//@ts-ignore
// import JSON_CIRCUIT from "../../../circom-rsa-verify/circuits/circuit.json";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

// const circuit = new snarkjs.Circuit(JSON_CIRCUIT);

const exp = "65537";
const devHash = process.env[ "NEXT_PUBLIC_HASH" ] as string | null;
const devSignature = process.env[ "NEXT_PUBLIC_SIGNATURE" ] as string | null;
const devPublicKey = process.env[ "NEXT_PUBLIC_MODULUS" ] as string | null;
const devGenerateProof = Boolean(Number(process.env[ "NEXT_PUBLIC_GENERATE_PROOF" ]));

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EFAD5F',
    }
  }
});


const validity = (vkeyVerifier: any, proof: any, publicSignals: any) => {
  snarkjs.original.isValid(
    unstringifyBigInts(vkeyVerifier),
    unstringifyBigInts(proof),
    unstringifyBigInts(publicSignals)
  );
};

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setpublicSignals, setproof, hash, signature, publicKey, vkeyProof, vkeyVerifier }) => {
  const buttonDisabled = (vkeyProof && hash && signature && publicKey) ? false : true;
  const [ loading, setloading ] = useState(false);
  const workerRef = useRef<Worker>();
  const [ currentStep, setcurrentStep ] = useState("");

  useEffect(() => {
    workerRef.current = new Worker(new URL("../worker/generateProof.ts", import.meta.url));
    workerRef.current.onmessage = (e: MessageEvent<{ proof: any, publicSignals: any; }>) => {
      console.log("Received message");
      console.log(e.data.proof);
      setproof(e.data.proof);
      setpublicSignals(e.data.publicSignals);
      setloading(false);
    };
    return () => {
      workerRef.current?.terminate();
    };
  }, [ setproof, setpublicSignals ]);


  return (

    <div className="flex my-5 w-1/3 self-end">
      {loading ?
        <div className="flex w-1/2 flex-col ml-5">
          <div className="self-center h-1/2">
            <ThemeProvider theme={theme}>
              <CircularProgress disableShrink size={40} color="primary" />
            </ThemeProvider>
          </div>
          <div className="self-center my-3 text-center text-gold">
            {currentStep}
          </div>
        </div>
        :
        <div className="self-center font-roboto-light-300">
          <button disabled={buttonDisabled} onClick={async () => {
            setloading(true);
            if (devHash) {
              // @dev handle dev environment here
              hash = devHash;
              signature = devSignature;
              publicKey = devPublicKey;
            }
            setcurrentStep("Downloading circuit...");
            const data = await (await axios.get(process.env[ "NEXT_PUBLIC_CIRCUIT_URL" ] as any)).data;
            console.log(data)
            const circuit = new snarkjs.Circuit(data);
            setcurrentStep("Computing witness circuit...");
            const input = Object.assign({},
              splitToWords(signature, 64, 32, "sign"),
              splitToWords(exp, 64, 32, "exp"),
              splitToWords(publicKey, 64, 32, "modulus"),
              splitToWords(hash, 64, 4, "hashed"),
            );
            const witness = circuit.calculateWitness(input);
            setcurrentStep("Generating proof...");
            if (devGenerateProof) {
              console.log("Generating proof");
              workerRef.current!.postMessage({ vkeyProof, witness });
            }
          }
          } className='font-work-sans shadow-xl disabled:text-gray-400 disabled:border-gray-400 focus:outline-none text-beige border-2 rounded-lg border-beige hover:border-gold px-3 py-2'>Generate proof</  button>
        </div>
      }
    </div>
  );
};

interface ButtonExportProof {
  proof: any;
  publicSignals: any;
}

export const ButtonExportProof: FunctionComponent<ButtonExportProof> = ({ proof, publicSignals }) => {
  return (
    <div className="flex w-1/3 self-end">
      {
        proof ?
          <button className="shadow-xl disabled:text-gray-400 disabled:border-gray-400 focus:outline-none text-beige font-work-sans border-2 rounded-lg border-beige hover:border-gold px-3 py-2">
            <a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({ proof, publicSignals }))}`} download="proof_public_signals.json">
              {`Download`}
            </a>
          </button>
          :
          <></>
      }
    </div>
  );
};
export const ButtonInitializeVerifier: FunctionComponent<ButtonInitializeVerifier> = ({ setvkeyState, setvkeyProof, setvkeyVerifier }) => {
  const [ disabled, setdisabled ] = useState(false);
  const [ loading, setloading ] = useState(false);
  const [ buttonText, setbuttonText ] = useState("Initialize");
  return (

    <div className="flex">
      {loading ?
        <div className="self-center">
          <ThemeProvider theme={theme}>
            <CircularProgress size={25} disableShrink color="primary"></CircularProgress>
          </ThemeProvider>
        </div>
        :
        <button disabled={disabled} className="self-center shadow-xl disabled:text-gray-400 disabled:border-gray-400 focus:outline-none text-beige font-work-sans border-2 rounded-lg border-beige hover:border-gold px-3 py-2" onClick={async () => {
          setloading(true);
          setvkeyState("Downloading verifier...");
          const vkeyProof = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_URL" ] as string);
          const vkeyVerifier = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_VERIFIER_URL" ] as string);
          setvkeyProof(vkeyProof.data);
          setvkeyVerifier(vkeyVerifier.data);
          setvkeyState("Verifier ready.");
          setdisabled(true);
          setloading(false);
        }}>
          {buttonText}
        </button>
      }
    </div>
  );
};