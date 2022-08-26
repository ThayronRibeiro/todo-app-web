import styled from "styled-components";

const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(235, 24%, 19%);
  padding: 10px 25px;
  color: hsl(234, 39%, 75%);
  margin: 25px 0 50px 0;
  border-radius: 5px;

  span {
    font-size: 14px;
    font-weight: 800;
  }

  @media screen and (min-width: 760px) {
    & {
      max-width: 500px;
    }
`;

type Props = {
  showAll?: () => void;
  showCompleted?: () => void;
  showActive?: () => void;
  activeFilter?: string;
};

export const Filters = ({
  showAll,
  showCompleted,
  showActive,
  activeFilter,
}: Props) => {
  return (
    <ContainerFilters>
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
