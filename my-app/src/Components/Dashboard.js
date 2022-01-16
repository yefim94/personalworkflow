import React from 'react'
import {auth} from "../firebase-config.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import {
  BrowserRouter
} from "react-router-dom";
import Left from "./Left"
import Right from "./Right"
const Dashboard = () => {
  return (
    <div style={{height: "100vh", padding: "1em", margin: "0", display: "flex", overflow: "hidden"}}>
      <BrowserRouter>
        <Left />
        <Right />
      </BrowserRouter>
    </div>
  )
}

export default Dashboard