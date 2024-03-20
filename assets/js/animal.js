export { Animal } 

class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this.nombre = nombre;
      this.edad = edad;
      this.img = img;
      this.comentarios = comentarios;
      this.sonido = sonido;
    }
   
    get Nombre() {
      return this.nombre;
    }
  
    get Edad() {
      return this.edad;
    }
  
    get Img() {
      return this.img;
    }
  
    set Comentarios(comentarios) {
      this.comentarios = comentarios;
    }
  
    get Sonido() {
      return this.sonido;
    }
  }
  
export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, img, comentarios, "Rugir");
    }
  
    Rugir() {
      console.log(this.nombre + " ruge!");
    }
  }
  
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, img, comentarios, "Chillar");
    }
  
    Chillar() {
      console.log(this.nombre + " chilla!");
    }
  }
  
 export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, img, comentarios, "Aullar");
    }
  
    Aullar() {
      console.log(this.nombre + " aúlla!");
    }
  }
  
 export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, img, comentarios, "Sisear");
    }
  
    Sisear() {
        console.log(this.nombre + " sisea!");
      }
  }
  export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, img, comentarios, "Gruñido");
    }
  
    Sisear() {
        console.log(this.nombre + " gruñe!");
      }
  }
