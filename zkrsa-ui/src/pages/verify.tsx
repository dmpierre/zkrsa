import type { NextPage } from "next";
import { StatusVKey } from "../components/Status";
import { ButtonInitializeVerifier } from "../components/Buttons";
import { Title, NavMenu } from "../components/Navigation";

const Verify: NextPage<AppPageProps> = ({ vkeyState, setvkeyState, vkeyVerifier, setvkeyVerifier, vkeyProof, setvkeyProof }) => {
    return (
        <div>
            <Title></Title>
            <NavMenu></NavMenu>
            <div className='flex justify-center my-4'>
                <StatusVKey vkeyState={vkeyState} vkey={vkeyProof}></StatusVKey>
                <ButtonInitializeVerifier setvkeyState={setvkeyState} setvkeyVerifier={setvkeyVerifier} setvkeyProof={setvkeyProof}></ButtonInitializeVerifier>
            </div>
        </div>
    );
};

export default Verify;