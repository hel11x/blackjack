const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Připojen:", socket.id);

  socket.on("joinRoom", (roomCode) => {
    socket.join(roomCode);
    console.log(socket.id, "se připojil do", roomCode);
  });

  socket.on("chatMessage", (data) => {
    io.to(data.room).emit("chatMessage", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
