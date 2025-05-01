require('dotenv').config()
const express = require('express')
const route = require('./routes/api/v1')
const connectDB = require('./DB/mongoDB')
var cors = require('cors')
var cookieParser = require('cookie-parser')
const passport = require('passport')
const Google = require('./utils/provider')
const connectChat = require('./utils/soketIO')

const app = express()
app.use(express.json())
const port = 8000

app.use('/public', express.static('public'))

app.use(cookieParser())
app.use(require('express-session')({ secret: process.env.EXPRESS_SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

Google()
connectChat()


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions))

//http://localhost:8000/product

connectDB()
app.use('/api/v1', route)

app.get('/', (req, res) => {
   return res.json({
        message: "Wellcome to fruit table"
    })
})

app.listen(8000, () => {
    console.log(`Example app listening on port`)
})

// module.exports = app