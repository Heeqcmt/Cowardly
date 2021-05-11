import React from "react";
import './Form.css';

export default function MovieForm(){
    return(
        <form class="formClass">
            <label>Movie Name: </label>
            <input
            type="text"
            name="Movie Name"/>
            <label>Movie Description: </label>
            <textarea rows="5" cols="30"></textarea>
            <label>Select Banner for Movie</label>
            <input type="file"></input>
        </form> 

    )
}