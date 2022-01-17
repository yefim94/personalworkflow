import React from 'react'
import {auth} from "../firebase-config.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import {
  Routes,
  Route
} from "react-router-dom";
import Stats from "./sub-components/Stats"
import Projects from "./sub-components/Projects"
import Chat from "./sub-components/Chat"
import Calender from "./sub-components/Calender"
const Right = () => {
  const {uid, photoURL, displayName} = auth.currentUser;
  return (
    <div style={{padding: "0em 1em 1em 1em", marginTop: "1EM", flex: "1 1 auto", overflow: "scroll"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "auto", position: "sticky", top: 0, backgroundColor: "#fff"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <FontAwesomeIcon style={{
        marginRight: "10px",
        color: "#C9C9C9",
        cursor: "pointer"
      }} icon={faSearch} />
      <TextField size="small"
      id="outlined-basic" label="Search" 
      variant="standard" 
      style={{marginRight: "10PX", transform: "translateY(-8px)"}}/>
    </div>
    <div style={{
      display: "flex", 
      alignItems: "center"
    }}>
    <FontAwesomeIcon style={{
      marginRight: "10px",
      color: "#C9C9C9",
      cursor: "pointer"
    }} icon={faQuestionCircle} />
    <FontAwesomeIcon style={{
      marginRight: "10px",
      color: "#585858",
      cursor: "pointer"
    }} icon={faBell} />
      <h3 style={{marginRight: "20px", fontWeight: "600", width: 'auto', whiteSpace: "nowrap"}}>{displayName}</h3>
    <img src={photoURL} width="50" height="50"  style={{borderRadius: "50%"}}/>
    </div>
    </div>
    <Routes>
            <Route path="/" element={<Projects />}/>
            <Route path="/stats" element={<Stats />}/>
            <Route path="/chat" element={<Chat />}/>
            <Route path="/calender" element={<Calender />}/>
    </Routes>
   </div>
  )
}

export default Right
