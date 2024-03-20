"use strict";

var _howler = require("./howler.js");
var _imagenes = require("./imagenes.js");
document.addEventListener('DOMContentLoaded', function () {
  var btnRegistrar = document.getElementById('btnRegistrar');
  var animalSelect = document.getElementById('animal');
  var edadSelect = document.getElementById('edad');
  var comentariosInput = document.getElementById('comentarios');
  var animalesContainer = document.getElementById('Animales');
  var animales = [];
  var cantidadAnimales = 0;
  var cantidadMaximaAnimales = 5;

  // Manejar el evento de clic en el botón de Registrar
  btnRegistrar.addEventListener('click', function () {
    var animal = animalSelect.value;
    var edad = edadSelect.value;
    var comentarios = comentariosInput.value;

    // Validar los comentarios antes de agregar el animal
    if (comentarios.trim() === '') {
      alert('Por favor, ingrese comentarios.');
      return;
    }
    if (comentarios.length > 100) {
      alert('Los comentarios no pueden exceder los 100 caracteres.');
      return;
    }

    // Crear un nuevo elemento de animal
    var nuevoAnimal = {
      nombre: animal,
      edad: edad,
      comentarios: comentarios
    };

    // Agregar el animal a la lista y renderizar en la tabla
    agregarAnimal(nuevoAnimal);
    renderizarTabla();

    // Incrementar el contador de animales
    cantidadAnimales++;

    // Verificar si se alcanzó la cantidad máxima de animales
    if (cantidadAnimales >= cantidadMaximaAnimales) {
      alert('Se ha alcanzado la cantidad máxima de animales permitidos (5).');
      reiniciarFormulario();
    }
  });

  // Función para agregar un animal a la lista
  function agregarAnimal(animal) {
    // Aquí podrías realizar validaciones adicionales si es necesario
    animales.push(animal);
  }

  // Función para renderizar la tabla de animales
  function renderizarTabla() {
    animalesContainer.innerHTML = '';
    animales.forEach(function (animal) {
      var card = document.createElement('div');
      card.classList.add('card', 'm-2', 'text-white', 'bg-secondary');
      card.style.width = '18rem';
      var cardImg = document.createElement('img');
      cardImg.classList.add('card-img-top');
      cardImg.src = obtenerRutaImagen(animal.nombre);
      cardImg.alt = animal.nombre;
      cardImg.style.height = '200px'; // Ajustar altura de imagen

      var cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      var cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = animal.nombre;
      var cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = "Edad: ".concat(animal.edad, "\nComentarios: ").concat(animal.comentarios);
      var cardButton = document.createElement('button');
      cardButton.classList.add('btn', 'btn-primary');
      cardButton.textContent = 'Detalles';
      cardButton.addEventListener('click', function () {
        return mostrarDetalleModal(animal);
      });
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardButton);
      card.appendChild(cardImg);
      card.appendChild(cardBody);
      animalesContainer.appendChild(card);
    });
  }

  // Función para mostrar el modal con los detalles del animal
  function mostrarDetalleModal(animal) {
    var modalAnimalNombre = document.getElementById('modalAnimalNombre');
    if (modalAnimalNombre) {
      modalAnimalNombre.textContent = "Nombre: ".concat(animal.nombre);
    }
    var modalAnimalEdad = document.getElementById('modalAnimalEdad');
    if (modalAnimalEdad) {
      modalAnimalEdad.textContent = "Edad: ".concat(animal.edad);
    }
    var modalAnimalComentarios = document.getElementById('modalAnimalComentarios');
    if (modalAnimalComentarios) {
      modalAnimalComentarios.textContent = "Comentarios: ".concat(animal.comentarios);
    }
    var modalAnimalImagen = document.getElementById('modalAnimalImagen');
    if (modalAnimalImagen) {
      modalAnimalImagen.innerHTML = '';
      var imagen = document.createElement('img');
      imagen.src = obtenerRutaImagen(animal.nombre);
      imagen.alt = animal.nombre;
      imagen.style.maxWidth = '100%';
      modalAnimalImagen.appendChild(imagen);
    }

    // Crear botón para reproducir sonido
    var botonReproducirSonido = document.createElement('button');
    botonReproducirSonido.classList.add('btn', 'btn-primary', 'mt-2');
    botonReproducirSonido.textContent = 'Reproducir Sonido';
    botonReproducirSonido.addEventListener('click', function () {
      return reproducirSonido(animal);
    });
    if (modalAnimalImagen) {
      modalAnimalImagen.appendChild(botonReproducirSonido);
    }

    // Mostrar el modal
    $('#detalleModal').modal('show');
  }

  // Función para reproducir el sonido del animal seleccionado
  function reproducirSonido(animal) {
    if (_howler.sounds[animal.nombre]) {
      _howler.sounds[animal.nombre].play();
    }
  }

  // Función para obtener la ruta de la imagen de un animal
  function obtenerRutaImagen(nombreAnimal) {
    var animal = _imagenes.imagenes.find(function (animal) {
      return animal.nombre === nombreAnimal;
    });
    return animal ? animal.src : null;
  }

  // Función para reiniciar el formulario
  function reiniciarFormulario() {
    cantidadAnimales = 0;
    animales.length = 0;
    animalSelect.selectedIndex = 0;
    edadSelect.selectedIndex = 0;
    comentariosInput.value = '';
  }
});