import React,{useState} from "react";
import NewMovie from "./NewMovie";
import EditMovie from "./EditMovie";

function Main(){
    const [isEditing, setEditing] = useState(false);
    
    return (
        //condictional rendering the page.
      
        <div>
            <div>
                <button onClick={()=>setEditing(false)}> new </button>
                <button onClick={()=>setEditing(true)}> edit </button>
            </div>
            <div>
                {isEditing?<EditMovie/>:<NewMovie/>}
            </div>
        </div>
    );
}

export default Main;