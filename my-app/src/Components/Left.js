import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faComment, faComments, faFolder, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../firebase-config';
import {linkWithPhoneNumber, signOut} from "firebase/auth";
const Left = () => {
  const {uid, photoURL, displayName} = auth.currentUser;
  return (
    <div style={{flex: "0 0 auto", padding: "1em 5em 1em 1em", display: "flex", flexDirection: "column", borderRight: "1px solid grey", height: "100vh", alignItems: "start"}}>
    <h2 style={{color: "#000", width: "100%"}}>.studio</h2>
    <nav style={{marginTop: "4em", display: "flex", flexDirection: "column"}}> 
           <div className='cont-link'>
           <FontAwesomeIcon className='icon' icon={faHome} />
            <Link className='link' to="/">Overview</Link>
           </div>
            <div className='cont-link'>
            <FontAwesomeIcon className='icon'icon={faSignal} />
            <Link className='link' to="/stats">Stats</Link>
            </div>
            <div className='cont-link'>
            <FontAwesomeIcon className='icon'icon={faComments} />
            <Link className='link' to="/chat">Chat</Link>
            </div>
            <div className='cont-link'>
            <FontAwesomeIcon className='icon' icon={faCalendarWeek} />
            <Link className='link' to="/calender">Calender</Link>
            </div>
    </nav>
    <div>
    <FontAwesomeIcon style={{color: "#C5C5C5", transform: "translateY(2px)"}} icon={faSignOutAlt} />
    <button style={{
      border: "none",
      cursor: "pointer",
      outline: "none",
      color: "#C5C5C5",
      backgroundColor: "#fff",
      marginTop: "8EM"
    }} onClick={() => signOut(auth)}>Log Out</button>
    </div>
  </div>
  )
}

export default Left
