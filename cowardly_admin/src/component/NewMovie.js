// page for new movies
import React, {useState}from "react";
import MovieForm from "./MovieForm";
import CharacterForm from "./CharacterForm";
import './NewMovie.css'



export default function NewMovie(){
    
    const [movieDetail, setMovieDetail] = useState({});
    const [charArray, setCharArray] = useState([]);
    
    function getMovie(MovieDetail){
        setMovieDetail(MovieDetail);
    }
    function getCharacter(char){
        setCharArray([...charArray,char]);

    }

    function handleSubmit(){
        //package the final json
        //send to database
    }

    const charDisplay = charArray.map(
        char=><div>
            <li>{char.name}</li>
            <li>{char.desc}</li>
        </div>
    )
    
    return (
        <div>
            {movieDetail.name}
            <br></br>
            {movieDetail.desc}
            <br></br>
            {charDisplay}
            
            <MovieForm getMovie={getMovie}/>
            <CharacterForm getCharacter={getCharacter}/>
            <button className="full-button" onClick={handleSubmit}>done</button>
        </div>
    );
}