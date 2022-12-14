const app = require('express')()
const Server = require('http').createServer(app)
const io = require('socket.io')(Server,{
    cors: {
        origin: "*"
      }
})

io.on('connection',(socket)=>{
    socket.on("chat",(payload)=>{
        io.emit(payload)
        console.log(payload)
    })
})

Server.listen(5000,()=>{
    console.log("server is listening at port 5000")
})