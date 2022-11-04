
interface ButtonInitializeVerifier {
  setvkeyProof: Dispatch<SetStateAction<any | null>>;
  setvkeyVerifier: Dispatch<SetStateAction<any | null>>;
}

interface ButtonGenerateProof {
  setproof: Dispatch<SetStateAction<string | null>>;
  setcompiledCircuit: Dispatch<SetStateAction<null>>;
  hash: string | null;
  signature: string | null;
  publicKey: string | null;
  vkeyProof: null | any;
  vkeyVerifier: null | any;
}

interface AppPageProps {
  vkeyVerifier: null | any;
  setvkeyVerifier: Dispatch<any>;
  vkeyProof: null | any;
  setvkeyProof: Dispatch<any>;
}
