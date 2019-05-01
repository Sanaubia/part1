import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

    return(
            <h1>{props.course}</h1>
    )
}

const Part = (props) => {
 
    return(
            <>
            {props.part} {props.exercises}
            </>
    )
}


const Content = (props) => {

    return(
            <>
            <Part part = {props.part} exercises = {props.exercises}/>
            </>
         )
}


const Total = (props) => {
 
    return(
            <>
            yhteensä {props.yhteensa} tehtävää
            </>
    )
}


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <>
        <Header course ={course}/>

        <p>
        <Content part = {part1} exercises = {exercises1}/>         
        </p>

        <p>
        <Content part = {part2} exercises = {exercises2}/> 
        </p>

        <p>
        <Content part = {part3} exercises = {exercises3}/>  
        </p>

        <p>
        <Total yhteensa = {exercises1 + exercises2 + exercises3}/>       
        </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))