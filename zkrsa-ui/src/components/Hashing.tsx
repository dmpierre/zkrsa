import bigInt from "big-integer";
import { Dispatch, SetStateAction, FunctionComponent, useEffect, useState } from "react";
import { hash } from "../utils/crypto";
import { InputText } from "./Inputs";
//@ts-ignore
import * as ab2str from "arraybuffer-to-string";

interface HashTextProps {
    text: string | null;
    hashValue: string | null;
    sethashValue: Dispatch<SetStateAction<string | null>>;
};

const HashText: FunctionComponent<HashTextProps> = ({ text, hashValue, sethashValue }) => {
    useEffect(() => {
        (async function () {
            if (text) {
                const hashValue = await hash(text, new TextEncoder());
                const digestDecimal = bigInt(ab2str(hashValue, "hex"), 16).toString();
                sethashValue(digestDecimal);
            }
            else {
                sethashValue(null);
            }
        })();
    }, [ text ]);

    return (
        <>
            <div className="ml-10">Message: {text}</div>
            <div className="ml-10">Hash: {hashValue}</div>
        </>
    );
};

export const HashMessage: FunctionComponent = () => {
    const [ userText, setuserText ] = useState<string | null>(null);
    const [ hashValue, sethashValue ] = useState<string | null>(null);

    return (
        <>
            <InputText setuserText={setuserText} ></InputText >
            <HashText text={userText} hashValue={hashValue} sethashValue={sethashValue}></HashText>
        </>
    );
};

