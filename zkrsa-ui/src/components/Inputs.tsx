import { NextComponentType } from "next";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export const textEncoder = new TextEncoder();

interface TextInputProps {
    setuserText: Dispatch<SetStateAction<string | null>>;
}

export const InputText: FunctionComponent<TextInputProps> = ({ setuserText }) => {

    return (
        <div className="ml-10 my-10">
            <div>Enter text</div>
            <input className="border-black border-2" type="text" onChange={(e) => setuserText(e.target.value)} />
        </div>
    );
};

interface InputHash {
    sethash: Dispatch<SetStateAction<string | null>>;
}

export const InputHash: FunctionComponent<InputHash> = ({ sethash }) => {
    return (
        <div>
            <div>Enter hash</div>
            <input className='border-black border-2' type="text" onChange={(e) => sethash(e.target.value)} />
        </div>
    );
};

interface InputSignature {
    setsignature: Dispatch<SetStateAction<string | null>>;
}

export const InputSignature: FunctionComponent<InputSignature> = ({ setsignature }) => {
    return (
        <div>
            <div>Enter signature</div>
            <input className='border-black border-2' type="text" name="" id="" onChange={(e) => setsignature(e.target.value)} />
        </div>
    );
};

interface InputPublicKey {
    setpublicKey: Dispatch<SetStateAction<string | null>>;
}

export const InputPublicKey: FunctionComponent<InputPublicKey> = ({ setpublicKey }) => {
    return (
        <div>
            <div>Enter Public Key</div>
            <input className='border-black border-2' type="text" name="" id="" onChange={(e) => setpublicKey(e.target.value)} />
        </div>
    );
};
