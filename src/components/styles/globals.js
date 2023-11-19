import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --color-indigo-100: rgb(224 231 255);
  --color-indigo-300: rgb(165 180 252);
  --color-indigo-500:rgb(99 102 241);
  --color-indigo-700: rgb(67 56 202);
  --color-indigo-800: rgb(55 48 163);
  --color-gray-100: rgb(243 244 246);
  --color-gray-200: rgb(229 231 235);
  --color-gray-400: rgb(156 163 175);
  --color-gray-500: rgb(107 114 128);
  --color-gray-950:  rgb(3 7 18);
  --color-red-200:rgb(254 202 202);
  --color-red-500: rgb(239 68 68);
  --color-red-800: rgb(153 27 27);
  --backdrop-color:  rgba(0, 0, 0, 0.1)
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body{
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--color-gray-950);
}

.col-start-2 {
  grid-column-start: 2;
}
.col-start-3	{
  grid-column-start: 3;
}
.col-start-4 {
  grid-column-start: 4;
}
.col-start-5	{
  grid-column-start: 5;
}
.col-start-6 {
  grid-column-start: 6;
}
.col-start-7 {
  grid-column-start: 7;
  }
`

export default GlobalStyles
