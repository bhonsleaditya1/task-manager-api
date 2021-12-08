const express = require('express')
const app = express()

const tasks = require('./routes/tasks')
const connetDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error')
require('dotenv').config()

//middleware
app.use(express.json())

app.use(express.static('./public'))

//routes
// app.get('/hello',(req,res)=>{
//     res.send('Task Manager')
// })

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - generate new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const port = process.env.PORT || 3000

const start = async() =>{
    try{
        await connetDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }catch(error){
        console.log(error);
    }
}

start()
