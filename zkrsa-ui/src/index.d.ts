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
  vkeyState: string;
  setvkeyState: Dispatch<string>;
  vkeyVerifier: null | any;
  setvkeyVerifier: Dispatch<any>;
  vkeyProof: null | any;
  setvkeyProof: Dispatch<any>;
}
