import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    margin: 0;
    min-height: 100%;
    background-color: #fff;
    font-family: Visbyroundcf, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;

    /* remove margin for the main div that Gatsby mounts into */
    > div {
        margin-top: 0;
    }
}

img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  margin-bottom: 10px;
}

h1 {
  font-size: 38px;
  line-height: 44px;
  margin-top: 20px;
}

h2 {
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
}

h3 {
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;
}

h4 {
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
}

h5 {
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
}

h6 {
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

`
export default GlobalCSS;