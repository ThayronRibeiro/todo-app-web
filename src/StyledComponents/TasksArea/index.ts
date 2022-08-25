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
  max-width: 500px;
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px 5px 0px 0px;
  height: 300px;
  color: hsl(234, 39%, 85%);
  overflow-y: auto;
`;
