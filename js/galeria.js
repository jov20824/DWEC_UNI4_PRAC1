export default class Galeria{

    //Constructor al que le paso el numero de imagenes que quiero que introduzca en el array 
    //e inicializo el cursor (variable que indica en qué posición del array nos encontramos) y dicho array
    constructor(numImg){
        this.cursor=0;
        this.listaImg = [];
        for(let i=1;i<=numImg;i++){
            this.listaImg.push("./images/foto"+i+".jpg");
        }
    }

    //Método que coloca una imagen aleatoria del array para cuando entramos a la página
    posicion(){
        let aleatorio = Math.round(Math.random()*(this.listaImg.length-1));
        this.cursor = aleatorio;
        return this.listaImg[this.cursor];
    }

    //Método que sirve para colocar la última imágen
    ultimoIndice(){
        this.cursor = (this.listaImg.length)-1;
        return this.listaImg[this.cursor];
    }

    //Método que sirve para colocar la primera imágen
    primerIndice(){
        this.cursor=0;
        return this.listaImg[this.cursor];
    }

    //Método que coloca la imagen anterior
    menorIndice(){
        this.cursor--;
        return this.listaImg[this.cursor];
    }

    //Método que coloca la imagen siguiente
    mayorIndice(){
        this.cursor++;
        return this.listaImg[this.cursor];
    }
}
