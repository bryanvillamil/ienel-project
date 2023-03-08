import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint';

export const HeaderCustom = styled.header`
    width: 100%;
    height: 300px;
    background: red;

    ${breakpoint('md')`
        background: green;
        height: 200px;
    `}

    ${breakpoint('lg')`
        background: blue;
        height: 400px;
    `}

    ${breakpoint('xxl')`
        background: yellow;
        height: 300px;
    `}
`;
