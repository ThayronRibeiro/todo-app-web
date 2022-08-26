import styled from "styled-components";
import { Task } from "../../App";

type StyleProps = {
  darkModeColor?: boolean;
};

const ContainerFooterTaskArea = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  color: hsl(234, 39%, 75%);
  border-top: 1px solid hsl(234, 39%, 85%);
  border-radius: 0px 0px 5px 5px;
  transition: all ease .5s;
  background-color: ${(props) =>
    props.darkModeColor ? "var(--darkBack)" : "var(--lightBack)"}; 

  span {
    font-size: 12px;

    &:last-child {
      cursor: pointer;
    }
    &:last-child:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 760px) {
    & {
      max-width: 500px;
    }
`;

type Props = {
  darkMode?: boolean;
  tasks?: Task[];
  onClickDeleteAllComplete?: () => void;
};

export const FooterTaskArea = ({
  tasks,
  onClickDeleteAllComplete,
  darkMode,
}: Props) => {
  return (
    <ContainerFooterTaskArea darkModeColor={darkMode}>
      <span>{tasks?.length} items left </span>
      <span onClick={onClickDeleteAllComplete}>Clear Completed</span>
    </ContainerFooterTaskArea>
  );
};
