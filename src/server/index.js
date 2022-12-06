// import mysql from 'mysql'
// import inquirer from 'inquirer'

// const mysql_user = {
//   host: 'localhost',
//   user: 'root',
//   pass: ''
// }

// const connection = mysql.createConnection(mysql_user, {
//   multipleStatements: true
// })

// const query = (query) => {
//   connection.query(query, (err, res) => {
//     if(err) console.log(err)
//     else console.log(res)
//     inquire()
//   })
// }

// const inquire = () => {
//   inquirer.prompt([
//     {
//       name: 'statement',
//       message: 'mysql'
//     }
//   ])
//   .then((answer) => {
//     if(answer.statement === 'quit') {
//       console.log('Disconected')
//       connection.end()
//     } else {
//       query(answer.statement)
//     }
//   })
// }

// const connect = () => {
//   connection.connect((err) => {
//     if(err) console.log(err)
//     else {
//       console.log('Connected')
//       inquire()
//     }
//   })
// }

// connect()

const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
  res.json({message: 'Backend comms'})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})