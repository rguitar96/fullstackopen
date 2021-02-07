import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/*
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return(
    <>
      <p>Hello {name}, you were probably born in {bornYear(age)}</p>
    </>
  )
}

const App = () => {
  const age = 24
  const name = 'Rodrigo'
  return(
  <>
    <h1>Greetings</h1>
    <Hello name={name} age={age}/>
  </>
  )
}

*/

/*
const Display = ({ counter }) => <div> {counter} </div>

const Button = ({ handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
  console.log(useState(0))
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={decreaseByOne} text='minus' />
      <Button handleClick={setToZero} text='zero' />
    </>
    
  )
}
*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)