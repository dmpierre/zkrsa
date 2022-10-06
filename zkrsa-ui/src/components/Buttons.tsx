import { NextComponentType } from "next";
import { generateRSAKeyPair } from "../utils/crypto";

export const ButtonGenerateProof: NextComponentType = () => {

    return (
      <div className='ml-10 my-10'>
        <button onClick={async () => await generateRSAKeyPair()} className='border-black border-2'>Generate proof</button>
      </div>
    );
  };
  