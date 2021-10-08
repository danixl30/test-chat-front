import io from "socket.io-client";

let Socket = io("//localhost:4000");

export default Socket;