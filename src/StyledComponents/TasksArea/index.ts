import styled from "styled-components";

interface Props {
  children: any;
}

export const TasksArea = styled.div<Props>`
  margin: 25px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  width: 100%;
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px 5px 0px 0px;
  min-height: 300px;
  color: hsl(234, 39%, 85%);
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch; 
  ::-webkit-scrollbar{width:6px;border-left:1px solid #E6ECF8;}
  ::-webkit-scrollbar-thumb{background-color:#f0e2d2;}

  @media screen and (min-width: 760px) {
    & {
      max-width: 500px;
      min-height: 200px;
      max-height: 280px;
      overflow-y: auto;
    }
`;
