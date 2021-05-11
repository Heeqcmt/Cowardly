import React,{useState} from "react";
import NewMovie from "./component/NewMovie";
import EditMovie from "./component/EditMovie";
import './main.css'

function Main(){
    const [isEditing, setEditing] = useState(false);
    
    return (
        //condictional rendering the page.
      
        <div>
            <div className="page-select">
                <button className="page-button" onClick={()=>setEditing(false)}> new </button>
                <button className="page-button" onClick={()=>setEditing(true)}> edit </button>
            </div>
            <div>
                {isEditing?<EditMovie/>:<NewMovie/>}
            </div>
        </div>
    );
}

export default Main;