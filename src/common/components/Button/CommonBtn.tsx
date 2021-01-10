import * as React from 'react';
import { THEME_COLOR } from '../../constants/constants-styles';
import { StyledBtnContainer } from './CommonBtn.style';

interface ICommonBtnProps {
    color?: string;
    content: string | number;
    disabled?: boolean;
    onClick?: () => void;
}


const CommonBtn: React.FunctionComponent<ICommonBtnProps> = ({
    color = THEME_COLOR,
    content,
    disabled = false,
    onClick = () => { }
}) => {
    return <StyledBtnContainer
        color={color}
        disabled={disabled}
        onClick={onClick}
    >{content}</StyledBtnContainer>;
};

export default CommonBtn;
