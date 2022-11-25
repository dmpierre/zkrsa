interface StatusVKey {
    vkey: any | null;
    vkeyState: string;
}

interface ButtonInitializeVerifier {
    setvkeyState: Dispatch<string>;
    setvkeyProof: Dispatch<SetStateAction<any | null>>;
    setvkeyVerifier: Dispatch<SetStateAction<any | null>>;
}

interface ButtonGenerateProof {
    setpublicSignals: Dispatch<any>;
    setproof: Dispatch<SetStateAction<string | null>>;
    setcompiledCircuit: Dispatch<SetStateAction<null>>;
    hash: string | null;
    signature: string | null;
    publicKey: string | null;
    vkeyProof: null | any;
    vkeyVerifier: null | any;
}

interface AppPageProps {
    proof: any;
    setproof: Dispatch<any>;
    vkeyState: string;
    setvkeyState: Dispatch<string>;
    vkeyVerifier: null | any;
    setvkeyVerifier: Dispatch<any>;
    vkeyProof: null | any;
    setvkeyProof: Dispatch<any>;
}

interface InputProof {
    setuploadedProof: Dispatch<any>;
}

interface HashMessage {
    sethashValue: Dispatch<SetStateAction<string | null>>;
    setuserText: Dispatch<SetStateAction<string | null>>;
    userText: string | null;
    hashValue: string | null;
}

interface HashText {
    text: string | null;
    hashValue: string | null;
    sethashValue: Dispatch<SetStateAction<string | null>>;
}

interface TextInputProps {
    setuserText: Dispatch<SetStateAction<string | null>>;
}

interface InputHash {
    sethash: Dispatch<SetStateAction<string | null>>;
}

interface InputSignature {
    setsignature: Dispatch<SetStateAction<string | null>>;
}

interface InputPublicKey {
    setpublicKey: Dispatch<SetStateAction<string | null>>;
}

interface SignedMessage {
    keypair: CryptoKeyPair | null;
    message: string | null;
    setSignedMessage: Dispatch<SetStateAction<ArrayBuffer | null>>;
    signedMessage: null | ArrayBuffer;
}
