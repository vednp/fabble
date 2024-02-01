import http from "http";
import SocketService from "./services/socket";
async function init(){
    const server  = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    const socketService = new SocketService();
    socketService.io.attach(server);
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
    socketService.initListeners();
}

init()