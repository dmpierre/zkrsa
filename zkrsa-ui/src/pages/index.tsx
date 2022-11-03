import type { NextPage } from 'next';
import { createContext, Dispatch, FunctionComponent, useState } from 'react';
import { AppPageProps } from '../..';
import { ButtonInitializeVerifier, ButtonGenerateProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';


interface StatusVKey {
  vkey: any | null;
}
export const StatusVKey: FunctionComponent<StatusVKey> = ({ vkey }) => {

  return (
    <div className='mr-5'>
      {vkey ? "Ready to generate proof" : "Verifier not initialized yet."}
    </div>
  );
};


const Home: NextPage<AppPageProps> = ({ vkeyVerifier, setvkeyVerifier, vkeyProof, setvkeyProof }) => {
  const [ hash, sethash ] = useState<null | string>(null);
  const [ signature, setsignature ] = useState<null | string>(null);
  const [ publicKey, setpublicKey ] = useState<null | string>(null);
  const [ proof, setproof ] = useState<null | string>(null);
  const [ compiledCircuit, setcompiledCircuit ] = useState(null);
  
  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <div className='flex justify-center my-4'>
        <StatusVKey vkey={vkeyProof}></StatusVKey>
        <ButtonInitializeVerifier setvkeyVerifier={setvkeyVerifier} setvkeyProof={setvkeyProof}></ButtonInitializeVerifier>
      </div>
      <div className='flex flex-col items-center'>
        <InputHash sethash={sethash}></InputHash>
        <div className='my-4'>
          <InputSignature setsignature={setsignature}></InputSignature>
        </div>
        <InputPublicKey setpublicKey={setpublicKey}></InputPublicKey>
      </div>
      <div className='my-4 flex flex-col items-center'>
        <ButtonGenerateProof
          vkeyVerifier={vkeyVerifier}
          vkeyProof={vkeyProof}
          setcompiledCircuit={setcompiledCircuit}
          hash={hash} signature={signature}
          publicKey={publicKey} setproof={setproof}></ButtonGenerateProof>
      </div>
    </div>
  );
};
export default Home;
