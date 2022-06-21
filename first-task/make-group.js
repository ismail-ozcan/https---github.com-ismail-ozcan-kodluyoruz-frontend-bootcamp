function makeGroup(data){       
  
    let aliceBlueMembers=data.filter(x=>x.group=="AliceBlue");    
    console.log(aliceBlueMembers);   
    let  deepPinkMembers=data.filter(x=>x.group=="DeepPink");
    console.log(deepPinkMembers);
    let orangeRedMembers=data.filter(x=>x.group=="OrangeRed");
    console.log(orangeRedMembers);      // bu noktaya kadar filter metodunu kullanarak verileri tasnif ettik ve console'a yazdırdık. console'da görünecek olan şey 3 adet dizidir
    
    
    function showAssistant(par) { 
        let assistantName="";
        for(let i=0; i<par.length; i++){                
            if(par[i].assistant){        
             assistantName=par[i].name;
            }                 
        }                   // bu fonksiyonun işlevi dizi elemanlarını tek tek gezerek "value" kısmı true olan "key"e sahip elemanı bulmak ve aynı eleman içerisindeki name bilgisini bize sunmaktır
       console.log(assistantName)      
    }

     showAssistant(aliceBlueMembers);
     showAssistant(deepPinkMembers);
     showAssistant(orangeRedMembers);    
}


