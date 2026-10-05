const socket = io();

document.getElementById("joinBtn").addEventListener("click", () => {
  const room = document.getElementById("roomInput").value.trim();
  if (!room) return;

  socket.emit("joinRoom", room);
  console.log("Připojuji do místnosti:", room);
});
