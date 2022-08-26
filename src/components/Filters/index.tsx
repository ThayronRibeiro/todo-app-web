import styled from "styled-components";

type StyleProps = {
  darkModeColor?: boolean;
};

const ContainerFilters = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 25px;
  color: hsl(234, 39%, 75%);
  margin: 25px 0 50px 0;
  border-radius: 5px;
  transition: all ease .5s;
  background-color: ${(props) =>
    props.darkModeColor ? "var(--darkBack)" : "var(--lightBack)"}; 

  span {
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
  }
  span:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 760px) {
    & {
      max-width: 500px;
    }
`;

type Props = {
  darkMode?: boolean;
  showAll?: () => void;
  showCompleted?: () => void;
  showActive?: () => void;
  activeFilter?: string;
};

export const Filters = ({
  darkMode,
  showAll,
  showCompleted,
  showActive,
  activeFilter,
}: Props) => {
  return (
    <ContainerFilters darkModeColor={darkMode}>
      <span
        style={{
          color:
            activeFilter === "All"
              ? "hsl(220, 98%, 61%)"
              : "hsl(234, 39%, 75%)",
        }}
        onClick={showAll}
      >
        All
      </span>
      <span
        style={{
          color:
            activeFilter === "Active"
              ? "hsl(220, 98%, 61%)"
              : "hsl(234, 39%, 75%)",
        }}
        onClick={showActive}
      >
        Active
      </span>
      <span
        style={{
          color:
            activeFilter === "Completed"
              ? "hsl(220, 98%, 61%)"
              : "hsl(234, 39%, 75%)",
        }}
        onClick={showCompleted}
      >
        Completed
      </span>
    </ContainerFilters>
  );
};
