import styled from 'styled-components';

export const SmallButton = styled.button`
  border-style: none;
  justify-content: center;
  width: 100px;
  background-color: grey;
  color: white;
  padding: 10px 16px;
  :hover {
    background-color: darkslategray;
  }
  :active {
    background-color: blue;
  }
  &.new-class-name {
    background-color: red;
  }

  @media (min-width: 600px) {
    width: 200px;
  }
`;

export const BigButton = styled.button`
  border-style: none;
  width: 200px;
  background-color: black;

  color: white;
  padding: 10px 16px;
  :disabled {
    color: darkgrey;
    background-color: #555555;
  }
  :hover {
    background-color: darkslategray;
  }
  :active {
    background-color: blue;
  }
  @media (min-width: 600px) {
    width: 400px;
  }
`;
