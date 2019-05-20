import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const App = (props) => {
  const [selected, setSelected] = useState(1)
  const [votes, setVote] = useState(Array(7).fill(0))//0-7 taulukko

  const random = () =>{ //tehdään satunnainen luku 1-6 väliltä
  
    setSelected(Math.floor(Math.random() * (Math.floor(6) - Math.ceil(0))) + Math.ceil(1))
    console.log(selected)
  }


  
  const vote = (selected) => {//lisätään 1 äänestys sille anecdotelle mikä on valittu, ja lisätään se taulukkoon
    
    const copy = [...votes]
    copy[selected] += 1
    
    setVote(copy) 
    console.log(copy)
  
  }




  return ( //vote(selected) viedään selected arvo vote():n sisälle jossa se lisätään taulukkoon, random() tekee vain satunnaisen luvun 
    <div>
       {props.anecdotes[selected]}
       <p>
         Has {votes[selected]} votes
       </p>
     
        <p>
          <Button handleClick={() => vote(selected)} text="Vote" />
        </p>

        <p>
          <Button handleClick={() => random()} text="Next anecdote" />
        </p>

      <h1>Anecdote with most votes</h1>
      <p>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      </p>
      Has {votes.indexOf(Math.max(...votes))} votes

    </div>
  )
}


const anecdotes = [
  '',
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => ( //Button jota käytetään painikkeena
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)