// page for new movies
import React from "react";
import MovieForm from "./MovieForm"
import CharacterForm from "./CharacterForm"



export default function EditMovie(){
    return (
        <div>
            <input type="Search"></input>
            <button>Search</button>
            <MovieForm/>
            <CharacterForm/>
        </div>
    );
}