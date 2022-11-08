import { FunctionComponent, useEffect, useRef, useState } from "react";
import { splitToWords } from "../utils/crypto";
//@ts-ignore
import snarkjs from "snarkjs";
//@ts-ignore
import { unstringifyBigInts } from "snarkjs/src/stringifybigint";

//@ts-ignore
import JSON_CIRCUIT from "../../../circom-rsa-verify/circuits/circuit.json";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import CircularProgress from "@mui/material/CircularProgress";

const circuit = new snarkjs.Circuit(JSON_CIRCUIT);

const exp = "65537";
const devHash = process.env[ "NEXT_PUBLIC_HASH" ] as string | null;
const devSignature = process.env[ "NEXT_PUBLIC_SIGNATURE" ] as string | null;
const devPublicKey = process.env[ "NEXT_PUBLIC_MODULUS" ] as string | null;
const devGenerateProof = Boolean(Number(process.env[ "NEXT_PUBLIC_GENERATE_PROOF" ]));
const development = process.env[ "NODE_ENV" ] == "development";

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);
const validity = (vkeyVerifier: any, proof: any, publicSignals: any) => {
  snarkjs.original.isValid(
    unstringifyBigInts(vkeyVerifier),
    unstringifyBigInts(proof),
    unstringifyBigInts(publicSignals)
  );
};

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setproof, hash, signature, publicKey, vkeyProof, vkeyVerifier }) => {
  const buttonDisabled = vkeyProof || development ? false : true;
  const [ loading, setloading ] = useState(false);
  const workerRef = useRef<Worker>();

  useEffect(() => {
    workerRef.current = new Worker(new URL("../worker/generateProof.ts", import.meta.url));
    workerRef.current.onmessage = (e: MessageEvent<{ proof: any, publicSignals: any; }>) => {
      console.log(e.data.proof);
      setloading(false);
    };
    return () => {
      workerRef.current?.terminate();
    };
  });

  return (

    <div className="flex w-1/2 my-2 self-end">
      {loading ?
        <div className="ml-5 self-end">
          <CircularProgress disableShrink color="primary" />
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
            if (hash && signature && exp && publicKey && (vkeyProof || development)) {
              console.log("Calculating witness");
              const input = Object.assign({},
                splitToWords(signature, 64, 32, "sign"),
                splitToWords(exp, 64, 32, "exp"),
                splitToWords(publicKey, 64, 32, "modulus"),
                splitToWords(hash, 64, 4, "hashed"),
              );
              const witness = circuit.calculateWitness(input);
              if (devGenerateProof) {
                workerRef.current!.postMessage({ vkeyProof, witness });
              }
            }
            else {
              const proof = {};
            }
          }
          } className='border-black font-work-sans text-beige border-2'>Generate proof</  button>
        </div>
      }
    </div>
  );
};



export const ButtonInitializeVerifier: FunctionComponent<ButtonInitializeVerifier> = ({ setvkeyProof, setvkeyVerifier }) => {
  const [ disabled, setdisabled ] = useState(false);
  const [ loading, setloading ] = useState(false);
  const [ buttonText, setbuttonText ] = useState("Initialize");
  return (

    <div className="flex">
      {loading ?
        <div className="self-center">
          <BounceLoader size={20}></BounceLoader>
        </div>
        :
        <button className="self-center text-beige font-work-sans" onClick={async () => {
          setloading(true);
          const vkeyProof = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_URL" ] as string);
          const vkeyVerifier = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_VERIFIER_URL" ] as string);
          setvkeyProof(vkeyProof.data);
          setvkeyVerifier(vkeyVerifier.data);
          setbuttonText("Loaded!");
          setloading(false);
        }}>
          {buttonText}
        </button>
      }
    </div>
  );
};