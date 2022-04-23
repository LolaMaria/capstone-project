import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: yesteryear, sans-serif;
    font-size : 112.5%;
    background-color: #FBF8F1;

}

input, label, button, textarea {
    font-size: 1em;
}
`;
