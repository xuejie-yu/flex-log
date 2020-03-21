const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
let io = require("socket.io")(http);
const socketClient = require("socket.io-client");

const init = (port, logger) => {

  io.on("connection", function(socket){
    socket.on("log", (msg) => {
      io.emit("log", msg)
    });
  });

  app.use("/", express.static(path.join(__dirname, "build")));

  app.get("/port", (req, res) => res.json({port: port}));

  http
    .listen(port, () => 
      logger.info(`Log UI is running on port ${port}!`))
    .on("error", () => {
      logger.info("There is a server already running. Current threat will join the existing room.");
      io = socketClient.connect(`http://localhost:${port}`, {reconnect: true});
    });
}

const getIO = () => {
  return io;
}

module.exports = {
  getIO,
  init
};