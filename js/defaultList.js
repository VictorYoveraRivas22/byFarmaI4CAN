'use strict';

var kl;
var kld;
function buscarDONADOS(){
  let abusc= document.getElementById( "abusq" ).value; 
  abusc=abusc.toUpperCase();
  let encontra=-1;
  //donados.datadonados
  if ( document.getElementById( "AD" )) 
  {
  document.getElementById( "AD" ).remove();
  }


   if ( document.getElementById( "klxs" )) 
  {
  document.getElementById( "cuerpo" ).remove();
  }

  if ( document.getElementById( "cuerpo" )) 
  {


     } else {
      let prux =document.createElement("tbody");
      prux.id="cuerpo";
      document.getElementById( "mitable" ).append(prux);

     }

 // document.getElementById("cuerpo").removeChild(pru);
  var str="";
  var str2="";
  
  var para = document.createElement("p");

  let cant= donados.datadonados.length;
  
  const cuerpotabla=document.getElementById("cuerpo");
 for(let i =0;i< cant;i++){
  let medi=donados.datadonados[i]["NOMBRE MEDICAMENTOS"];
  let medcome=donados.datadonados[i]["NOMBRE COMERCIAL"];
  if (medi.includes(abusc)||medcome.includes(abusc)){
    encontra=i;

    /*
    str +="<li>Nº:"+donados.datadonados[i]["N"] +
          "<br>NOMBRE MEDICAMENTOS :"+ medi+
            "<br>NOMBRE COMERCIAL :"+medcome+
            "<br>FECHA DE VENCIMIENTO: S/."+donados.datadonados[i]["FECHA DE VENCIMIENTO"]+
            "<br>CANTIDAD :"+donados.datadonados[i]["CANTIDAD"]+
            "<br>USO :"+donados.datadonados[i]["USO"]+
            "<br>CAJA :"+donados.datadonados[i]["CAJA"]+
            "<br></li>";
            */
            var trx = "<td>"+donados.datadonados[i]["N"]+'</td>'+
            "<td>"+medi+'</td>'+
          '<td>'+medcome+'</td>'+
          '<td align="center">'+donados.datadonados[i]["FECHA DE VENCIMIENTO"]+'</td>'+
          '<td>'+donados.datadonados[i]["USO"]+'</td>'+
          '<td align="center">'+donados.datadonados[i]["CANTIDAD"]+'</td>'+
          '<td align="center">'+donados.datadonados[i]["CAJA"]+'</td>';
          


          str2+= trx;
          let pru =document.createElement("tr");
          pru.id="klxs"
          pru.innerHTML=trx;
          cuerpotabla.append(pru);
        
    }
  }
  
  
  
  


  //document.getElementById("cuerpo").append();

  //para.innerHTML ="<h6 ID=\"AD\">"+str+"</h6>";
  //document.getElementById("carg").append(para);
  /*
  fetch('./JS/BDDONADOS.JSON', { mode: "no-cors" })
  .then((response) => response.json())
  .then(dataX => console.log(dataX)
  );
*/


}



function buscar(){
  let abusc= document.getElementById( "abusq" ).value; 
  abusc=abusc.toUpperCase();

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


  $("#abusq").keyup(function(event) {
    if (event.key === 13) {
      buscarDONADOS();
      $("#busquedaA").click();
    }
});

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

    


      