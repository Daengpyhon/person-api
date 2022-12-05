const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { response } = require('express');
const app = express();

app.use(cors({
  credentials : true,
  origin : '*'
}))

const connectDB = async()=>{
  try {   
     await mongoose.connect('mongodb+srv://mernapp:99199097@cluster0.dyrlanl.mongodb.net/person_db?retryWrites=true&w=majority');
     console.log('Connected DB Successfully')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
connectDB()

const data = [
  {
    name: "William Smith",
    age : 25,
    position : "Development"
  },
  {
    name: "John Doe",
    age : 40,
    position : "Manager"
  },
  {
    name: "Bullgate",
    age : 30,
    position : "Software Engineer"
  },
  {
    name: "Daeng",
    age : 28,
    position : "Dev"
  },
  {
    name: "Viengkeo",
    age : 26,
    position : "Seller"
  },
]


app.get('/api', (req, res)=>{
  try {
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

app.use(morgan('dev'))


const port = 9000

app.listen(port, () =>console.log('Server is running onport : ' + port))

