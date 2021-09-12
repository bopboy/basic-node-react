const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://scp0000:mush0000@basic-node-react.8y7kp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello Nodejs'))
app.listen(port, () => console.log(`Example app listening on port ${port}`))
