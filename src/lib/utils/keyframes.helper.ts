import { keyframes } from "styled-components";

export const appearanceIn = keyframes`
    from {
        opacity: 0;
        visibility: hidden;
    }

    to {
        opacity: 1;
        visibility: visible;
    }
`;

export const appearanceOut = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    }

    to {
        opacity: 0;
        visibility: hidden;
    }
`;
