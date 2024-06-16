const proyectosContainer = document.getElementById("TarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) => {
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class="tecnologia">${tecnologia}</span> `;
    });
    return res;
};

// Creacion proyectos
proyectos.forEach(proyecto => {
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto"
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
        <img src="img/proyectos/${proyecto.imagen}" alt="${proyecto.titulo}">
        <div>
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
        <div> 
        <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
   
});

// Creacion info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList= "presentacion"
nuevaPresentacion.innerHTML = `
    <img src="${informacionPersonal.imagen}">
`;

informacionPersonal.otros.forEach(dato => {
    nuevaPresentacion.innerHTML += `
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `;
});
aside.appendChild(nuevaPresentacion);

// Idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
informacionPersonal.idiomas.forEach(dato => {
    nuevoIdiomas.innerHTML += `
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `;
});
aside.appendChild(nuevoIdiomas);

// Lenguajes de programacion
const nuevoLenguajesProgramacion = document.createElement("div");
nuevoLenguajesProgramacion.classList="idioma";
informacionPersonal.tecnologias.forEach(dato => {
    nuevoLenguajesProgramacion.innerHTML += `
        <div>
            <span>${dato[0]}</span>
            <span>${dato[1]}</span>
        </div>
        <progress max="10" values=${dato[1]}>
    `;
});
aside.appendChild(nuevoLenguajesProgramacion);

// Links a redes sociales


const getIconoRed = (red) =>{
    switch(red){
        case "Instagram":
            return"ig.jpeg";
        case "inkedIn":
           return"descargar.png";
        case "GitHub":
            return"git.png";
    }
    
}


const nuevoRedes = document.createElement("div");
nuevoRedes.classList.add("redes");
informacionPersonal.redes.forEach(dato => {
    nuevoRedes.innerHTML += `
        <a href="${dato[1]}" target="_blank">
        <img src="img/iconos/${getIconoRed(dato[0])}">
        <a/a>
    `;
});
aside.appendChild(nuevoRedes);