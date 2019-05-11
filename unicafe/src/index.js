import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good+ 1)
  }

  const neutralClick = () => {
    setNeutral(neutral+ 1)
  }

  const badClick = () => {
    setBad(bad+ 1)
  }

  return (
    
    <div>
    
    <h1>Anna palautetta</h1>
        

    <button style ={{marginRight: 10}} onClick ={goodClick}>Good</button>
      <button style ={{marginRight: 10}} onClick ={neutralClick}>Neutral</button>
      <button onClick ={badClick}>Bad</button>
      

      <h1>Statistiikka</h1>
        
            <p>Hyvä {good}</p>
            <p>Neutraali {neutral} </p>
            <p>Huono {bad} </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)