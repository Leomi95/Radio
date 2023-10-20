// JavaScript puede usarse para actualizar la información del programa actual en tiempo real.
const programNameElement = document.getElementById('program-name');
const locutorElement = document.getElementById('locutor');

// Ejemplo: Actualizar la información del programa cada 30 segundos.
setInterval(() => {
    const programas = [
        { nombre: 'Programa Mañanero', locutor: 'Juan Pérez' },
        { nombre: 'Música de los 80', locutor: 'Ana Gómez' },
        // Agrega más programas aquí
    ];

    const programaActual = programas[Math.floor(Math.random() * programas.length)];
    programNameElement.textContent = programaActual.nombre;
    locutorElement.textContent = programaActual.locutor;
}, 30000);

// JavaScript para mostrar/ocultar el menú de hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

