"use strict";

class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Los datos del propietario son: Nombre: ${this.nombre} - Direccion: ${this.direccion} - Telefono: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(
        nombreDelPropietario,
        direccionDelPropietario,
        telefonoDelPropietario,
        tipo
    ) {
        super(
            nombreDelPropietario,
            direccionDelPropietario,
            telefonoDelPropietario
        );

        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {
    constructor(
        nombreDelPropietario,
        direccionDelPropietario,
        telefonoDelPropietario,
        tipoDeAnimal,
        nombreMascota,
        enfermedadMascota
    ) {
        super(
            nombreDelPropietario,
            direccionDelPropietario,
            telefonoDelPropietario,
            tipoDeAnimal
        );

        this._nombreMascota = nombreMascota;
        this._enfermedadMascota = enfermedadMascota;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }

    get enfermedadMascota() {
        return this._enfermedadMascota;
    }

    set enfermedadMascota(nuevaEnfermedadMascota) {
        this._enfermedadMascota = nuevaEnfermedadMascota;
    }
}

///////////////////////////////////////////////

const propietarioElement = document.querySelector("#propietario");
const telefonoElement = document.getElementById("telefono");
const direccionElement = document.getElementById("direccion");
const nombreMascotaElement = document.getElementById("nombreMascota");
const tipoElement = document.getElementById("tipo");
const enfermedadElement = document.getElementById("enfermedad");

const btnElement = document.querySelector(".btn");

const resultadoElement = document.getElementById("resultado");

btnElement.addEventListener("click", (event) => {
    event.preventDefault();
    const nombreDelPropietario = propietarioElement.value;
    const telefonoDelPropietario = telefonoElement.value;
    const direccionDelPropietario = direccionElement.value;
    const nombreDeLaMascota = nombreMascotaElement.value;
    const tipoDeMascota = tipoElement.value;
    const enfermedadDeLaMascota = enfermedadElement.value;

    console.log({
        nombreDelPropietario,
        telefonoDelPropietario,
        direccionDelPropietario,
        nombreDeLaMascota,
        tipoDeMascota,
        enfermedadDeLaMascota,
    });

    const mascota = new Mascota(
        nombreDelPropietario,
        direccionDelPropietario,
        telefonoDelPropietario,
        tipoDeMascota,
        nombreDeLaMascota,
        enfermedadDeLaMascota
    );

    console.log(mascota);

    resultadoElement.innerHTML = `
    <ul>
      <li>${mascota.datosPropietario()}</li>
      <li>El tipo de animal es un: ${mascota.tipo
        }, mientras que el nombre de la mascota es: ${mascota.nombreMascota
        } y la enfermedad es: ${mascota.enfermedadMascota}</li>
    </ul>
  `;
});