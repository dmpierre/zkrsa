import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export const textEncoder = new TextEncoder();

interface TextInputProps {
    setuserText: Dispatch<SetStateAction<string | null>>;
}

export const InputText: FunctionComponent<TextInputProps> = ({ setuserText }) => {

    return (
        <div className="ml-10 my-10 font-roboto-light-300 text-beige">
            <div>Enter text</div>
            <input className="border-b-2 focus:outline-none" type="text" onChange={(e) => setuserText(e.target.value)} />
        </div>
    );
};

interface InputHash {
    sethash: Dispatch<SetStateAction<string | null>>;
}

export const InputHash: FunctionComponent<InputHash> = ({ sethash }) => {
    return (
        <div className="border-gold border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300  text-beige">Enter hash: </div>
            <input className='border-b-2 font-work-sans text-beige pl-2 pr-40 focus:outline-none bg-inherit' type="text" onChange={(e) => sethash(e.target.value)} />
        </div>
    );
};

interface InputSignature {
    setsignature: Dispatch<SetStateAction<string | null>>;
}

export const InputSignature: FunctionComponent<InputSignature> = ({ setsignature }) => {
    return (
        <div className="border-gold border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">Enter signature: </div>
            <input className='border-b-2 font-work-sans text-beige pl-2 pr-40 focus:outline-none bg-inherit' type="text" name="" id="" onChange={(e) => setsignature(e.target.value)} />
        </div>
    );
};

interface InputPublicKey {
    setpublicKey: Dispatch<SetStateAction<string | null>>;
}

export const InputPublicKey: FunctionComponent<InputPublicKey> = ({ setpublicKey }) => {
    return (
        <div className="border-gold border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">Enter Public Key: </div>
            <input className='border-b-2 font-work-sans text-beige pl-2 pr-40 focus:outline-none bg-inherit' type="text" name="" id="" onChange={(e) => setpublicKey(e.target.value)} />
        </div>
    );
};
