"use client";

import { createGlobalStyle } from "styled-components";

import { Bellefair } from "@next/font/google";

const belleFair = Bellefair({ weight: "400", subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        --white : #FFF;
        --black : #0B0D17;
        --blue : #D0D6F9;

        font-size : 62.5%;
    }
    
    body {
        font-family: ${belleFair.style.fontFamily};


    }

 

`;
