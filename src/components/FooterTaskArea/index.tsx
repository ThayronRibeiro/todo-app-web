import styled from "styled-components";
import { Task } from "../../App";

const ContainerFooterTaskArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(235, 24%, 19%);
  padding: 10px 25px;
  color: hsl(234, 39%, 75%);
  border-top: 1px solid hsl(234, 39%, 85%);
  border-radius: 0px 0px 5px 5px;
  max-width: 500px;

  span {
    font-size: 12px;
  }
`;

type Props = {
  tasks?: Task[];
  onClickDeleteAllComplete?: () => void;
};

export const FooterTaskArea = ({ tasks, onClickDeleteAllComplete }: Props) => {
  return (
    <ContainerFooterTaskArea>
      <span>{tasks?.length} items left </span>
      <span onClick={onClickDeleteAllComplete}>Clear Completed</span>
    </ContainerFooterTaskArea>
  );
};
