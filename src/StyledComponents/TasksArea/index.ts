import styled from "styled-components";

interface Props {
  children: any;
  darkMode?: boolean;
}

export const TasksArea = styled.div<Props>`
  margin: 25px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  min-height: 300px;
  color: hsl(234, 39%, 85%);
  height: 100%;
  transition: all ease .5s;
  overflow-y: auto; 
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch; 
  ::-webkit-scrollbar{width:6px;border-left:1px solid #E6ECF8;}
  ::-webkit-scrollbar-thumb{background-color:#f0e2d2;}
  background-color: ${(props) =>
    props.darkMode ? "var(--darkBack)" : "var(--lightBack)"}; 

  @media screen and (min-width: 760px) {
    & {
      max-width: 500px;
      min-height: 200px;
      max-height: 280px;
      overflow-y: auto;
    }
`;
