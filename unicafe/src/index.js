import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) =>{
  return(
    <div>
      <h1>Statistics</h1>
    
    <p>Hyvä {props.good}</p>     
    </div>
    

    )


}


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
        

    <button style ={{marginRight: 10}} onClick ={goodClick}>Good</button>
      <button style ={{marginRight: 10}} onClick ={neutralClick}>Neutral</button>
      <button onClick ={badClick}>Bad</button>
      
    
  <table>
    <Statistics good = {good}/>
  

  </table>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)