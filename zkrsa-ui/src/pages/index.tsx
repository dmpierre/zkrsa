import type { NextPage } from 'next';
import { FunctionComponent, useState } from 'react';
import { ButtonInitializeVerifier, ButtonGenerateProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';

interface StatusVKey {
  vkey: any | null;
}
export const StatusVKey: FunctionComponent<StatusVKey> = ({ vkey }) => {

  return (
    <div>
      {vkey ? "Ready to generate proof" : "Verifier not initialized yet."}
    </div>
  );
};

const Home: NextPage = () => {
  const [ hash, sethash ] = useState<null | string>(null);
  const [ signature, setsignature ] = useState<null | string>(null);
  const [ publicKey, setpublicKey ] = useState<null | string>(null);
  const [ proof, setproof ] = useState<null | string>(null);
  const [ compiledCircuit, setcompiledCircuit ] = useState(null);
  const [ vkeyProof, setvkeyProof ] = useState<null | any>(null); // typing for vkey?
  const [ vkeyVerifier, setvkeyVerifier ] = useState<null | any>(null);
  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <StatusVKey vkey={vkeyProof}></StatusVKey>
      <InputHash sethash={sethash}></InputHash>
      <InputSignature setsignature={setsignature}></InputSignature>
      <InputPublicKey setpublicKey={setpublicKey}></InputPublicKey>
      <ButtonInitializeVerifier setvkeyVerifier={setvkeyVerifier} setvkeyProof={setvkeyProof}></ButtonInitializeVerifier>
      <ButtonGenerateProof
        vkeyVerifier={vkeyVerifier}
        vkeyProof={vkeyProof}
        setcompiledCircuit={setcompiledCircuit}
        hash={hash} signature={signature}
        publicKey={publicKey} setproof={setproof}></ButtonGenerateProof>
    </div>
  );
};
export default Home;
