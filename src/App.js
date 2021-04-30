import React from 'react';
import styled from 'styled-components';
import styles from './styles'
 
const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  
`;

const HeaderText = styled.h1`
  color: green;
  font-weight: 900;
`;

const SubText = styled.h2`
  color: #0001f0;
  font-weight:700;
`;

const LittleText = styled.h3`
  color: pink;
  font-weight:300;
`;

const Button = styled.button`
  cursor: pointer;
  background: rgb(94,3,156);
  background: linear-gradient(45deg, rgba(94,3,156,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  font-size: 16px;
  border-radius: 15px;
  color: white;
  border: 2px solid white;
  margin: 0 1em;
  padding: 0.35em 1.5em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: #52334D;
  }
`;

const BigButton = styled.button`
  cursor: pointer;
  font-size: 30px;
  margin: 20px;
  padding: 1.5rem;
  border-radius:20px;
  border: 5px solid #e36cec;
  background: rgb(238,174,202);
  background: linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(167,246,222,1) 50%, rgba(148,187,233,1) 100%);

  &:hover{
    transition: opacity 0.3s;
    color: white;
    
  }
`;


function App() {
  return (
    <Component>
      <HeaderText>Hello Styled Component</HeaderText>
      <SubText>Learning how to use Styled</SubText>
      <LittleText>That's AWESOME</LittleText>
      <Button href="">I am a Button</Button>
      <BigButton> This Button is Huge </BigButton>
    </Component>
  );
}
 
export default App;
