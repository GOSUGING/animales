import { sounds } from "./howler.js";
import { imagenes } from "./imagenes.js";

document.addEventListener('DOMContentLoaded', () => {
    const btnRegistrar = document.getElementById('btnRegistrar');
    const animalSelect = document.getElementById('animal');
    const edadSelect = document.getElementById('edad');
    const comentariosInput = document.getElementById('comentarios');
    const animalesContainer = document.getElementById('Animales');
    
    const animales = [];
    let cantidadAnimales = 0;
    const cantidadMaximaAnimales = 5;
    
    // Manejar el evento de clic en el botón de Registrar
    btnRegistrar.addEventListener('click', () => {
        const animal = animalSelect.value;
        const edad = edadSelect.value;
        const comentarios = comentariosInput.value;
    
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
        const nuevoAnimal = {
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
    
        animales.forEach(animal => {
            const card = document.createElement('div');
            card.classList.add('card', 'm-2', 'text-white', 'bg-secondary');
            card.style.width = '18rem';
    
            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = obtenerRutaImagen(animal.nombre);
            cardImg.alt = animal.nombre;
            cardImg.style.height = '200px'; // Ajustar altura de imagen
    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
    
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = animal.nombre;
    
            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = `Edad: ${animal.edad}\nComentarios: ${animal.comentarios}`;
    
            const cardButton = document.createElement('button');
            cardButton.classList.add('btn', 'btn-primary');
            cardButton.textContent = 'Detalles';
            cardButton.addEventListener('click', () => mostrarDetalleModal(animal));
    
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
        const modalAnimalNombre = document.getElementById('modalAnimalNombre');
        if (modalAnimalNombre) {
            modalAnimalNombre.textContent = `Nombre: ${animal.nombre}`;
        }

        const modalAnimalEdad = document.getElementById('modalAnimalEdad');
        if (modalAnimalEdad) {
            modalAnimalEdad.textContent = `Edad: ${animal.edad}`;
        }

        const modalAnimalComentarios = document.getElementById('modalAnimalComentarios');
        if (modalAnimalComentarios) {
            modalAnimalComentarios.textContent = `Comentarios: ${animal.comentarios}`;
        }

        const modalAnimalImagen = document.getElementById('modalAnimalImagen');
        if (modalAnimalImagen) {
            modalAnimalImagen.innerHTML = '';
            const imagen = document.createElement('img');
            imagen.src = obtenerRutaImagen(animal.nombre);
            imagen.alt = animal.nombre;
            imagen.style.maxWidth = '100%';
            modalAnimalImagen.appendChild(imagen);
        }

        // Crear botón para reproducir sonido
        const botonReproducirSonido = document.createElement('button');
        botonReproducirSonido.classList.add('btn', 'btn-primary', 'mt-2');
        botonReproducirSonido.textContent = 'Reproducir Sonido';
        botonReproducirSonido.addEventListener('click', () => reproducirSonido(animal));
        if (modalAnimalImagen) {
            modalAnimalImagen.appendChild(botonReproducirSonido);
        }

        // Mostrar el modal
        $('#detalleModal').modal('show');
    }
  
    // Función para reproducir el sonido del animal seleccionado
    function reproducirSonido(animal) {
        if (sounds[animal.nombre]) {
            sounds[animal.nombre].play();
        }
    }
    
    // Función para obtener la ruta de la imagen de un animal
    function obtenerRutaImagen(nombreAnimal) {
        const animal = imagenes.find(animal => animal.nombre === nombreAnimal);
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
