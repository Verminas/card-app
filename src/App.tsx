import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {css} from 'styled-components'
import {content} from './components/content'

type ButtonPropsType = {
  backColored: boolean
}

function App() {
  return (
    <div className="App">
      <Container>
        <Image src={content.card.image}/>
        <Title>{content.card.title}</Title>
        <Text>{content.card.text}</Text>
        <WrapperButtons>
          <Button backColored={true}>See more</Button>
          <Button backColored={false}>Save</Button>
        </WrapperButtons>
      </Container>
    </div>
  );
}

export default App;


const Container = styled.div`
  max-width: 280px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px #0000001A;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Image = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
`

const Title = styled.h1`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: #000000;
`

const Text = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #ABB3BA;
`

const WrapperButtons = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
`

const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  border: 2px solid #4E71FE;
  
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  
  background-color: #FFFFFF;
  color: #4E71FE;
  
  &:hover{
    background-color: #4E71FE;
    color: #FFFFFF;
  }
  
  ${props => props.backColored && css<ButtonPropsType>`
    background-color: #4E71FE;
    color: #FFFFFF;
    
    &:hover{
      background-color: #FFFFFF;
      color: #4E71FE;
    }
  `}
  
`
