// Definicion de un objeto (estructura clave/llave, valor)
// Las llaves son: 'name', 'age', 'hobbyList'
const person = {
	name: "Alan",
	age: 28,
	hobbyList: ["running", "swimming"],
};

// añadimos un nuevo par clave, valor
person["alive"] = true;

const peopleList = [
	{ name: "P01", age: 1, hooby: null },
	{ name: "P02", age: 2, hooby: "movies" },
	{ name: "P03", age: 3, hooby: "photography" },
	{ name: "P04", age: 4, hooby: "cars" },
	{ name: "P05", age: 5, hooby: "movies" },
];

// Objeto vacio
const peopleByHobby = {};

// Iterar sobre un array y usar un objecto como "diccionario"
for (const person of peopleList) {
	if (typeof person.hooby !== "string") continue;

	if (person.hooby in peopleByHobby) {
		// Cuando ya existe el hobby en el diccionario
		// añadimos la persona al array
		peopleByHobby[person.hooby].push(person);
	} else {
		// Cuando no existe el hobby en el diccionario
		// creamos un array nuevo con una persona dentro
		peopleByHobby[person.hooby] = [person];
	}
}
console.log(person);
// Obtener las llaves de un objeto
const hobbies = Object.keys(peopleByHobby);

for (const hobby of hobbies) {
	console.log(peopleByHobby[hobby].length, "personas con el hobby de", hobby);
}
