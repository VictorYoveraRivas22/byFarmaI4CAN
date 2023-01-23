'use strict';

function buscar(){
  let abusc= document.getElementById( "abusq" ).value; 
  console.log(abusc);

  for(var k in data) {
    console.log(k, data[k]);
  }
  var cant2=data[k].length;
  // if (result[k][0].medcod)
  var encontra=-1;

  if ( document.getElementById( "AD" )) 
  {
  document.getElementById( "AD" ).remove();
  }
 for(var i =0;i< cant2;i++){
  if (data[k][i].medcod==abusc||data[k][i].descrip.includes(abusc)){
      console.log("encontrado");
    
    encontra=i;
    var para = document.createElement("p");
    
    para.innerHTML= "<h6 ID=\"AD\">"+data[k][encontra].medcod +"<br>Fecha Vencimiento:"+data[k][encontra].fechaven+"<br>Descripcion:"+
            data[k][encontra].descrip+"<br>Precio:"+data[k][encontra].precio+"<br>Stock :"+data[k][encontra].stocktot+"</h6>";
    document.getElementById("carg").append(para);
   
    }
  }

}


function myFunction() {
  var para2 = document.createElement("p");
  
   
  
    try {
      // nonExistentFunction();
      if ( document.getElementById( "AD" )) 
        {
        document.getElementById( "AD" ).remove();
        }

      var para = document.createElement("p");
      para.innerHTML= "<H3 ID=\"AD\">[301203 - ENFERMERIA], [02303 - MEDICINA GENERAL] , [303304 - ODONTOLOGIA GENERAL], [303203 - OBSTETRICIA], [303802 - PSICOLOGIA]</h3>";
      document.getElementById("gridview-1122").append(para);
      
     } catch (error) {
       console.log("ERROR 1");



       try {
        // nonExistentFunction();
        if ( document.getElementById( "AD" )) 
        {
        document.getElementById( "AD" ).remove();
        }
        var para3 = document.createElement("p");
        para3.innerHTML= "<H3 ID=\"AD\">[301203 - ENFERMERIA], [02303 - MEDICINA GENERAL] ,[303304 - ODONTOLOGIA GENERAL], [303203 - OBSTETRICIA], [303802 - PSICOLOGIA]</h3>";
        document.getElementById("gridview-1123").append(para3);
      //  document.getElementById("g gridview-1292").append(para);
        
         
       } catch (error) {
         console.log("ERROR 2");

         try {
          // nonExistentFunction();
          if ( document.getElementById( "AD" )) 
          {
          document.getElementById( "AD" ).remove();
          }
          var para3 = document.createElement("p");
          para3.innerHTML= "<H3 ID=\"AD\">[301203 - ENFERMERIA], [02303 - MEDICINA GENERAL] ,[303304 - ODONTOLOGIA GENERAL], [303203 - OBSTETRICIA], [303802 - PSICOLOGIA]</h3>";
          document.getElementById("gridview-1292").append(para3);
        //  document.getElementById("g gridview-1292").append(para);
          
           
         } catch (error) {
           console.log("ERROR 3");
         }

       }
  

     }

     
     

     

}
//de aqui arriba modificar por el drive

//de aqui abajo esta ok 

document.addEventListener('keypress', (event) => {

  if (event.key === "Enter") {
 		//alert(event.key  + " a" );
     //buscartrabajador();
 		//event.preventDefault();
     }

  }, false);

document.addEventListener('keydown', (event) => {


 
  if (event.ctrlKey && (event.key=='B' || event.key=='b')){ //CTRL+B
  //  alert(CTRL+B); 
    buscartrabajador(); //modo prueba len 4 falta poner en bd
  }
 
      if (event.shiftKey) {
        
        if (event.key == 't' || event.key == 'T') {
            console.log("You have just pressed SHIFT + t/T!");
            myFunction() ;
        }

        if (event.key == 'N' || event.key == 'n') {
          document.getElementById("btnNewReg").click();
        }

        if (event.key == 'E' || event.key == 'e') {
          document.getElementById("btnEditReg").click();
        }

    // || event.key == 'r'  event.which 
        if (event.key == 'r' || event.key == 'R') {
        }

      }
}, false);
    

function timesp() {
  console.log("hola"); 
}



function buscartrabajador() {
 
  var miid=document.activeElement.id;
  const myElement = document.getElementById(miid);
  var mitext= myElement.value;
  //myElement.value="";
  var regex = /(\d+)/g;
  var solon=mitext.match(regex);
  

  if ( mitext.length>=4) {
      //47232642
      //41032295
     
      if (solon=='4103'){
       
        
        myElement.value="41032295";

        console.log(document.getElementById(miid).value); 
      }else if (solon=='4723'){
        
        
        myElement.value="47232642";
        console.log(document.getElementById(miid).value); 
      
      }


  }
  
}

      