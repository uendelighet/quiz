// Ejercicio 1: 
// Actualizar un arreglo de objetos basado en una condición
// Tienes un arreglo de objetos que representan tareas, 
// cada una con un id, nombre, y completada (un booleano). 
// Escribe una función que tome el id de una tarea y marque 
// esa tarea como completada (es decir, completada debe ser true).


const tareas = [
    {
        id: 152,
        name: "Algoritmos",
        estado: false,
    },
    {
        id: 185,
        name: "Armonia",
        estado: false,
    },
    {
        id: 115,
        name: "Bateria",
        estado: false,
    },
];

const estadoTareas = (tareas, estado) => {
    let verCompletas = 0;

    verCompletas.forEach(element => {
        if(tareas.estado === estado) array.push(tarea)}); 
        return tareas.estado = true}; 
        console.log(estadoTareas(tareas, 1));




// Ejercicio 2: Encontrar el objeto con el valor máximo de una 
// propiedad. Dado un arreglo de objetos que representan ciudades 
// con su respectiva población, escribe una función que encuentre 
// y devuelva la ciudad con la mayor población.

const ciudades = [
    {
        name: "Cali",
        poblation: 1.253,
    },
    {
        name: "Bogota",
        poblation: 7.586,
    },
    {
        name: "Vijes",
        poblation: 112,
    },
];

const valorMaximo = (ciudadMasGrande) => {
    const ciudadesOrden = ciudades.sort((a, b) => {
    a.poblation - b.poblation}); 
    return ciudadesOrden;
}; console.log(valorMaximo(ciudades));