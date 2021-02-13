const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan((tokens, req, res) => 
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
))

let persons = [
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/', (request, response) => {
    response.send('Hello')
})


app.get('/info', (request, response) => {
    const text = `Phonebook has info for ${persons.length} people`
    const date = new Date()
    response.send(`<p>${text}</p><p>${date}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    person
        ? response.json(person)
        : response.send(404).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body || !body.number || !body.name) {
        return response.status(400).json({
            error: 'content missing' 
        })
    }

    if(persons.find(p => p.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    
    newPerson = {'name': body.name, 
                 'number': body.number, 
                 'id': Math.floor(Math.random() * Math.floor(99999))
                }

    persons = persons.concat(newPerson)
    response.json(newPerson)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.send(204)
})

const PORT = process.env.PORT ||3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})