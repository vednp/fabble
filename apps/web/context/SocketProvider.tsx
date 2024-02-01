"use client"
import React, { useCallback, useEffect, useContext, useState } from 'react'
import { Socket, io } from 'socket.io-client'
interface SocketProviderProps {
    children?: React.ReactNode
}

interface SocketContextProps {
    sendMessage: (message: string) => any
    messages: string[];
}

const SocketContext = React.createContext<SocketContextProps | null>(null)

export const useSocket = () => {
    const state = useContext(SocketContext)
    if (!state) throw new Error("Socket context not found")
    return state
}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<string[]>([]);

    const sendMessage: SocketContextProps["sendMessage"] = useCallback((message) => {
        console.log("Sending message", message)
        if (socket){
            socket.emit("event:message", {message:message})
        }
    },[socket])

    const onMessageRecive = useCallback((msg: string) => {
        console.log("From Server Msg Rec", msg);
        const { message } = JSON.parse(msg) as { message: string };
        setMessages((prev) => [...prev, message]);
      }, []);
    
    
    useEffect(() => {
        const _socket = io("http://localhost:8000")
        _socket.on("message", onMessageRecive)
        setSocket(_socket)
        return () => {
            _socket.off("message", onMessageRecive)
            _socket.disconnect()
            setSocket(undefined)
        }
    },[])
  return (
    <SocketContext.Provider value={{sendMessage, messages}}>
        {children}
    </SocketContext.Provider>
  )
} 