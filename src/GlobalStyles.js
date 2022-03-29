import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: yesteryear, sans-serif;
    font-size : 112.5%;
    background-color: #F2F3F8;

}

input, label, button, textarea {
    font-size: 1em;
}
`;
