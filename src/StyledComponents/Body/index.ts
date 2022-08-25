import styled, { createGlobalStyle } from "styled-components";

type Body = {
  darkMode?: boolean;
};

export const Body = createGlobalStyle<Body>`
  body {
    background-color: ${(props) =>
      props.darkMode ? "hsl(235, 21%, 11%)" : "#fff"};
      transition: all ease 0.5s
  }
`;
