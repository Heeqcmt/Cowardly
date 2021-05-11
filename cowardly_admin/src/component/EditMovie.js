// page for new movies
import React,{useState}from "react";
import MovieForm from "./MovieForm"
import CharacterForm from "./CharacterForm"
import './EditMovie.css'


export default function EditMovie(){
    const [charArray, setcharArray] = useState([<CharacterForm/>]);
    function addChar(){
        setcharArray([...charArray, <CharacterForm/>])
    }
    return (
        <div>
            <div className="search-bar">
                <input type="Search"></input>
                <button>Search</button>
            </div>
            <MovieForm/>
            {charArray}
            <button onClick={()=>addChar()}>add Character</button>
        </div>
    );
}