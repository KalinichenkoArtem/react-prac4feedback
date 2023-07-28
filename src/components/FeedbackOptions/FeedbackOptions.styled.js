import styled from '@emotion/styled';

export const ListButtons = styled.ul`
  display: flex;
  gap: 25px;
  list-style-type: none;
`;

export const Button = styled.button`
  background-color: gainsboro;
  color: black;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 7px;
  border-radius: 4px;
  width: 80px;

  :hover {
    background-color: aqua;
  }
`;
