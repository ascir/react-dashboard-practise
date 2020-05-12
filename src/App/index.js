import React, {Component} from 'react';
import Welcome from "./welcomemsg"
import './App.css';
import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar'

const MyButton = styled.button `
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: palevioletred;
border: 2px solid palevioletred;
${props => props.primary && css`
background: white;
color: palevioletred;
`};
`

const TomatoButton = styled(MyButton)`
  color: tomato;
  border: 2px solid tomato;
`;


class App extends Component {
  render(){     
  return (
    <AppLayout>
      <AppBar />
<Welcome />
<MyButton>Hello!</MyButton>
<MyButton primary>Hello again!</MyButton>
    <TomatoButton>Hi, the name is Bond</TomatoButton>
    </AppLayout>
  );
}
}

export default App;
