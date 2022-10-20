import { NextComponentType } from "next";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { generateRSAKeyPair, splitToWords } from "../utils/crypto";
//@ts-ignore
import snarkjs from "snarkjs";
//@ts-ignore
import JSON_CIRCUIT from "../../../circom-rsa-verify/circuits/circuit.json";
import bigInt from "big-integer";

interface ButtonGenerateProof {
  setproof: Dispatch<SetStateAction<string | null>>;
  setcompiledCircuit: Dispatch<SetStateAction<null>>;
  hash: string | null;
  signature: string | null;
  publicKey: string | null;
}

const exp = bigInt(65537);
const circuit = new snarkjs.Circuit(JSON_CIRCUIT);

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setproof, hash, signature, publicKey }) => {
  return (
    <div className='ml-10 my-10'>
      <button onClick={async () => {
        const input = Object.assign({},
          splitToWords(signature, 64, 32, "sign"),
          splitToWords(exp, 64, 32, "exp"),
          splitToWords(publicKey, 64, 32, "modulus"),
          splitToWords(hash, 64, 4, "hashed"),
        );        
        const witness = circuit.calculateWitness(input);
        console.log(witness);
      }
      } className='border-black border-2'>Calculate witness</button>
    </div>
  );
};
