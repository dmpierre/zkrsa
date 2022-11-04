import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from "react";
import { splitToWords } from "../utils/crypto";
//@ts-ignore
import snarkjs from "snarkjs";
// @ts-ignore
import { unstringifyBigInts } from "snarkjs/src/stringifybigint";
//@ts-ignore
import JSON_CIRCUIT from "../../../circom-rsa-verify/circuits/circuit.json";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

const circuit = new snarkjs.Circuit(JSON_CIRCUIT);

const exp = "65537";
const devHash = process.env[ "NEXT_PUBLIC_HASH" ] as string | null;
const devSignature = process.env[ "NEXT_PUBLIC_SIGNATURE" ] as string | null;
const devPublicKey = process.env[ "NEXT_PUBLIC_MODULUS" ] as string | null;

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setproof, hash, signature, publicKey, vkeyProof, vkeyVerifier }) => {
  const buttonDisabled = vkeyProof ? false : true;
  return (
    <div className="w-1/2 my-2 self-end">
      <button disabled={buttonDisabled} onClick={async () => {
        if (devHash) {
          // @dev handle dev environment here
          hash = devHash;
          signature = devSignature;
          publicKey = devPublicKey;
        }
        if (hash && signature && exp && publicKey && vkeyProof) {
          const input = Object.assign({},
            splitToWords(signature, 64, 32, "sign"),
            splitToWords(exp, 64, 32, "exp"),
            splitToWords(publicKey, 64, 32, "modulus"),
            splitToWords(hash, 64, 4, "hashed"),
          );
          const witness = circuit.calculateWitness(input);
          console.log("Calculating proof");
          const { proof, publicSignals } = snarkjs.original.genProof(
            unstringifyBigInts(vkeyProof),
            unstringifyBigInts(witness)
          );
          setproof(proof);
          console.log("Proof ready!");
          const validity = snarkjs.original.isValid(
            unstringifyBigInts(vkeyVerifier),
            unstringifyBigInts(proof),
            unstringifyBigInts(publicSignals)
          );
          console.log(`Proof validity: ${validity}`);
        }
      }
      } className='border-black border-2'>Generate proof</button>
    </div>
  );
};



export const ButtonInitializeVerifier: FunctionComponent<ButtonInitializeVerifier> = ({ setvkeyProof, setvkeyVerifier }) => {
  const [ disabled, setdisabled ] = useState(false);
  const [ loading, setloading ] = useState(false);

  return (
    <div className="flex">
      <button className="self-center" onClick={async () => {
        setloading(true);
        const vkeyProof = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_URL" ] as string);
        const vkeyVerifier = await axios.get(process.env[ "NEXT_PUBLIC_VKEY_VERIFIER_URL" ] as string);
        setvkeyProof(vkeyProof.data);
        setvkeyVerifier(vkeyVerifier.data);
        setloading(false);
      }}>
        Initialize
      </button>
      <div className="self-center ml-4">
        {loading ? <BounceLoader size={20}></BounceLoader> : null}
      </div>
    </div>
  );
};