import styled from "styled-components";

type Props = {
  active?: boolean;
};

export const ButtonContainer = styled.div`
  display: flex;
  padding: 0 25px;
  margin-bottom: 25px;
  gap: 25px;
`;

export const ButtonChange = styled.button<Props>`
  height: 35px;
  width: 120px;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  border: ${(props) => (props.active ? "aqua 3px solid" : "#fff 3px solid")};
  color: ${(props) => (props.active ? "aqua" : "#fff")};
  transition: all ease 0.3s;
`;
