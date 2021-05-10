// page for new movies
import React, {useState}from "react";
import MovieForm from "./MovieForm"
import CharacterForm from "./CharacterForm"



export default function NewMovie(){
    const [charArray, setCharArray] = useState([<CharacterForm/>]);

    function addChar(){
        setCharArray([...charArray,<CharacterForm/>])
    }
    
    return (
        <div>
            <MovieForm/>
            {charArray}
            <button onClick={()=>addChar()}>add Character</button>
        </div>
    );
}