console.log('calvo');
let a =[4,2];
let b= [5,3];
let contar;
let com;


for (contar=0;contar<2;contar++) {
   a[contar]=a[contar]+b[contar];
}

console.log(a);
let matnotas=[
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
 
]
let pedidos=[
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0]
];

let pedidosent=[
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0]
];
let pedidosdef=[
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0]
];
let carta= ["Jamón ibérico","Ensaladilla rusa","Croquetas",
   "Filete de ternera","Merluza al horno","Tartar de salmon y aguacate",
   "Tarta de queso","Tarta de la abuela","Natillas",
   "Refresco","Agua","Cerveza"];
let reiniciar= document.getElementById("reiniciar").onclick= function(e){
   let pedidosdefJSON=JSON.stringify(pedidosdef);
   localStorage.setItem("pedidosdef",pedidosdefJSON);
   let pedidosentJSON=JSON.stringify(pedidosent);
   localStorage.setItem("pedidosent",pedidosentJSON);
   let pedidosJSON=JSON.stringify(pedidos);
   localStorage.setItem("pedidos",pedidosJSON);
   let matnotasJSON=JSON.stringify(matnotas);
   localStorage.setItem("matnotas",matnotasJSON);
   
   
};




let m=0;








let m1 =document.getElementById("m1").onclick=function(e){
    
   elegirMesa(0); 
}
let m2 =document.getElementById("m2").onclick=function(e){
    
   elegirMesa(1);
}
let m3 =document.getElementById("m3").onclick=function(e){
    
   elegirMesa(2);
}
let m4 =document.getElementById("m4").onclick=function(e){
    
   elegirMesa(3);
}
let m5 =document.getElementById("m5").onclick=function(e){
    
   elegirMesa(4);
}
let m6 =document.getElementById("m6").onclick=function(e){
    
   elegirMesa(5);
}
let m7 =document.getElementById("m7").onclick=function(e){
    
   elegirMesa(6);
}
let m8 =document.getElementById("m8").onclick=function(e){
    
   elegirMesa(7);
}
let m9 =document.getElementById("m9").onclick=function(e){
    
   elegirMesa(8);
}
let m10 =document.getElementById("m10").onclick=function(e){
    
   elegirMesa(9);
}



let bcocina =document.getElementById("cocina");
bcocina.onclick= function(e){
    
   location.href="cocina.html";
       
   }

function elegirMesa (mm) {
    localStorage.setItem("mesa",mm);
    location.href="carta.html";
}







