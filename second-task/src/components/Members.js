import './Members.css';
import data from "./data.json";
import React, { useState } from 'react';


function Members() {

  const [orangeNum, setOrangeNum] = useState(0);
  const [deepPinkNum, setDeepPinkNum] = useState(0);
  const [aliceBlueNum, setAliceBlueNum] = useState(0);
  // Yukarıdaki üç satırda aynı işlem yapıldı. useState hook'u aşağıda onClick event ile bağlantılı olarak state değişimi yapmak üzere kullanıldı

  let orangeRedMembers = data.filter(member => member.group === "OrangeRed" && !member.assistant);
  let deepPinkMembers = data.filter(member => member.group === "DeepPink" && !member.assistant);
  let aliceBlueMembers = data.filter(member => member.group === "AliceBlue" && !member.assistant);
// data.json dosyasından import edilen data, filter metodu yoluyla her grup bir array oluşturacak şekilde tasnif edildi 

  return (
    <div className='App-header'>

      {orangeNum === 1 ?  
          // aşağıda atanan onClick event'inin gerçekleşmesi koşuluna bağlı olarak, grup üyelerini tutan her bir array, map metodu yardımı ile ekranda sırasız liste içerisinde  gösterildi
        <div>{orangeRedMembers.map(
          object => (
            <ul key={object.id}>
              <li className="list-item" key={object.id}>{object.name }</li>
            </ul>))}
        </div>

        :

        <button  className='btn' onClick={() => setOrangeNum(orangeNum + 1)}
          style={{width: "800px", height:"250px", color: "black", backgroundColor: "Orange", fontSize: "3rem" }}
        > Show OrangeRed Members</button>
      }



      {deepPinkNum === 1 ?
      // aşağıda atanan onClick event'inin gerçekleşmesi koşuluna bağlı olarak, grup üyelerini tutan her bir array, map metodu yardımı ile ekranda sırasız liste içerisinde  gösterildi
        <div>{deepPinkMembers.map(
          object => (
            <ul key={object.id}>
              <li className="list-item" key={object.id}>{object.name}</li>
            </ul>))}
        </div>

        :

        <button className='btn' onClick={() => setDeepPinkNum(deepPinkNum + 1)}
          style={{width: "800px", height:"250px", color: "black", backgroundColor: "deeppink", fontSize: "3rem" }}
        > Show DeepPink Members</button>
      }



      {aliceBlueNum === 1 ?
      // aşağıda atanan onClick event'inin gerçekleşmesi koşuluna bağlı olarak, grup üyelerini tutan her bir array, map metodu yardımı ile ekranda sırasız liste içerisinde  gösterildi

        <div>{aliceBlueMembers.map(
          object => (
            <ul key={object.id}>
              <li className="list-item" key={object.id}>{object.name }</li>
            </ul>))}
        </div>

        :

        <button className='btn' onClick={() => setAliceBlueNum(aliceBlueNum + 1)}
          style={{ width: "800px", height:"250px", color: "black", backgroundColor: "aliceblue", fontSize: "3rem" }}
        > Show AliceBlue Members</button>}
        
       <div className='scroll'>Scroll down to show assistants</div>
    </div>
     
  );
}

export default Members;
