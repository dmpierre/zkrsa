import { NextPage } from "next";
import { StatusVKey } from ".";
import { AppPageProps } from "../..";
import { ButtonInitializeVerifier } from "../components/Buttons";
import { Title, NavMenu } from "../components/Navigation";

const Verify: NextPage<AppPageProps> = ({ vkeyVerifier, setvkeyVerifier, vkeyProof, setvkeyProof}) => {
    console.log(vkeyVerifier);
    return (
        <div>
            <Title></Title>
            <NavMenu></NavMenu>
            <div className='flex justify-center my-4'>
                <StatusVKey vkey={vkeyProof}></StatusVKey>
                <ButtonInitializeVerifier setvkeyVerifier={setvkeyVerifier} setvkeyProof={setvkeyProof}></ButtonInitializeVerifier>
            </div>

        </div>
    );
};

export default Verify;