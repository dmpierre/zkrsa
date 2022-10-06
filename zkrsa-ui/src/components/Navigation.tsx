import { NextComponentType } from "next";
import Link from "next/link";

export const NavMenu: NextComponentType = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
                <Link href="/generate">
                    <a className="mr-5">Generate</a>
                </Link>
                <Link href="/">
                    <a className='ml-5 mr-5'>Prove</a>
                </Link>
                <Link href="/verify">
                    <a className='ml-5'>Verify</a>
                </Link>
            </div>
        </div>
    );
};

export const Title: NextComponentType = () => {
    return (
        <div className="text-center my-10 text-3xl">
            zkRSA signature verification
        </div>
    );
};

