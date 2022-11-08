import { FunctionComponent } from "react";


export const StatusVKey: FunctionComponent<StatusVKey> = ({ vkey, vkeyState }) => {

    return (
        <div className='mr-5 self-center text-beige font-roboto-light-300'>
            {vkeyState}
        </div>
    );
};