console.log(pedidos);
function cart() {
   let pedidosJSON=localStorage.getItem("pedidos");
   let pedidos=JSON.parse(pedidosJSON);
   let pedidosdefJSON=localStorage.getItem("pedidosdef");
   let pedidosdef=JSON.parse(pedidosdefJSON);
   let pedidosentJSON=localStorage.getItem("pedidosent");
   let pedidosent=JSON.parse(pedidosentJSON);
   let mesa=parseFloat(localStorage.getItem("mesa"));
   let mn;
   let pn;
   console.log('ent'+pedidosent);
   let p=0;
   let pedconfs=' ';
   




   let conf= document.getElementById("conf").onclick= function(e){
      for (contar=0;contar<12;contar++) {
         pedidosdef[mesa][contar]=pedidosdef[mesa][contar]+pedidos[mesa][contar];
      }
      
      
      
      
      console.log(pedidosdef);   
      let pedidosdefJSON=JSON.stringify(pedidosdef);
      localStorage.setItem("pedidosdef",pedidosdefJSON); 
 /*      let spans =document.querySelectorAll('.lista');
      spans.forEach(span => {
         span.innerHTML += ' Preparando...<br> ';
         span.classList.remove('lista');
     }); */
     pedconfs=pedprov.innerHTML;
     
     
     pedidos[mesa]=
      [0,0,0,0,0,0,0,0,0,0,0,0];
     console.log(pedidos);
     print();
   };

    let pedprov= document.getElementById("pedprov");
    let template=document.getElementById("template").content;
    let template_prep=document.getElementById("template-prep").content;
    let template_ent=document.getElementById("template-ent").content;
    let fragmento=document.createDocumentFragment();
    let fragmento_prep=document.createDocumentFragment();
    let fragmento_ent=document.createDocumentFragment();
    let letra=document.querySelectorAll("letra");
   print();

   let tabla= document.getElementById("tabla");
   tabla.addEventListener('click',e=>{
      sumar(e);
   } )
   const sumar= e => {
      if (e.target.classList.contains('botono')) {
         if (parseFloat(e.target.id)<15) {
            console.log(e.target);
            let pe=parseFloat(e.target.id);
            console.log(pe);
            pedidos[mesa][pe]++;

            print();
         } else {
            let me=parseFloat(e.target.id)-20;
            console.log(e.target);
            if (pedidos[mesa][me]>0){
               pedidos[mesa][me]--;
               
               print();
            }
            }         
      }
      e.stopPropagation();
   }


    function print() {
        console.log(pedidosent);
        pedprov.textContent=' ';
        for (p=0;p<12;p++) {           
            if (pedidosent[mesa][p]>0)  {
                template_ent.querySelector('.letra').textContent=carta[p]+" x"+pedidosent[mesa][p]+' Entregado';                
                let clonent=template_ent.cloneNode(true);
                fragmento_ent.appendChild(clonent);


            }
       }
       for (p=0;p<12;p++) {           
         if (pedidosdef[mesa][p]>0)  {
             template_prep.querySelector('.letra').textContent=carta[p]+" x"+pedidosdef[mesa][p]+' Preparando...';                
             let clondef=template_prep.cloneNode(true);
             fragmento_prep.appendChild(clondef);
         }
      }
      for (p=0;p<12;p++) {           
         if (pedidos[mesa][p]>0)  {
             template.querySelector('.letra').textContent=carta[p]+" x"+pedidos[mesa][p];
             let nota=document.createElement('textarea');
             console.log('aaa');
             nota.rows=1;
             nota.id=(mesa+'y'+p);                
             nota.classList.add(mesa);                
             nota.classList.add(100+p);
 
             let envnota=document.createElement('button');
             envnota.textContent='Enviar nota';
             envnota.classList.add(mesa); 
             console.log(typeof (mesa+'y'+p));               
             envnota.classList.add(100+p);
             envnota.classList.add('envnota');
             envnota.classList.add('listo'); 
             let clon=template.cloneNode(true);
             clon.appendChild(nota);
             clon.appendChild(envnota);
             fragmento.appendChild(clon);
         }
      }
      
        pedprov.appendChild(fragmento_ent);
        pedprov.appendChild(fragmento_prep);
        pedprov.appendChild(fragmento);
        /* abajo.textContent="La mesa "+ (mesa+1) +" quiere ensaladilla"; */
        let pedidosdefJSON=JSON.stringify(pedidosdef);
        localStorage.setItem("pedidosdef",pedidosdefJSON);
        let pedidosentJSON=JSON.stringify(pedidosent);
        localStorage.setItem("pedidosent",pedidosentJSON);
        let pedidosJSON=JSON.stringify(pedidos);
        localStorage.setItem("pedidos",pedidosJSON);
        console.log(pedidos);
    }
/*     let nota= document.getElementById("nota").onclick= function(e){
      com=document.querySelector('.comentario').value; 
      console.log(com);
   }; */
   pedprov.addEventListener('click',e=>{
      anotar(e);
   } )

   const anotar= e => {
   console.log(e.target); 
   if (e.target.classList.contains('envnota')) {
      let matnotasJSON=localStorage.getItem("matnotas");
      let matnotas=JSON.parse(matnotasJSON);
      console.log(e.target);
      mn=parseFloat(e.target.classList[0]);
      pn=parseFloat(e.target.classList[1])-100;
      console.log(mn+'y'+pn);
      console.log(typeof (mn+'y'+pn));
      let aux=mn+'y'+pn;
      matnotas[mn][pn]=document.getElementById(aux).value;
      /* '.'+String(mn+'y'+pn) */
      console.log(matnotas);
      matnotasJSON=JSON.stringify(matnotas);
      localStorage.setItem("matnotas",matnotasJSON);
      console.log(matnotas);


   }
 }
}

function cocin()

