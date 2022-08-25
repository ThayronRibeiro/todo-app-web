import styled from "styled-components";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";

type Props = {
  dark: boolean;
};

export const ButtonChangeMode = styled.div<Props>`
  background-image: url(${(props) => (props.dark ? sun : moon)});
  background-size: cover;
  background-repeat: no-repeat;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.5s;
`;
