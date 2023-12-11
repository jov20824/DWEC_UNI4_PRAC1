//El import para poder llamar a la clase Galeria del archivo galeria.js
import Galeria from "./galeria.js";

//Constantes que guardan los botones del HTML
const primera = document.getElementById('primera');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const ultima = document.getElementById('ultima');

//Constante que guarda el fondo para poder modificarlo
const imagen = document.getElementById('imagen');

//Inicializamos una galeria para trabajar con sus métodos
var galeria = new Galeria(6);

//Funcion que llama al metodo posicion cuando arranca la página
function arrancar(){

    imagen.style.backgroundImage = "url("+galeria.posicion()+")";

    if(galeria.cursor==0){
        primera.className = "deshabilitado";
        anterior.className = "deshabilitado";
        
    }else{
        primera.className = "habilitado";
        anterior.className = "habilitado";
    }
    if(galeria.cursor==(galeria.listaImg.length)-1){
        ultima.className = "deshabilitado";
            siguiente.className = "deshabilitado";
    }else{
        ultima.className = "habilitado";
        siguiente.className = "habilitado";
    }
    
}

//Funcion que llama al metodo primerIndice al pulsar el botón primera
function botonPrimera(){

    primera.addEventListener('click',function() {

        if(galeria.cursor>0){
            ultima.className = "habilitado";
            siguiente.className = "habilitado";
            imagen.style.backgroundImage = "url("+(galeria.primerIndice())+")";
        }
        if(galeria.cursor<=0){
            primera.className = "deshabilitado";
            anterior.className = "deshabilitado";
        }
        
    });
}

//Funcion que llama al metodo menorIndice al pulsar el botón anterior
function botonAnterior(){
    anterior.addEventListener('click' , function() {

        if(galeria.cursor>0){
            ultima.className = "habilitado";
            siguiente.className = "habilitado";
            imagen.style.backgroundImage = "url("+(galeria.menorIndice())+")";
        }
        if(galeria.cursor<=0){
            primera.className = "deshabilitado";
            anterior.className = "deshabilitado";
        }
      
    });
}

//Funcion que llama al metodo mayorIndice al pulsar el botón siguiente
function botonSiguiente(){

    siguiente.addEventListener('click',function() {

        if(galeria.cursor<(galeria.listaImg.length)-1){
            primera.className = "habilitado";
            anterior.className = "habilitado";
            imagen.style.backgroundImage = "url("+(galeria.mayorIndice())+")";
        }
        if(galeria.cursor>=(galeria.listaImg.length)-1){
            ultima.className = "deshabilitado";
            siguiente.className = "deshabilitado";
        }
        
    });
}

//Funcion que llama al metodo ultimoIndice al pulsar el botón última
function botonUltima(){

    
    ultima.addEventListener('click',function() {


        if(galeria.cursor<(galeria.listaImg.length)-1){
            primera.className = "habilitado";
            anterior.className = "habilitado";
            imagen.style.backgroundImage = "url("+(galeria.ultimoIndice())+")";
        }
        if(galeria.cursor>=(galeria.listaImg.length)-1){
            ultima.className = "deshabilitado";
            siguiente.className = "deshabilitado";
        }
        

    });
}

//Funcion que sirve para llamar al resto de funciones 
function botones(){
    arrancar();
    botonPrimera();
    botonAnterior();
    botonSiguiente();
    botonUltima();
}

botones();