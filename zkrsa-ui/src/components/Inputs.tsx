import { NextComponentType } from "next";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export const textEncoder = new TextEncoder();

interface TextInputProps {
    text: string | null;
    setuserText: Dispatch<SetStateAction<string | null>>;
}

export const InputText: FunctionComponent<TextInputProps> = ({text, setuserText}) => {

    return (
        <div className="ml-10 my-10">
            <div>Enter text</div>
            <input className="border-black border-2" type="text" onChange={(e) => setuserText(e.target.value)} />
        </div>
    );
};

export const InputHash: NextComponentType = () => {
    const [ userInput, setuserInput ] = useState("");
    return (
        <div className='ml-10 my-10'>
            <div>Enter hash</div>
            <input className='border-black border-2' type="text" onChange={(e) => setuserInput(e.target.value)} />
        </div>
    );
};

export const InputSignature: NextComponentType = () => {
    return (
        <div className='ml-10 my-10'>
            <div>Enter signature</div>
            <input className='border-black border-2' type="text" name="" id="" />
        </div>
    );
};

export const InputPublicKey: NextComponentType = () => {
    const [ userInput, setuserInput ] = useState("");
    return (
        <div className='ml-10 my-10'>
            <div>Enter Public Key</div>
            <input className='border-black border-2' type="text" name="" id="" />
        </div>
    );
};
