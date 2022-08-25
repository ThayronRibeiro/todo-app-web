import styled from "styled-components";
import bgDarkMobile from "../../assets/images/bg-mobile-dark.jpg";
import bgDarkDesktop from "../../assets/images/bg-desktop-dark.jpg";
import bgLightMobile from "../../assets/images/bg-mobile-light.jpg";
import bdLightDesktop from "../../assets/images/bg-desktop-light.jpg";

type Props = {
  darkMode?: boolean;
};

export const HeaderImg = styled.div<Props>`
  background-image: url(${(props) =>
    props.darkMode ? bgDarkMobile : bgLightMobile});
  background-size: cover;
  height: 225px;
  width: 100%;
  transition: all ease 0.5s;

  @media screen and (min-width: 756px) {
    & {
      background-image: url(${(props) =>
        props.darkMode ? bgDarkDesktop : bdLightDesktop});
    }
  }
`;
