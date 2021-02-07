import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ text, votes }) => (
<>
  <p>
    {text}
  </p>
  <p>
    Has {votes} votes
  </p>
</>
)

const App = ({ anecdotes }) => {
  const n_anecdotes = anecdotes.length
  
  const getRandom = (length) => Math.floor(Math.random() * length)
  
  const randomQuote = () => {
    const random = getRandom(n_anecdotes)
    setIndex(random)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[index] += 1
    setVote(copy)
  }

  const getMaxVotes = () => {
    if (votes.length == 0) return -1

    var max = votes[0]
    var maxIndex = 0

    for (var i = 1; i < votes.length; i++)
    {
      if (votes[i] > max)
      {
        maxIndex = i
        max = votes[i]
      }
    }

    return maxIndex
  }

  const first = getRandom(n_anecdotes)
  
  const [index, setIndex] = useState(first)
  const [votes, setVote] = useState(new Array(n_anecdotes).fill(0))

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote text={ anecdotes[index] } votes={ votes[index] } />
      <Button text='vote' handleClick={voteAnecdote} />
      <Button text='random' handleClick={randomQuote}/>
      <Title text='Anecdote with most votes' />
      <Anecdote text={ anecdotes[getMaxVotes()] } votes={ votes[getMaxVotes()] } />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)