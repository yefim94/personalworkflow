import React, { useState } from 'react'
import {useEffect} from "react"
import { collection, doc, setDoc, query, getDocs, onSnapshot} from "firebase/firestore"; 
import {db} from "/Users/yefimblokh/Desktop/bigprojectbusiness/my-app/src/firebase-config"
const Projects = () => {
  const [todos, setTodos] = useState([])
  const todosRef = collection(db, "todos");
  useEffect(() => {
    const getData = async () => {
      const q = query(todosRef)
      onSnapshot(q, (snapshot) => {
        let todos = []
        snapshot.forEach((doc) => {todos.push(doc.data())})
        setTodos(todos)
      })
    }
    getData()
  }, [])
  return (
    <div style={{margin: "3em"}}>
      <h1 style={{fontWeight: "600"}}>Project</h1>
      <section style={{backgroundColor: "#F5FAF8", padding: "1em", borderRadius: "14px", overflow: "scroll"}}>
        <div style={{display: "flex", widtgh: "100%", justifyContent: "space-between", alignItems: "center"}}>
        <h3>To do</h3>
        <p style={{
          backgroundColor: "#E9F3F2",
          padding: "9px",
          borderRadius: "10px",
          color: "#71A399"
        }}>4</p>
        </div>
        <button style={{
          backgroundColor: "#E9F3F2",
          padding: "9px",
          borderRadius: "10px",
          color: "#71A399",
          border: "none",
          outline: "none",
          width: "100%",
          cursor: "pointer"
        }}>+</button>
     {todos.map((doc, key) => (
          <div key={key} style={{backgroundColor: "#fff", padding: "10px", borderRadius: "10px", marginTop: "1em"}}>
          <h3>{doc.title}</h3>
          <p>{doc.desc}</p>
        </div>
     ))}
      </section>
    </div>
  )
}

export default Projects
