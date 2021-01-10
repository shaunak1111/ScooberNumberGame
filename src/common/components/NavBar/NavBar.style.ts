import styled from "styled-components";
import { THEME_COLOR } from "../../constants/constants-styles";

export const NavBarContainer = styled.header`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: ${THEME_COLOR};
    padding: 1rem 0 1rem 1rem;
    color: white;
    & h1 {
        margin: 0;
    }
    & p {
        margin: 0;
    }
`
