import React from 'react'

const NoteForm = (props) => {

    //JSX 
    //ctrl R: thay the nhanh
    // alt shift F: format code
    return ( <div className = "col-sm-8" >
        <div className = "card card-content" >
        <div className = "card-body" >
        <h1 > SPACE X </h1> 
        <p className = "para" > Hãy lưu lại những khoảnh khắc </p> 
        <div className = "form-group" >
            <input type = "name"className = "form-control"id = "txt-title"placeholder = "Tiêu đề"value = { props.note.title }onChange = { props.noteChangeTitleHandler }/>
                </div> 
              </div> 
            </div>
        <div className = "card card-content" >
        <div className = "card-body" >
        <form >
        <div className = "form-group nhap" >
        <textarea className = "form-control"
        rows = "13"
        placeholder = "Hãy nhập tại đây..."
        value = { props.note.content }
        onChange = { props.noteChangeContentHandler } >
        </textarea> </div> </form>   </div> </div> <form className = "note-form" >
        <div className = "form-group btn-container" >
        <button type = "button"
        className = "btn btn-success btn-new"
        onClick = { props.newHandler } > New </button> 
        <button type = "button"
        className = "btn btn-primary action-btn"
        onClick = { props.saveHandler } > Save </button> 
        <button type = "button"
        className = "btn btn-danger action-btn"
        onClick = { props.deleteHandler } > Delete </button>  
        </div> </form>
         </div> 
    )
}

export default NoteForm;



    
