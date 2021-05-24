import React, { useState } from 'react';
function SideBar(props) {
    // console.log("Side bar get notes from app:", props.listNote)

const listNote = props.listNote

const [keyword,setKW] = useState()

const searchHandler = (event) =>
{
    setKW(event.target.value)
    // let newList = props.listNote.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
    // if(event.target.value ==null || event.target.value=="")
    //     newList = props.listNote
    // setList(newList)
}

let outputList = listNote
    if(keyword)
        outputList = listNote.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
    const card = outputList.map(item => {
        return (
            <div className={(props.selectNote && item.id == props.selectNote.id) ? "card card-selected": "card"}onClick = {() => props.selectHandler(item)}>
                <div className="card-body ">
                    {item.title}
                </div>
            </div>

        );
    })

    return ( //HTML vs JSX
        <div className="col-sm-4">
            <div className="search-bar">
                <input type="search" className="form-control input-search" onChange={searchHandler}/>
                <button className="btn btn-primary btn-search" type="submit">Search</button>
            </div>

            <h4>All notes</h4>
            <div className="listnote scrollbar-primary">
                {card}
            </div>

        </div>
    )
}



export default SideBar;