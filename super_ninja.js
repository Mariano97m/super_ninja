class ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName = () => {
        console.log(this.nombre);
    }
    showStats = () =>{
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }
    drinSake = () => {
        this.salud += 10;
    }
}

class sensei extends ninja {
    constructor(nombre){
        super()
        this.nombre = nombre;
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }
    speakWisdom = () => {
        this.drinSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const mart = new ninja ("Mariano", 500);
mart.sayName();
mart.showStats();
mart.drinSake();
mart.showStats();

const superSensei = new sensei ("Master Splinter");
superSensei.speakWisdom();
superSensei.sayName();
superSensei.showStats();
superSensei.drinSake();
superSensei.showStats();





