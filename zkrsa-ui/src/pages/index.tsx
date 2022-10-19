import type { NextPage } from 'next';
import { useState } from 'react';
import { ButtonGenerateProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';

const Home: NextPage = () => {
  const [ hash, sethash ] = useState<null | string>(null);
  const [ signature, setsignature ] = useState<null | string>(null);
  const [ publicKey, setpublicKey ] = useState<null | string>(null);
  const [ proof, setproof ] = useState<null | string>(null);
  const [ compiledCircuit, setcompiledCircuit ] = useState(null);

  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <InputHash sethash={sethash}></InputHash>
      <InputSignature setsignature={setsignature}></InputSignature>
      <InputPublicKey setpublicKey={setpublicKey}></InputPublicKey>
      <ButtonGenerateProof
        setcompiledCircuit={setcompiledCircuit}
        hash={hash} signature={signature}
        publicKey={publicKey} setproof={setproof}></ButtonGenerateProof>
    </div>
  );
};
export default Home;
