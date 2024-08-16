//Definición de variables
const nombre = "María Ramos";
let edad = 27;
const precio = 50.000;

//Mostrar Resultados
console.log("Nombre:", nombre);
console.log("Precio: $",precio.toFixed(3));
console.log("Edad:", edad);

//Se crea lista de series favoritas y se agrega una serie a la lista
const seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
seriesFavoritas[3] = "Dr House";
console.table(seriesFavoritas);

//Incrementa la edad en 1
edad ++;
console.log("Edad actual:", edad)

//Definicion de peliculas favoritas, año y protagonistas
const peliculas = [
  {
    nombre: "Harry Potter y El presionero de Azkaban",
    informacion: {
      año: 2004,
      protagonistas: ["Daniel Radcliffe", " Emma Watson", " Rupert Grint"],
    }
  },
  {
    nombre :"Piratas del Caribe: La Maldición del Perla Negra",
    informacion :{
        año: 2003,
        protagonistas: ["Johnny Depp", " Orlando Bloom"],
    }
  },
  {
    nombre: "Shrek",
    informacion :{
        año: 2001,
        protagonistas : ["Mike Myers", " Eddy Murphy"],
    }
  },
];
    
peliculas.forEach(({nombre, informacion}) => {
    console.log(`Película: ${nombre} Año:${informacion.año} Protagonistas: ${informacion.protagonistas}`)
});