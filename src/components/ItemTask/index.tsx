import styled from "styled-components";
import crossIcon from "../../assets/images/icon-cross.svg";
import checkIcon from "../../assets/images/icon-check.svg";
import { Circle } from "../../StyledComponents/InputArea";

interface Props {
  title: string;
  complete?: boolean;
  onClickDelete?: () => void;
  onClickComplete?: () => void;
  darkMode?: boolean;
}

type PropsContainer = {
  completeTask?: boolean;
  darkMode?: boolean;
};

const ContainerItemTask = styled.div<PropsContainer>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    props.darkMode ? "hsl(235, 24%, 19%)" : "#fff"}
  color: hsl(234, 39%, 85%);
  border-radius: 5px 5px 0px 0px;

  & .task {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid hsl(234, 39%, 85%);
    padding: 10px 25px;

    div {
      display: flex;
      align-items: center;

      & .check {
        display: flex;
        justify-content: center;
        align-items: center;
        background: hsl(220, 98%, 61%);
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 15px;
      }

      h4 {
        text-decoration: ${(props) =>
          props.completeTask ? "line-through" : "none"};
        font-size: 12px;
        opacity: ${(props) => (props.completeTask ? "0.5" : "1")};
      }
    }

    img {
      cursor: pointer;
    }
  }
`;

export const ItemTask = ({
  title,
  complete,
  onClickDelete,
  onClickComplete,
  darkMode,
}: Props) => {
  return (
    <>
      <ContainerItemTask completeTask={complete} darkMode={darkMode}>
        <div className="task">
          <div>
            {complete ? (
              <div className="check" onClick={onClickComplete}>
                <img alt="checkIcon" src={checkIcon} />
              </div>
            ) : (
              <Circle onClick={onClickComplete} />
            )}
            <h4>{title}</h4>
          </div>

          <span onClick={onClickDelete}>
            <img alt="cross" src={crossIcon} />
          </span>
        </div>
      </ContainerItemTask>
    </>
  );
};
