import { Dispatch, SetStateAction } from 'react';
import { splitToWords } from './crypto';

export enum InputInvalidity {
    MISSING = 'missing',
    INVALID_CHARACTER = 'input should be integers only.',
    INVALID_PROOF_FILE = 'proof file is invalid.',
}

export const isValidIntegerInput = (
    value: string,
    setvalue: Dispatch<SetStateAction<any | null>>,
    seterror: Dispatch<SetStateAction<any | null>>
) => {
    try {
        const _ignore = splitToWords(value, 64, 32, 'sign');
        setvalue(value);
        seterror(null);
        return true;
    } catch (error) {
        seterror(InputInvalidity.INVALID_CHARACTER);
        return false;
    }
};
