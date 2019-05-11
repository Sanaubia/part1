import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
    return(
            <h1>{props.course.name}</h1>
    )
}


const Content = (props) => {
  console.log(props.parts)
    return(
          <>
          {props.course.parts[0].name} {props.course.parts[0].exercises}
          <p>
          {props.course.parts[1].name} {props.course.parts[2].exercises}
          </p>
          {props.course.parts[2].name} {props.course.parts[2].exercises}
          </>
      
         )
}


const Total = (props) => {
    const i = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
    return(
            <>

            <p>
            Yhteensä {i} tehtävää
            </p>

            </>
    )
}



const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  
    return (
      <div>
       
        <Header course = {course}/>

        
        <Content course = {course}/>
        

        

        <Total course = {course}/>
        
        
           
      </div>
    )
  }

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is', this.name)
    }
  }
  
  const arto = new Person('Arto Hellas', 35)
  arto.greet()
  
  const juhq = new Person('Juha Tauriainen', 48)
  juhq.greet()

ReactDOM.render(<App />, document.getElementById('root'))