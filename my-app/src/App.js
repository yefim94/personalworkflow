import React from 'react'
import './App.css';
import {useState} from "react"
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    if (user) { 
      setUser(user);
    } else {
      setUser(null)
      }
    }
  );
  return (
    <div className="App" style={{
      height: "100vh"
    }}>
     {user ? <Dashboard /> : <Landing />}
    </div>
  );
}

export default App;