import React, { useState } from 'react'
import Filter from './components/Filter'
import Header from './components/Header'
import Form from './components/Form'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const [ filter, setFilter ] = useState('')
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPhone = (event) => {
      event.preventDefault()

      if (persons.find(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
      }
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
      setNewNumber(event.target.value)
  }
  



  return (
    <div>
      <Header title='Phonebook' />
      <Filter filter={filter} setFilter={setFilter}/>
      <Header title='Add new' />
      <Form onSubmit={addPhone} 
            newName={newName} 
            newNumber={newNumber} 
            handleNewNameChange={handleNewNameChange}
            handleNewNumberChange={handleNewNumberChange} />
      <Header title='Numbers' />

      {personsToShow.map(person =>
        <Person key={person.name} person={person} />
      )}
      
    </div>
  )
}

export default App