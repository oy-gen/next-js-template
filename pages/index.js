import styled from 'styled-components';
import { BigButton, SmallButton } from '../compenents/buttons';

export default function Home() {
  return (
    <>
      <Header>
        <Title>Title</Title>
      </Header>
      <Footer>
        <BigButton>button 1</BigButton>
        <SmallButton>button 2</SmallButton>
      </Footer>
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: fixed;
  width: 100%;
  background-color: darkblue;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: darkblue;
`;
