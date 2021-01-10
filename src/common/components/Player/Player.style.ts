import styled from "styled-components";

type properties = {
    position: 'right' | 'left';
}

// float: ${props => props.position};
//     display: flex;
// flex-direction: column;
// justify-content: ${props => props.position === 'left' ? 'flex-start': 'flex-end' };

export const StyledPlayerContainer = styled.section<properties>`
    margin: 2em 0 0 0;
    input {
        margin: 2rem 0 0 0;
    }
    display: flex;
    flex-direction: column;
    align-items: ${props => props.position === 'left' ? 'flex-start': 'flex-end' };
`
