import type { NextPage } from 'next';
import { useState } from 'react';
import { ButtonGenerateProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';


const Home: NextPage = () => {
  const [ userText, setuserText ] = useState<null | string>(null);
  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <InputText setuserText={setuserText}></InputText>
      <InputHash></InputHash>
      <InputSignature></InputSignature>
      <InputPublicKey></InputPublicKey>
      <ButtonGenerateProof></ButtonGenerateProof>
    </div>
  );
};
export default Home;
