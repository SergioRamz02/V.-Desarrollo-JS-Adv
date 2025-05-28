import { useState } from 'react';
import './App.css'
import MainButton from './Components/MainButton';
import Form from './Components/form';
import TitlesContainer from './Components/TitlesContainer';

function App() {

  const messages = [];
  
  const handleMyFirstButton = (e) =>{
    console.log(e.target);
  }
  const {name, setName} = useState("");
  const {input, setInput} = useState("");
  

  for (let i = 0; i <= 25; i++) {
    messages.push(`Este es el título número ${i}`);
  }

  return (
    <>
      <h1>Hola desde React</h1>
      <MainButton handlingFunction = {handleMyFirstButton} text = {"Este es mi primer botón en React"} />
      <Form input={input} setInput={setInput} setName={setName}/>
      <h1>{name}</h1>
      <TitlesContainer>
        {messages.map((message, key)=>{
          return(
            <h1 key ={key}>{message}</h1>
          )
        })}
      </TitlesContainer>
    </>
  )
}

export default App
