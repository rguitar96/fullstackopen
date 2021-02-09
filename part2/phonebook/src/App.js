import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Header from './components/Header'
import Form from './components/Form'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const [ filter, setFilter ] = useState('')
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const addPhone = (event) => {
      event.preventDefault()

      const newPerson = {name: newName, number: newNumber}
      const foundPerson = persons.find(person => person.name === newName)

      if (foundPerson) {
        if (!window.confirm(`${newPerson.name} is already in the phonebook, update?`)) return
        newPerson['id'] = foundPerson.id

        personService
          .update(newPerson)
          .then(data => {
            setPersons(persons.map(p => {if (p.name === newName) return data; else return p}))
            setNewName('')
            setNewNumber('')
          })
        return
      }

      personService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
        })
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const deletePerson = (event) => {
    if (window.confirm(`Are you sure to delete?`)) {
      personService
      .remove(event.target.getAttribute('id'))
      .then(_ => {
        setPersons(persons.filter(person => 
          (person.id != event.target.getAttribute('id'))
        ))
      })
    }
    
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
        <Person key={person.name} person={person} deletePerson={deletePerson} />
      )}
      
    </div>
  )
}

export default App