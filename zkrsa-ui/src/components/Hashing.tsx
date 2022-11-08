import bigInt from "big-integer";
import { Dispatch, SetStateAction, FunctionComponent, useEffect, useState } from "react";
import { hash } from "../utils/crypto";
import { InputText } from "./Inputs";
//@ts-ignore
import * as ab2str from "arraybuffer-to-string";

interface HashText {
    text: string | null;
    hashValue: string | null;
    sethashValue: Dispatch<SetStateAction<string | null>>;
};

const HashText: FunctionComponent<HashText> = ({ text, hashValue, sethashValue }) => {
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
    }, [ text, sethashValue ]);

    return (
        <>
            <div className="ml-10">Message: {text}</div>
            <div className="ml-10">Hash: {hashValue}</div>
        </>
    );
};

interface HashMessage {
    sethashValue: Dispatch<SetStateAction<string | null>>,
    setuserText: Dispatch<SetStateAction<string | null>>,
    userText: string | null,
    hashValue: string | null
}

export const HashMessage: FunctionComponent<HashMessage> = ({ sethashValue, setuserText, userText, hashValue }) => {

    return (
        <>
            <InputText setuserText={setuserText} ></InputText >
            <HashText text={userText} hashValue={hashValue} sethashValue={sethashValue}></HashText>
        </>
    );
};

