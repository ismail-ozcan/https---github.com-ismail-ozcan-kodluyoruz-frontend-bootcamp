function makeGroup(data){       
  
    let aliceBlueMembers=data.filter(x=>x.group=="AliceBlue");    
    console.log(aliceBlueMembers);
    let  deepPinkMembers=data.filter(x=>x.group=="DeepPink");
    console.log(deepPinkMembers);
    let orangeRedMembers=data.filter(x=>x.group=="OrangeRed");
    console.log(orangeRedMembers);
    
    
    function showAssistant(par) { 
        let assistantName="";
        for(let i=0; i<par.length; i++){                
            if(par[i].assistant){        
             assistantName=par[i].name;
            }           
        }
       console.log(assistantName)
    }

     showAssistant(aliceBlueMembers);
     showAssistant(deepPinkMembers);
     showAssistant(orangeRedMembers);    
}


