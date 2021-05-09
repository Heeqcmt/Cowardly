import React from "react";


export default function CharacterForm() {
    return (
        <form>
            <label>Movie Name: </label>
            <br></br>
            <input
                type="text"
                name="Character Name" />
            <br></br>
            <label>Character Description: </label>
            <br></br>
            <textarea rows="5" cols="30"></textarea>
            <br></br>
            <label>Select Profile picture for Character</label>
            <br></br>
            <input type="file"></input>
        </form>
    );
}