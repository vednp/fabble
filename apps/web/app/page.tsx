"use client";

import { useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function Page(): JSX.Element {
  const [message, setMessage] = useState("");
  const {sendMessage, messages} = useSocket();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Messes</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => setMessage(e.target.value)} type="text" name="" id="" />
        <button onClick={() => sendMessage(message)} type="submit">Submit</button>
      </form>
      {messages.map((msg, i) => <li key={i}>{msg}</li>)}
    </div>
  );
}
