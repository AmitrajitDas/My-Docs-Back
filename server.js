const io = require("socket.io")(3001, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    },
})

io.on("connection", socket => {
    socket.on("send-changes", delta => {
        socket.broadcast.emit("recieve-changes", delta)
    })
})