import React from "react";
import './Form.css';

export default function CharacterForm() {
    return (
        <form class="formClass">
            <label>Character Name: </label>
            <input
                type="text"
                name="Character Name" />
            <label>Character Description: </label>
            <textarea rows="5" cols="30"></textarea>
            <label>Select Profile picture for Character</label>
            <input type="file"></input>
            <label>Character Dead?</label>
            <input  type="checkbox"></input>
        </form>
    );
}