const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Walk Dog',
        date: moment('11.12.2020, 8:30', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    },
    {
        text: 'Buy Food',
        date: moment('12.12.2020, 14:00', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: false
    },
    {
        text: 'Buy Drinks',
        date: moment('12.12.2020, 14:00', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: false
    }

]
const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)