{
   let matnotasJSON=localStorage.getItem("matnotas");
   let matnotas=JSON.parse(matnotasJSON);
   let mc;
   let pc;
   function eliminar (){
      for (mesa=0;mesa<10;mesa++){
         for (p=0;p<12;p++) {
            
         }
      }
   }
   function printcoc (){
      
      peddef.textContent=" ";
      let pedidosdefJSON=localStorage.getItem("pedidosdef");
      let pedidosdef=JSON.parse(pedidosdefJSON);
      let pedidosentJSON=localStorage.getItem("pedidosent");
      let pedidosent=JSON.parse(pedidosentJSON);

      console.log(matnotas);
      console.log(pedidos);
      
      for (mesa=0;mesa<10;mesa++) {
         
         cont=0;
         pedidosdef[mesa].forEach(item => {
            cont=cont+item;
        });
        if (cont>0) {
         let li=document.createElement('li');
         li.textContent='Mesa '+(mesa+1);
         li.classList.add('mesas');
         peddef.appendChild(li);
         
         for (p=0;p<12;p++) {
               
            if (pedidosdef[mesa][p]>0)  {
   
                /* template.querySelector('.letra').textContent=carta[p]+" x"+pedidos[mesa][p];
                let elim=document.createElement('button');
                elim.textContent='Eliminar';
                let clon=template.cloneNode(true);
                clon.appendChild(elim);
                fragmento.appendChild(clon);
                elim.addEventListener('click', function() {
                fragmento.removeChild(clon);
                  
              }); */
              let lis=document.createElement('li');
                  lis.textContent=carta[p]+" x"+pedidosdef[mesa][p];
                  let elim=document.createElement('button');
                
                elim.classList.add(mesa);                
                elim.classList.add(100+p);
                console.log(p);
                elim.classList.add('elimi');
                elim.id=mesa+' '+p;
                elim.textContent='Eliminar';
                lis.appendChild(elim);
                if (matnotas[mesa][p]!=' ')   {
                  console.log('si');
                  let vernota=document.createElement('button');
                  vernota.textContent='!';
                  vernota.classList.add(mesa);                
                  vernota.classList.add(100+p);
                  vernota.classList.add('vernota');
                  vernota.id=(mesa+'y'+p);
                  lis.appendChild(vernota);
                }

                  
                  let childNode=fragmentos.firstChild;
                  fragmentos.insertBefore(lis,childNode); 
/*                   elim.addEventListener('click', function() {
                     peddef.removeChild(lis);
                     
                     
                     
                       
                   }); */


            }
   
           
        }
        //peddef.appendChild(fragmento); 
        peddef.appendChild(fragmentos); 
       } 
      } 
   }
   let vaciar= document.getElementById("vaciar").onclick= function(e){   
      let pedidosdefJSON=JSON.stringify(pedidosdef);
      localStorage.setItem("pedidosdef",pedidosdefJSON);  
      printcoc();
   };
 

   
   let peddef= document.getElementById("peddef");
   //let template=document.getElementById("template").content;
   //let fragmento=document.createDocumentFragment();
   let fragmentos=document.createDocumentFragment();
   let cont;
   
   
   printcoc();
   let pedidef=document.querySelector(".pedidef");
pedidef.addEventListener('click',e=>{
   /* sumar(e); */
   añadir(e);
   vernotas(e);
   
} )
const vernotas= e => {
   if(e.target.classList.contains('vernota')){
      let matnotasJSON=localStorage.getItem("matnotas");
      let matnotas=JSON.parse(matnotasJSON);
      console.log(e.target);
      let mnot=parseFloat(e.target.classList[0]);
      let pnot=parseFloat(e.target.classList[1])-100;
      console.log(mnot,pnot);
      console.log(matnotas);
      console.log(matnotas[mnot][pnot]);

      alert(matnotas[mnot][pnot]);
}
}
const añadir= e => {
   let pedidosdefJSON=localStorage.getItem("pedidosdef");
   let pedidosdef=JSON.parse(pedidosdefJSON);
   let pedidosentJSON=localStorage.getItem("pedidosent");
   let pedidosent=JSON.parse(pedidosentJSON);
   console.log(e.target);
   if(e.target.classList.contains('elimi')){
      console.log(e.target.classList[0]);
      mc=parseFloat(e.target.classList[0]);
      pc=parseFloat(e.target.classList[1])-100;
      pedidosent[mc][pc]=pedidosdef[mc][pc];
      pedidosdef[mc][pc]=0;
      console.log(mc+'y'+pc);
      console.log(pedidos);
      console.log(pedidos[mc][pc]);
      console.log(pedidosent);
      console.log('ent'+pedidosent);
      let pedidosdefJSON=JSON.stringify(pedidosdef);
      localStorage.setItem("pedidosdef",pedidosdefJSON);
      let pedidosentJSON=JSON.stringify(pedidosent);
      localStorage.setItem("pedidosent",pedidosentJSON);
      console.log(pedidos);
      printcoc();
      

   }

   
}

/* const setCarrito = objeto =>{
   const producto={
      id: objeto.querySelector('elimi').dataset.id
   }
   console.log(producto);
}
 */
 
}



/* mirar lo del struct */



 
