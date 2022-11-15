import type { NextPage } from 'next'
import { StatusVKey } from '../components/Status'
import { ButtonInitializeVerifier, theme } from '../components/Buttons'
import { Title, NavMenu, Description, Footer } from '../components/Navigation'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ThemeProvider } from '@mui/material/styles'

//@ts-ignore
import snarkjs from 'snarkjs'
//@ts-ignore
import { unstringifyBigInts } from 'snarkjs/src/stringifybigint'
import { InputProof } from '../components/Inputs'

const validity = (vkeyVerifier: any, proof: any, publicSignals: any) => {
    return snarkjs.original.isValid(
        unstringifyBigInts(vkeyVerifier),
        unstringifyBigInts(proof),
        unstringifyBigInts(publicSignals)
    )
}

const Verify: NextPage<AppPageProps> = ({
    proof,
    setproof,
    vkeyState,
    setvkeyState,
    vkeyVerifier,
    setvkeyVerifier,
    vkeyProof,
    setvkeyProof,
}) => {
    const [uploadedProof, setuploadedProof] = useState<any | null>(null)
    const [proofValidity, setproofValidity] = useState<boolean | null>(null)
    const [verifying, setverifying] = useState(false)

    return (
        <div>
            <Title></Title>
            <Description></Description>
            <NavMenu></NavMenu>
            <div className="flex justify-center my-4">
                <StatusVKey vkeyState={vkeyState} vkey={vkeyProof}></StatusVKey>
                <ButtonInitializeVerifier
                    setvkeyState={setvkeyState}
                    setvkeyVerifier={setvkeyVerifier}
                    setvkeyProof={setvkeyProof}
                ></ButtonInitializeVerifier>
            </div>
            <div className="flex justify-center">
                <InputProof setuploadedProof={setuploadedProof}></InputProof>
            </div>
            <div className="flex w-3/4 justify-end my-5">
                {verifying ? (
                    <ThemeProvider theme={theme}>
                        <CircularProgress
                            disableShrink
                            size={40}
                            color="primary"
                        />
                    </ThemeProvider>
                ) : (
                    <button
                        onClick={() => {
                            setverifying(true)
                            const proofValidity = validity(
                                vkeyVerifier,
                                uploadedProof.proof,
                                uploadedProof.publicSignals
                            )
                            setproofValidity(proofValidity)
                            setverifying(false)
                        }}
                        className="font-work-sans shadow-xl disabled:text-gray-400 disabled:border-gray-400 focus:outline-none text-beige border-2 rounded-lg border-beige hover:border-gold px-3 py-2"
                        disabled={uploadedProof && vkeyVerifier ? false : true}
                    >
                        Verify
                    </button>
                )}
            </div>
            {proofValidity != null ? (
                <div className="flex justify-center text-beige text-xl">
                    {proofValidity ? `Valid proof ✅` : `Invalid proof ❌`}
                </div>
            ) : null}
            <Footer></Footer>
        </div>
    )
}

export default Verify
