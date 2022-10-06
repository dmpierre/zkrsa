import type { NextPage } from 'next';
import { ButtonGenerateProof } from '../components/Buttons';
import { InputHash, InputPublicKey, InputSignature, InputText } from '../components/Inputs';
import { NavMenu, Title } from '../components/Navigation';


const Home: NextPage = () => {
  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <InputText></InputText>
      <InputHash></InputHash>
      <InputSignature></InputSignature>
      <InputPublicKey></InputPublicKey>
      <ButtonGenerateProof></ButtonGenerateProof>
    </div>
  );
};
export default Home;
