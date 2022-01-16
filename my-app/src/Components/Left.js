import React from 'react'
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div style={{flex: "0 0 auto", padding: "1em"}}>
    <h2 style={{color: "#000", height: "100%", width: "100%"}}>.studio</h2>
    <nav>              
            <Link to="/">Overview</Link> |{" "}
            <Link to="/stats">Stats</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/calender">Calender</Link>
    </nav>
  </div>
  )
}

export default Left
