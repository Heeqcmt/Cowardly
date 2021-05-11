import React, {useState} from "react";
import './Form.css';

export default function MovieForm(props){

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    let MovieDetail = {
        name:name,
        desc:desc
    }
    function handleSubmit(e){
        e.preventDefault();
        props.getMovie(MovieDetail)
    }
    
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleDescChange(e){
        setDesc(e.target.value);
    }
 
    return(
        <form class="formClass">
            <label>Movie Name: </label>
            <input
            type="text"
            value={name}
            onChange={handleNameChange}/>
            <label>Movie Description: </label>
            <textarea 
            rows="5"
            value={desc}
            onChange={handleDescChange}
            ></textarea>
            <label>Select Banner for Movie</label>
            <input type="file"></input>
            <button className="button-right" onClick={handleSubmit}>Submit</button>
        </form> 

    )
}