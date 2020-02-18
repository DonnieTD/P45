const express = require('express')
const app = express()
const port = 3003;
const cors = require('cors')

const Rover = require('./Rover/Rover');

app.use(express.json());


app.use(cors())
app.use('/Rover',Rover)
app.get('/', (req, res) => res.send('Hello Team :) !'));

app.listen(port, () => console.log(`Server Started: ${port}!`))