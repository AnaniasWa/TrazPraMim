import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --cyan: #0987A0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }


    body {
        background: var(--cyan);
        -webkit-font-smoothing: antialiased;
        font-family:'Roboto', sans-serif;
    }
`;