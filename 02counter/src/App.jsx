import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setcounter] = useState(0)

  const addValue=()=>{
    if (counter<20){
    setcounter(counter => counter +1)
    }else{
      setcounter(counter)
    }
  }

  const removeValue=()=>{
    if(counter>0){
    setcounter(counter - 1)
    }else{
      setcounter(counter)
    }
  }

return (
    <>
   <h1>chai aur react</h1>
   <h2>counter value: {counter}</h2>

   <button
   onClick={addValue}>Add value{counter}</button>
   <button
   onClick={removeValue}>Remove value{counter}</button>
   <p>footer : {counter}</p>
    </>
  )
}

export default App
