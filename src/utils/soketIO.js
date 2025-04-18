const { Server } = require("socket.io")

const connectChat = () => {
try {
    const io = new Server({
        cors: {
            origin: ["http://localhost:3000"]
          }
      });

      io.on("connection", (socket) => {
        socket.emit("Welcome", "Welcome to chat")
        console.log("socket",socket.id);
        
        socket.on("message", (msg) => {
          io.emit("recceive_msg"), msg
        })
        
      })

      io.listen(4000)
} catch (error) {
    console.log(error);
    
    
}
}

module.exports = connectChat