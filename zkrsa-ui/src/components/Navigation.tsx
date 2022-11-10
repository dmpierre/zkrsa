import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/github.png";

export const NavMenu: NextComponentType = () => {
    return (
        <div className='flex my-6 flex-col text-center items-center md:flex-row md:justify-center'>
            {/* <Link href="/generate">
                <a className="w-1/5 text-beige text-xl font-bold font-roboto-light-300">Generate</a>
            </Link> */}
            <Link href="/">
                <a className='w-1/5 text-beige text-xl font-bold my-2 md:my-0 md:ml-5 md:mr-5 font-roboto-light-300'>Prove</a>
            </Link>
            <Link href="/verify">
                <a className='w-1/5 text-beige text-xl font-bold font-roboto-light-300'>Verify</a>
            </Link>
        </div>
    );
};

export const Title: NextComponentType = () => {
    return (
        <div className="flex justify-center mt-10 my-4">
            <div className="w-1/2 text-beige text-center font-work-sans text-4xl">
                zkRSA signature verification
            </div>
        </div>
    );
};


export const Footer: NextComponentType = () => {
    return (
      <div className='flex justify-center mt-5 mb-5'>
        <div className='w-1/4 text-center self-center'>
          <a target={'_blank'} rel={"noreferrer"} href="https://github.com/dmpierre/zkrsa">
            <Image alt="github-logo" src={github} width={30} height={30}></Image>
          </a>
        </div>
        <div className='w-1/4 text-center font-work-sans text-beige'>
          <a target={"_blank"} rel={"noreferrer"} href="https://appliedzkp.org/">A PSE funded project</a>
        </div>
      </div>
    );
  };
  
  
  export const Description: NextComponentType = () => {
    return (
      <div className='flex font-roboto-light-300 my-10 text-beige justify-center'>
        <div className='w-3/4 text-center'>
          Generate a zero-knowledge proof for a valid RSA signature.
        </div>
      </div>
    );
  };
  