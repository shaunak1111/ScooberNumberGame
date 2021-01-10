import * as React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
    value: string
}

const Input: React.FunctionComponent<InputProps> = ({value}) => {
    return(
        <StyledInput
            value={value}
            type="text"
            disabled={true}
        />
    )

};

export default Input;
