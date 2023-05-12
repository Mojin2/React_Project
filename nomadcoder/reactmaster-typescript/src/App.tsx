import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";
import { useState } from "react";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./theme";

// RESET.css //
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing:border-box;
}
body{
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
a{
  text-decoration:none;
  color:inherit;
}
`;
const ModeButton = styled.button`
  margin-top: 50px;
  border: none;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [themeMode, setThemeMode] = useState("black");
  const theme = themeMode === "black" ? darkTheme : lightTheme;

  const toggleTheme = () =>
    setThemeMode(themeMode === "black" ? "light" : "black");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
      <ModeButton onClick={toggleTheme}>mode change</ModeButton>
    </ThemeProvider>
  );

  ////////////////////STATE WITH TYPESCRIPT////////////////////////
  // const [value, setValue] = useState("");
  // function onChange(event: React.FormEvent<HTMLInputElement>) {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setValue(value);
  // }
  // function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   console.log(event);
  //   setValue("");
  // }
  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         value={value}
  //         type={"text"}
  //         placeholder={"username"}
  //         onChange={onChange}
  //       />
  //       <button>Login</button>
  //     </form>
  //   </div>
  // );
}

export default App;
