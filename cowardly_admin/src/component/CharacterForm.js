import React, {useState} from "react";
import './Form.css';

export default function CharacterForm(props) {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [isDead, setIsDead] = useState(false);

    let Character = {
        name:name,
        desc:desc,
        isDead:isDead
    }

    
    function handleCheckBox(e){
        e.preventDefault();
        if(e.target.value === "on"){
            setIsDead(true);
        }
    }

    function handleNext(e){
        e.preventDefault();
        props.getCharacter(Character);
        setIsDead(false);
        setName("");
        setDesc("");
       
    }



    return (
        <form class="formClass char-form">
            <label>Character Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            <label>Character Description: </label>
            <textarea 
            rows="5"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}></textarea>
            <label>Select Profile picture for Character</label>
            <input type="file"></input>
            <label>Character Dead?</label>
            <input  
            type="checkbox"
            onChange={handleCheckBox}
            />
          
            <button className="button-right" onClick={handleNext}>done/next</button>
        </form>
    );
}