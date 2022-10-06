import { FunctionComponent } from "react";
import { generateRSAKeyPair } from "../utils/crypto";

interface GenerateKeyPairProps {
    keypair: CryptoKeyPair | null;
}

export const GenerateKeyPair: FunctionComponent<GenerateKeyPairProps> = ({ keypair }) => {
    return (
        <>
            <div className="my-5 ml-10">
                <button onClick={async () => await generateRSAKeyPair()} className="border-black border-2">Generate key pair</button>
            </div>
        </>
    );
};