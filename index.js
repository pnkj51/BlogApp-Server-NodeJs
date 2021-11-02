const express = require('express')
const mongoose = require('mongoose')

//mongoose.connect('mongodb://localhost:27017/blogapp');
mongoose.connect('mongodb+srv://blogapp:Blog1234@cluster0.hr7ig.mongodb.net/blogapp?retryWrites=true&w=majority');

const connection = mongoose.connection
connection.once('open', () => {
    console.log('connected to mongodb');
})

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
const userRoute = require('./routes/user')

app.use('/user', userRoute)

app.route('/').get((req, res) => res.json('first app rest'))

app.listen(PORT, () => console.log(`running on port : ${PORT}`))