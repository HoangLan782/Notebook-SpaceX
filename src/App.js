import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import SideBar from './components/Sidebar';
import NoteForm from './components/NoteForm';
function App() {

  let listNote = JSON.parse(localStorage.getItem('note'))
  
  //ban đầu thì local storage sẽ null vì k có cái lít nào. nên k .map dc
  let defaultNoteID= 0
  if (listNote == null) { 
    listNote = [] //1 cais mảng dù rỗng vẫn có có thể chạy map. ít ra nó là mảng chứ k phải là null 
  }//qua if nay thì listnote sẽ = [] nếu trước đó nó null

  const [notes, setNotes] = useState(listNote)
  if(listNote.length>0){ //chỗ này check length thay vì check null vì mảng lúc này là [] tất nhiên khác null
    defaultNoteID=Math.max(...notes.map(item => item.id)) + 1
  }

  
  console.log("default id: ",defaultNoteID)
  const [selectedNote, setSelectedNote] = useState({ id:defaultNoteID, title: "", content: "" })

  console.log("Selected note: ", selectedNote)

  const noteClickHandler = (note) => {
    console.log(note)
    setSelectedNote(note)
  }

  const noteTitleChangeHandler = (event) => {
    const newNote = { ...selectedNote }

    if (selectedNote) {
      newNote.title = event.target.value
      setSelectedNote(newNote)
    }
  }

  const noteContentChangeHandler = (event) => {
    const newNote = { ...selectedNote }

    if (selectedNote) {
      newNote.content = event.target.value
      setSelectedNote(newNote)
    }
  }
  // const maxId = Math.max(notes.map(item => item.id))
  //   console.log(maxId)

  const saveNoteHandler = () => {
      console.log("saveNote:",selectedNote)
    let isUpdate = false
    const newNotes = [...notes].map(item => {
      if (item.id == selectedNote.id) { //update
        isUpdate = true
        return selectedNote
      }

      else return item
    })
    if (!isUpdate) //new
      newNotes.push(selectedNote)
    setNotes(newNotes)
    const noteJson = JSON.stringify(newNotes)
    localStorage.setItem('note', noteJson);

    console.log("New note after saved: ", newNotes)
  }

  const newHandler = () => {
    const newNote = { id: Math.max(...notes.map(item => item.id)) + 1, title: "", content: "" }
    setSelectedNote(newNote)
  }

  const deleteHandler = () => {
    const newNotes = notes.filter(item => item.id != selectedNote.id)
    setNotes(newNotes)
    const noteJson = JSON.stringify(newNotes)
    localStorage.setItem('note', noteJson);

  }

  return (
    <div>
      <Header></Header>
      <div class="container"> 
        <div class="row">
          <SideBar listNote={notes} selectHandler={noteClickHandler} selectNote={selectedNote}></SideBar>
          <NoteForm note= {selectedNote} noteChangeTitleHandler = {noteTitleChangeHandler} noteChangeContentHandler= {noteContentChangeHandler}
          saveHandler = {saveNoteHandler}
          newHandler = {newHandler}
          deleteHandler ={deleteHandler}
          ></NoteForm>
        </div>

      </div>
    </div>
    
  )
}



export default App;
