import { NextComponentType } from "next";
import { Title, NavMenu } from "../components/Navigation";
import { HashMessage } from "../components/Hashing";
import { GenerateKeyPair } from "../components/GenerateKeyPair";
import { useState } from "react";

/**
 * Generate a new RSA key pair and sign a message with it.
 * @returns 
 */
const Generate: NextComponentType = () => {
    const [ keyPair, setkeyPair ] = useState<null | CryptoKeyPair>(null);
    return (
        <div>
            <Title></Title>
            <NavMenu></NavMenu>
            <HashMessage></HashMessage>
            <GenerateKeyPair setkeyPair={setkeyPair}></GenerateKeyPair>
        </div>
    );
};


export default Generate;