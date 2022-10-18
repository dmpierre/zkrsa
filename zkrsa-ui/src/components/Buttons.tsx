import { NextComponentType } from "next";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { generateRSAKeyPair } from "../utils/crypto";

interface ButtonGenerateProof {
  setproof: Dispatch<SetStateAction<string | null>>;
}

export const ButtonGenerateProof: FunctionComponent<ButtonGenerateProof> = ({ setproof }) => {

  return (
    <div className='ml-10 my-10'>
      <button onClick={async () => console.log("Hello")} className='border-black border-2'>Generate proof</button>
    </div>
  );
};
