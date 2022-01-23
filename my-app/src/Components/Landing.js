import React from 'react'
import {signIn} from "../firebase-config"
import landingImage from "../assets/landing-image.png"
const Landing = () =>  {
  return (
    <>
<div style={{padding: "1.5em"}}>
<nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div>
          <h1 style={{fontSize: "1.3rem"}}>Alumnna</h1>
        </div>
        <div>
          <ul style={{display: "flex", listStyle: "none"}}>
            <li>About</li>
            <li style={{marginLeft: "1em"}}>Learn</li>
            <li style={{marginLeft: "1em"}}>Contact</li>
          </ul>
        </div>
        <div>
        <button style={{
            border: "none",
            outline: "none",
            backgroundColor: "",
            marginRight: "1em",
            padding: "10px 15px 10px 15px",
            color: "#fff",
            borderRadius: "10px",
            cursor: "pointer", 
            backgroundColor: "#000"
          }} onClick={signIn}>Sign up</button>
        </div>
      </nav>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3em",
      }}>
        <div style={{
          flex: "0 0 auto",
          marginRight: "2em"
        }}>
        <img src={landingImage} width="300" height="300" />
        </div>
       <div style={{
          flex: "1 1 auto"
        }}>
       <h2 style={{
          wordWrap: "wrap",
          fontSize: "4rem"
        }}>Unlock the power of time managment.</h2>
        <p>With time slots, cards, and todos, make accomplshing your daily goals simple and easy.</p>
        <button style={{
            border: "none",
            marginTop: "1EM",
            outline: "none",
            backgroundColor: "",
            marginRight: "1em",
            padding: "10px 15px 10px 15px",
            color: "#fff",
            borderRadius: "10px",
            cursor: "pointer", 
            backgroundColor: "#000"
          }} onClick={signIn}>Sign up</button>
       </div>
      </div>
</div>
      <div style={{
        backgroundColor: "#FEF3E4",
        padding: "1.5em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{fontSize: "2.5rem"}} className='heading-two'>The only task manager you will ever need</h2>
        <img width="600" height="auto"style={{borderRadius: "20px"}} src="https://cdn.discordapp.com/attachments/907377720156094464/934655996633178172/Screen_Shot_2022-01-22_at_10.48.58_PM.png" />
      </div>
    </>
  )
}

export default Landing
