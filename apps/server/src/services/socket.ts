import { Server } from "socket.io";
import Redis from "ioredis";

const pub = new Redis(process.env.REDIS_URI!);
const sub = new Redis(process.env.REDIS_URI!);

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init Socket Service...");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
    sub.subscribe("MESSAGES");
  }

  public initListeners() {
    console.log("Init Listeners...");
    const io = this.io;
    io.on("connect", (socket) => {
      console.log("Socket connected", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message Recived -> ", message);
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
    sub.on("message", async (channel, message) => {
        if (channel === "MESSAGES") {
            console.log("new message from redis Sub ", message);
            io.emit("message", message);
        }
    })
  }

  get io() {
    return this._io;
  }
  
}

export default SocketService;
