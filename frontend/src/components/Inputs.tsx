import {
    ChangeEvent,
    Dispatch,
    Fragment,
    FunctionComponent,
    SetStateAction,
    useState,
} from 'react'
import { splitToWords } from '../utils/crypto'

export const textEncoder = new TextEncoder()

enum InputInvalidity {
    MISSING = 'missing',
    INVALID_CHARACTER = 'input should be integers only.',
}

export const InputText: FunctionComponent<TextInputProps> = ({
    setuserText,
}) => {
    return (
        <div className="ml-10 my-10 font-roboto-light-300 text-beige">
            <div>Enter text</div>
            <input
                className="border-b-2 focus:outline-none"
                type="text"
                onChange={(e) => setuserText(e.target.value)}
            />
        </div>
    )
}

export const InputHash: FunctionComponent<InputHash> = ({ sethash }) => {
    const [invalidHash, setinvalidHash] = useState<string | null>(null)
    return (
        <div className="border-gold space-y-2 sm:w-1/3 border-4 p-4 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300  text-beige">
                Enter hash:{' '}
            </div>
            <input
                className="border-b-2 font-work-sans text-beige pl-2 w-full focus:outline-none bg-inherit"
                type="text"
                onChange={(e) =>
                    isValidIntegerInput(e.target.value, sethash, setinvalidHash)
                }
            />
            <div className="text-gold mt-2 text-sm">
                {invalidHash ? invalidHash : <Fragment>&nbsp;</Fragment>}
            </div>
        </div>
    )
}

export const isValidIntegerInput = (
    value: string,
    setvalue: Dispatch<SetStateAction<any | null>>,
    seterror: Dispatch<SetStateAction<any | null>>
) => {
    try {
        const _ignore = splitToWords(value, 64, 32, 'sign')
        setvalue(value)
        seterror(null)
        return true
    } catch (error) {
        seterror(InputInvalidity.INVALID_CHARACTER)
        return false
    }
}

export const InputSignature: FunctionComponent<InputSignature> = ({
    setsignature,
}) => {
    const [invalidSignature, setinvalidSignature] = useState<string | null>(
        null
    )
    return (
        <div className="border-gold space-y-2 sm:w-1/3 border-4 p-4 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">
                Enter signature:{' '}
            </div>
            <input
                className="border-b-2 w-full font-work-sans text-beige pl-2 w-full focus:outline-none bg-inherit"
                type="text"
                name=""
                id=""
                onChange={(e) =>
                    isValidIntegerInput(
                        e.target.value,
                        setsignature,
                        setinvalidSignature
                    )
                }
            />
            <div className="text-gold mt-2 text-sm">
                {invalidSignature ? (
                    invalidSignature
                ) : (
                    <Fragment>&nbsp;</Fragment>
                )}
            </div>
        </div>
    )
}

export const InputPublicKey: FunctionComponent<InputPublicKey> = ({
    setpublicKey,
}) => {
    const [invalidPublicKey, setinvalidPublicKey] = useState<string | null>(
        null
    )

    return (
        <div className="border-gold space-y-2 sm:w-1/3 border-4 p-4 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">
                Enter public key:{' '}
            </div>
            <input
                className="border-b-2 w-full font-work-sans text-beige pl-2 focus:outline-none bg-inherit"
                type="text"
                name=""
                id=""
                onChange={(e) =>
                    isValidIntegerInput(
                        e.target.value,
                        setpublicKey,
                        setinvalidPublicKey
                    )
                }
            />
            <div className="text-gold mt-2 text-sm">
                {invalidPublicKey ? (
                    invalidPublicKey
                ) : (
                    <Fragment>&nbsp;</Fragment>
                )}
            </div>
        </div>
    )
}

export const InputProof: FunctionComponent<InputProof> = ({
    setuploadedProof,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileReader = new FileReader()
            fileReader.readAsText(e.target.files[0], 'UTF-8')
            fileReader.onload = (e) => {
                if (e.target) {
                    const proof = JSON.parse(e.target.result as string)
                    console.log(proof)
                    setuploadedProof(proof)
                }
            }
        }
    }

    return (
        <div className="w-10/12 sm:w-1/3 border-gold border-4 pt-7 pb-7 rounded-2xl shadow-xl">
            <div className="pl-4 font-roboto-light-300 text-beige mb-3">
                Upload proof:{' '}
            </div>
            <input
                className="hidden"
                type="file"
                id="proofFile"
                onChange={handleChange}
            />
            <label
                className="m-5 hover:cursor-pointer hover:border-gold hover:border-b-2 font-work-sans text-beige focus:outline-none bg-inherit"
                htmlFor="proofFile"
            >
                Choose file
            </label>
        </div>
    )
}
