// page for new movies
import React from "react";
import MovieForm from "./MovieForm"
import CharacterForm from "./CharacterForm"



export default function NewMovie(){
    return (
        <div>
            <MovieForm/>
            <CharacterForm/>
        </div>
    );
}