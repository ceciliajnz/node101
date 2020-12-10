const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        field: 'read'
    },
    {
        field: 'write'
    },
    {
        field: 'sleep'
    }

]
const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)