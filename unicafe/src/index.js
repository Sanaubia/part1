import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic  = (props) =>{
  console.log("Painettu")
  
return(
<> 

  <table>
    <tbody>
      
      <tr>
        <td>{props.text}</td>
        <td>{props.value}{props.text1}</td>
      </tr>
      </tbody>
   
  </table>
</>
 
  )
}


const Statistics = (props) =>{
  
    if(props.allClicks === 0)
    {
      return <p>Yhtään arvostelua ei ole annettu</p>
    }
    else{
    return(
      
      <>
      <Statistic text = "Hyvä" value={props.good}/>
      <Statistic text = "Huono" value={props.bad}/>
      <Statistic text = "Yhteensä" value={props.allClicks}/>
      <Statistic text = "Keskiarvo" value={props.average}/>
      <Statistic text = "Positiivista" value={props.positive} text1 = "%"/>
      </>
   
      )
    }
  }
    


const Button = (props) => (
  <button style ={{marginRight: 10}} onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)


  const goodClick = () => {
    setGood(good+ 1)
    setAll(allClicks+ 1)
    setAverage(average +1)
  }
  
  const neutralClick = () => {
    setNeutral(neutral+ 1)
    setAll(allClicks+ 1)
  
  }
  
  const badClick = () => {
    setBad(bad+ 1)
    setAll(allClicks+ 1)
    setAverage(average -1)
  
  }

  return (
    
    <div>
    
    <h1>Anna palautetta</h1>
        
    <Button handleClick = {() => goodClick()} text="Good" />
          
    <Button handleClick = {() => neutralClick()} text="Neutral" />
          
    <Button handleClick = {() => badClick()} text="Bad" />
  
    
    <h1>Statistiikka</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad} allClicks = {allClicks} average = {average/allClicks} positive = { good / allClicks * 100}/>
    
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)