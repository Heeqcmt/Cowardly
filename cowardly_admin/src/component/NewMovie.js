// page for new movies
import React, {useState}from "react";
import MovieForm from "./MovieForm";
import CharacterForm from "./CharacterForm";



export default function NewMovie(){
    
    const [movieDetail, setMovieDetail] = useState({});
    function getMovie(MovieDetail){
        setMovieDetail(MovieDetail);
    }
    function getCharacter(){
        
    }
    
    return (
        <div>
            {movieDetail.name}
            <br></br>
            {movieDetail.desc}
            <MovieForm getMovie={getMovie}/>
            <CharacterForm getCharacter={getCharacter}/>
        </div>
    );
}