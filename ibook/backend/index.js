const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello Rahul')
// })

// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello Login')
// })

// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello Signup')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
