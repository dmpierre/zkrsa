import type { NextPage } from 'next';
import { createContext, Dispatch, FunctionComponent, useState } from 'react';
import { ButtonInitializeVerifier, ButtonGenerateProof, ButtonExportProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';


interface StatusVKey {
  vkey: any | null;
  vkeyState: string;
}
export const StatusVKey: FunctionComponent<StatusVKey> = ({ vkey, vkeyState }) => {

  return (
    <div className='mr-5 self-center text-beige font-roboto-light-300'>
      {vkeyState}
    </div>
  );
};

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const Home: NextPage<AppPageProps> = ({ vkeyState, setvkeyState, vkeyVerifier, setvkeyVerifier, vkeyProof, setvkeyProof }) => {
  const [ hash, sethash ] = useState<null | string>(null);
  const [ signature, setsignature ] = useState<null | string>(null);
  const [ publicKey, setpublicKey ] = useState<null | string>(null);
  const [ proof, setproof ] = useState<null | string>(null);
  const [ publicSignals, setpublicSignals ] = useState<null | any>(null);
  const [ compiledCircuit, setcompiledCircuit ] = useState(null);

  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <div className='flex justify-center my-4'>
        <StatusVKey vkeyState={vkeyState} vkey={vkeyProof}></StatusVKey>
        <ButtonInitializeVerifier setvkeyState={setvkeyState} setvkeyVerifier={setvkeyVerifier} setvkeyProof={setvkeyProof}></ButtonInitializeVerifier>
      </div>
      <div className='mt-5 flex flex-col items-center'>
        <InputHash sethash={sethash}></InputHash>
        <div className='my-10'>
          <InputSignature setsignature={setsignature}></InputSignature>
        </div>
        <InputPublicKey setpublicKey={setpublicKey}></InputPublicKey>
      </div>
      <div className='my-4 flex flex-col items-center'>
        <ButtonGenerateProof
          vkeyVerifier={vkeyVerifier}
          vkeyProof={vkeyProof}
          setcompiledCircuit={setcompiledCircuit}
          setpublicSignals={setpublicSignals}
          hash={hash} signature={signature}
          publicKey={publicKey} setproof={setproof}></ButtonGenerateProof>
      </div>
      <div className='my-4 flex flex-col items-center'>
        <ButtonExportProof publicSignals={publicSignals} proof={proof}></ButtonExportProof>
      </div>
    </div>
  );
};
export default Home;
