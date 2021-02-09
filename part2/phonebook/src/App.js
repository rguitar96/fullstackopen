import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPhone = (event) => {
      event.preventDefault()

      if (persons.find(person => person.name === newName)) {
          alert(`${newName} is already added to phonebook`)
          return
      }
      setPersons(persons.concat({name: newName}))
      setNewName('')
  }

  const handleNewNumberChange = (event) => {
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newName} onChange={handleNewNumberChange}/>
        </div>
        <div>
          <button type={'submit'}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(person => 
        <li key={person.name}> 
            {person.name}
        </li>
      )}
      
    </div>
  )
}

export default App