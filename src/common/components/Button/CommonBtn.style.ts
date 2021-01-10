import styled from "styled-components";
import { disable } from "workbox-navigation-preload";

type properties = {
    color: string;
    disabled: boolean;
}

export const StyledBtnContainer = styled.button.attrs<properties>(props => ({
    disabled: props.disabled
}))`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${props => props.color};
    outline: black;
`
