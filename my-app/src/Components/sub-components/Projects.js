import React, { useState } from 'react'
import {useEffect} from "react"
import { collection, doc, setDoc, query, getDocs, onSnapshot, addDoc, orderBy, limit, Timestamp, where} from "firebase/firestore"; 
import {db} from "/Users/yefimblokh/Desktop/bigprojectbusiness/my-app/src/firebase-config"
import { auth } from '/Users/yefimblokh/Desktop/bigprojectbusiness/my-app/src/firebase-config';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: "15px",
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Projects = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const todosRef = collection(db, "todos");
  const {uid, photoURL, displayName} = auth.currentUser;
  async function getUID () {
    return uid;
  }
  useEffect(() => {
    const getData = async () => {
      const q = await query(todosRef, where('uid', '==', uid), orderBy("createdAt"))
      onSnapshot(q, (snapshot) => {
        let todos = []
        snapshot.forEach((doc) => {todos.push(doc.data())})
        setTodos(todos)
      })
    }
    getData()
  }, [])
  async function openModel () {
    handleOpen()
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  async function addTaskDatabase () {
     await addDoc(todosRef, {
      title: title,
      desc: desc,
      createdAt: Timestamp.fromDate(new Date()),
      uid: uid,
    }) 
    setTitle("")
    setDesc("")
    handleClose()
  }
  return (
    <div style={{margin: "3em 3em 3em 3em"}}>
      <h1 style={{fontWeight: "600", position: "sticky", top: "50px", backgroundColor: "#fff"}}>Project</h1>
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
        }} onClick={openModel}>+</button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Add Task</h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title: <input type="text" onChange={(e) => {setTitle(e.target.value)}} value={title} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Description: <input type="text"  onChange={(e) => {setDesc(e.target.value)}} value={desc}/>
          </Typography>
          <button style={{
            backgroundColor: "red",
            border: "none",
            color: "#fff",
            padding: "10px"
            ,borderRadius: "5px 10px 5px 10px",
            marginTop: "1EM",
          }} onClick={addTaskDatabase}>Add</button>
        </Box>
      </Modal>
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