import React, { useState } from 'react';
import './Members.css';
import data from "./data.json";

function Assistants() {

  const [number, setNumber] = useState(0);
  
  let assistantsOfGroups=data.filter(member => member.assistant === true)  
  
  return (
    <div className='App-header'>      
            
         { number===1 ? 
         
         <div>{assistantsOfGroups.map(
          object => ( 
          <ul key={object.id}> 
          <li className="list-item" key={object.id}> 
          {object.name + " => "+ object.group}</li>
          </ul>))}
          </div>  :          
         
         <button onClick={() => setNumber(number+1)} 
         style={{ width: "800px", height:"250px", color:"black", backgroundColor:"pink", fontSize:"2rem"}}> Show Assistants Hey Click Here!!!</button>} 

            
    </div>
  );
}

export default Assistants;
