console.log("*** ESERCIZIO 1 ***");

let person = {
    firstName: "Jhon",
    lastName: "Doe",
    greet: function () {
        console.log(`Ciao, sono ${this.firstName}`);
    }
}

person.greet();

let person1 = {
    ...person, 
    greet:function(age) {
        console.log(`${this.firstName} ${this.lastName} di anni ${age}`);
    }
}

//Inserendo i 25 all'interno della parentesi sta a indicare il parametro di "age"//
person1.greet (25);

console.log("*** ESERCIZIO 2 ***");

const Person = function(){
   this.Nome= "",
    this.Cognome= "",
    this.greet= function () {
        return "Ciao, il mio nome è " + this.Nome
    }
}

const p1 = new Person();

p1.Nome = "Stefano";
console.log(p1.greet());

console.log("*** ESERCIZIO 3 ***");

const Persona = function(_firstName, _lastName) {
    this.nome = _firstName,
    this.cognome = _lastName,
    this.greet= function() {
        console.log(`${this.nome} ${this.cognome}`);
    }
}

const persona1 = new Persona ("Stefano", "Fortezza");

persona1.greet();
