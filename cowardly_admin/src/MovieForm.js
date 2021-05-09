import React from "react";

export default function MovieForm(){
    return(
        <form>
            <label>Movie Name: </label>
            <br></br>
            <input
            type="text"
            name="Movie Name"/>
            <br></br>
            <label>Movie Description: </label>
            <br></br>
            <textarea rows="5" cols="30"></textarea>
            <br></br>
            <label>Select Banner for Movie</label>
            <br></br>
            <input type="file"></input>
        </form> 

    )
}