import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: hsl(235, 24%, 19%);
  height: 50px;
  border-radius: 5px;
  color: hsl(234, 39%, 85%);
  padding: 0 25px;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  border: hsl(234, 39%, 85%) 2px solid;
  border-radius: 50%;
  opacity: 0.1;
  margin-right: 15px;
`;

export const InputTodo = styled.input`
  display: flex;
  flex: 1;
  background-color: transparent;
  border: none;
  color: hsl(234, 39%, 85%);

  &:focus {
    outline: none;
    border-bottom: hsl(234, 39%, 85%) 1px solid;
    opacity: 0.5;
  }
`;
