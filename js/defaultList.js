'use strict';

function buscar(){
  let abusc= document.getElementById( "abusq" ).value; 
abusc=abusc.toUpperCase();
  
  //console.log(abusc);

  for(var k in data) {
   // console.log(k, data[k]);
  }
  let cant2=data[k].length;
  // if (result[k][0].medcod)
  let encontra=-1;

  if ( document.getElementById( "AD" )) 
  {
  document.getElementById( "AD" ).remove();
  }
  var str="";
  var para = document.createElement("p");
 for(var i =0;i< cant2;i++){
  if (data[k][i].medcod==abusc||data[k][i].descrip.includes(abusc)){
      console.log("encontrado");
    
    encontra=i;
    
    
    str +="<li>Codigo:"+data[k][encontra].medcod +"<br>Descripcion:"+ data[k][encontra].descrip+
            "<br>Fecha Vencimiento:"+data[k][encontra].fechaven+
            "<br>Precio: S/."+data[k][encontra].precio+"<br>Stock :"+data[k][encontra].stocktot+"<br>"+
            "<br></li>";
    }

  }


  para.innerHTML ="<h6 ID=\"AD\">"+str+"</h6>";
  document.getElementById("carg").append(para);

}



//de aqui abajo esta ok 
//#region KEYPRESS



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
    //buscartrabajador(); //modo prueba len 4 falta poner en bd
  }
 
      if (event.shiftKey) {
        
        if (event.key == 't' || event.key == 'T') {
        }

        if (event.key == 'N' || event.key == 'n') {
      
        }

        if (event.key == 'E' || event.key == 'e') {
      
        }

    // || event.key == 'r'  event.which 
        if (event.key == 'r' || event.key == 'R') {
        }

      }
}, false);

~//#endregion
    


      