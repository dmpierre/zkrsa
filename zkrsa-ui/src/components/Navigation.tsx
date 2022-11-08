import { NextComponentType } from "next";
import Link from "next/link";

export const NavMenu: NextComponentType = () => {
    return (

        <div className='flex my-6 flex-col text-center items-center md:flex-row md:justify-center'>
            <Link href="/generate">
                <a className="w-1/5 text-beige text-xl font-bold font-roboto-light-300">Generate</a>
            </Link>
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

