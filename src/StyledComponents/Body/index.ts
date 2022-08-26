import { createGlobalStyle } from "styled-components";

type Body = {
  darkMode?: boolean;
};

export const Body = createGlobalStyle<Body>`
  body {
    background-color: ${(props) =>
      props.darkMode ? "hsl(235, 21%, 11%)" : "hsl(236, 33%, 92%)"};
      transition: all ease 0.5s
  }
`;
