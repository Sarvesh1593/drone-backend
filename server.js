import express from "express";
import http from "http";
import bodyParser from "body-parser";
import connectdb from "./database/connect_db.js";
import droneRoutes from "./Routes/droneRoutes.js"
// import Server from "socket.io";
const app = express()
const server = http.createServer(app);
// const io = new Server(server);
const port = 5000;
connectdb()
app.use(bodyParser.json());
app.use('/api/drones', droneRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
server.listen(port, () => {
    console.log(`Server is listening at http://127.0.0.1:${port}`);
  });