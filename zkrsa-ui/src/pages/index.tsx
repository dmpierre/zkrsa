import type { NextComponentType, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const Title: NextComponentType = () => {
  return (
    <div className="text-center my-10 text-3xl">
      zkRSA signature verification
    </div>
  );
};



const InputHash: NextComponentType = () => {
  const [ userInput, setuserInput ] = useState("");
  return (
    <div className='ml-10 my-10'>
      <div>Enter hash</div>
      <input className='border-black border-2' type="text" onChange={(e) => setuserInput(e.target.value)} />
    </div>
  );
};

const InputSignature: NextComponentType = () => {
  return (
    <div className='ml-10 my-10'>
      <div>Enter signature</div>
      <input className='border-black border-2' type="text" name="" id="" />
    </div>
  );
};

const InputPublicKey: NextComponentType = () => {
  const [ userInput, setuserInput ] = useState("");
  return (
    <div className='ml-10 my-10'>
      <div>Enter Public Key</div>
      <input className='border-black border-2' type="text" name="" id="" />
    </div>
  );
};

const ButtonGenerateProof: NextComponentType = () => {
  return (
    <div className='ml-10 my-10'>
      <button className='border-black border-2'>Generate proof</button>
    </div>
  );
};

const NavMenu: NextComponentType = () => {
  return (
    <div className='text-center'>
      <div className='flex justify-center'>
        <Link href="/">
          <a className='mr-5'>Prove</a>
        </Link>
        <Link href="/verify">
          <a className='ml-5'>Verify</a>
        </Link>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Title></Title>
      <NavMenu></NavMenu>
      <InputHash></InputHash>
      <InputSignature></InputSignature>
      <InputPublicKey></InputPublicKey>
      <ButtonGenerateProof></ButtonGenerateProof>
    </div>
  );
};
export default Home;
