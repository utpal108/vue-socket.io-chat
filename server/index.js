const express = require('express')
const app = express()
const socketIo = require("socket.io")
const http = require("http")
const cors = require("cors")
const port = 4000

const httpServer = http.createServer(app)
const io = socketIo(httpServer)
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server Side')
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

httpServer.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})