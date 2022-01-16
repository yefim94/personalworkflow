import React from 'react'
import {signIn} from "../firebase-config"
const Landing = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgb(182, 182, 182)",
    }}>
      <div style={{
      backgroundColor: "white",
      padding: "1em",
      margin: "1em",
      borderRadius: "10px"
    }}>
        <h1>The all in one student producitivity app</h1>
        <button style={{
          border: "none",
          outline: "none",
          backgroundColor: "",
          marginRight: "1em",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer"
        }} onClick={signIn}>Sign up</button>
      </div>
    </div>
  )
}

export default Landing
