import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>

const Feedback = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return(
    <div>
      <Button name='good' handleFunction={increaseGood}/>
      <Button name='neutral' handleFunction={increaseNeutral}/>
      <Button name='bad' handleFunction={increaseBad}/>
    </div>
  )
}

const Button = ({ name, handleFunction }) => (
  <button onClick={handleFunction}>
    {name}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  
  const total = good+neutral+bad
  const average = (good-bad)/total
  const positive = (good/total)*100+'%'

  if (total==0) {
    return(
      <>
        No feedback given
      </>
    )
  }

  return(
  <div>
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='total' value={total}/>
        <Statistic text='average' value={average}/>
        <Statistic text='positive' value={positive}/>
      </tbody>
    </table>
  </div>
  )
}

const Statistic = ({ value, text }) => (
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>
)

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  return(
    <div>
      <Header text='give feedback' />
      <Feedback good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);