import { NextComponentType } from "next";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { generateRSAKeyPair } from "../utils/crypto";
//@ts-ignore
import snarkjs from "snarkjs";
//@ts-ignore
import compiler from "circom";
import JSON_CIRCUIT from "../../../circom-rsa-verify/circuit.json";
import fs from "fs";

interface ButtonGenerateProof {
  setproof: Dispatch<SetStateAction<string | null>>;
  setcompiledCircuit: Dispatch<SetStateAction<null>>;
  hash: string | null;
  signature: string | null;
  publicKey: string | null;
}

const circuit = new snarkjs.Circuit(JSON_CIRCUIT);

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setproof, hash, signature, publicKey }) => {
  console.log(circuit);
  return (
    <div className='ml-10 my-10'>
      <button onClick={async () => await console.log("hello")} className='border-black border-2'>Generate proof</button>
    </div>
  );
};
