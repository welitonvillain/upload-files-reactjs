import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    body {
        background: #E7EFFB;
        -webkit-font-smoothing: antialiased !important;
        font-family: Poppins, sans-serif;
    }

    #root {
        margin: 0 auto;
        max-width: 64rem;
        height: 100%;
    }
`;