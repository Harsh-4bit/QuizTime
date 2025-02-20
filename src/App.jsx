import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Nav from './Nav'
import Customize from './Customize'
import Contact from './Contact'
import Footer from './Footer'
import { useState } from 'react'
import Question from './Question'
import Result from './Result'
function App() {
  const [display, setDisplay] = useState(true);
  const [over, setOver] = useState(false);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(8);
  const [difficulty, setDifficulty] = useState('easy');
  const [topic, setTopic] = useState('react')

  return (
    <>
      <Nav display={display} setDisplay={setDisplay}/>
       
       <Routes>
          <Route path='/' element={<Home display={display} setDisplay={setDisplay}/>}/>
          <Route path='/Customize' element={<Customize amount={amount} setAmount={setAmount} difficulty={difficulty} setDifficulty={setDifficulty} topic={topic} setTopic={setTopic} display={display} setDisplay={setDisplay}/>}/>
          <Route path='/Contact' element={<Contact/>}/>
       </Routes>
      <Question amount={amount} difficulty={difficulty} topic={topic} display={display} setDisplay={setDisplay} over={over} setOver={setOver} count={count} setCount={setCount}/>
      <Result topic={topic} difficulty={difficulty} amount={amount} over={over} count={count} setOver={setOver} setCount={setCount} display={display} setDisplay={setDisplay}/>
      
      <Footer/>
      
    </>
  )
}

export default App
