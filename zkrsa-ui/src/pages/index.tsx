import type { NextPage } from 'next';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { ButtonInitializeVerifier, ButtonGenerateProof, ButtonExportProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title, Description, Footer } from '../components/Navigation';
import { StatusVKey } from '../components/Status';
/**
 * @dev for exporting json proof and public signals data 
 */
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const Home: NextPage<AppPageProps> = ({ vkeyState, setvkeyState, vkeyVerifier, setvkeyVerifier, vkeyProof, setvkeyProof }) => {
  const [ hash, sethash ] = useState<null | string>(null);
  const [ signature, setsignature ] = useState<null | string>(null);
  const [ publicKey, setpublicKey ] = useState<null | string>(null);
  const [ proof, setproof ] = useState<null | string>(null);
  const [ publicSignals, setpublicSignals ] = useState<null | any>(null);
  const [ compiledCircuit, setcompiledCircuit ] = useState(null);

  return (
    <div>
      <Title></Title>
      <Description></Description>
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
      <div className='mt-4 flex flex-col items-center'>
        <ButtonGenerateProof
          vkeyVerifier={vkeyVerifier}
          vkeyProof={vkeyProof}
          setcompiledCircuit={setcompiledCircuit}
          setpublicSignals={setpublicSignals}
          hash={hash} signature={signature}
          publicKey={publicKey} setproof={setproof}></ButtonGenerateProof>
      </div>
      {proof ? <div className='mt-4 flex flex-col items-center'>
        <ButtonExportProof publicSignals={publicSignals} proof={proof}></ButtonExportProof>
      </div> : null}
      <Footer></Footer>
    </div>
  );
};
export default Home;
