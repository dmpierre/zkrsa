import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { generateRSAKeyPair } from "../utils/crypto";

interface GenerateKeyPair {
    setkeyPair: Dispatch<SetStateAction<null | CryptoKeyPair>>;
}

interface KeyPairDisplay {
    keypair: null | CryptoKeyPair;
}

export const KeyPairDisplay: FunctionComponent<KeyPairDisplay> = ({ keypair }) => {
    return (
        <>
        </>
    );
};

export const GenerateKeyPair: FunctionComponent<GenerateKeyPair> = ({ setkeyPair }) => {
    const [ waitText, setwaitText ] = useState<null | string>(null);
    return (
        <>
            <div className="my-5 ml-10">
                <button onClick={async () => {
                    const keypair = await generateRSAKeyPair();
                    setkeyPair(keypair);

                }} className="border-black border-2">Generate key pair</button>
            </div>
        </>
    );
};