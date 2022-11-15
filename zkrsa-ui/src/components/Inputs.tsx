import {
    ChangeEvent,
    Dispatch,
    FunctionComponent,
    SetStateAction,
    useState,
} from 'react'

export const textEncoder = new TextEncoder()

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
    return (
        <div className="border-gold sm:w-1/3 border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300  text-beige">
                Enter hash:{' '}
            </div>
            <input
                className="border-b-2 font-work-sans text-beige pl-2 w-full focus:outline-none bg-inherit"
                type="text"
                onChange={(e) => sethash(e.target.value)}
            />
        </div>
    )
}

export const InputSignature: FunctionComponent<InputSignature> = ({
    setsignature,
}) => {
    return (
        <div className="border-gold sm:w-1/3 border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">
                Enter signature:{' '}
            </div>
            <input
                className="border-b-2 font-work-sans text-beige pl-2 w-full focus:outline-none bg-inherit"
                type="text"
                name=""
                id=""
                onChange={(e) => setsignature(e.target.value)}
            />
        </div>
    )
}

export const InputPublicKey: FunctionComponent<InputPublicKey> = ({
    setpublicKey,
}) => {
    return (
        <div className="border-gold sm:w-1/3 border-4 p-10 rounded-2xl shadow-xl">
            <div className="font-roboto-light-300 text-beige">
                Enter public key:{' '}
            </div>
            <input
                className="border-b-2 w-full font-work-sans text-beige pl-2 focus:outline-none bg-inherit"
                type="text"
                name=""
                id=""
                onChange={(e) => setpublicKey(e.target.value)}
            />
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
                    // console.log(validity(vkeyVerifier, proof.proof, proof.publicSignals));
                }
            }
        }
    }

    return (
        <div className="border-gold border-4 pt-7 pb-7 rounded-2xl shadow-xl">
            <div className="pl-4 font-roboto-light-300 text-beige mb-3">
                Upload proof:{' '}
            </div>
            <input
                className="font-work-sans pl-4 text-beige focus:outline-none bg-inherit"
                type="file"
                onChange={handleChange}
            />
        </div>
    )
}
