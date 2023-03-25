class Persona {
	constructor(nombre, cc, fechaNacimiento, EMail, ciudadResidencia, ciudadOrigen, artistaFavorito, cancionesFavoritas) {
		this.nombre = nombre;
		this.cc = cc;
		this.fechaNacimineto = fechaNacimiento;
		this.EMail = EMail;
		this.ciudadRecidencia = ciudadResidencia;
		this.ciudadOrigen = ciudadOrigen;
		this.artistaFavorito = artistaFavorito;
		this.cancionesFavoritas = cancionesFavoritas;
	}
}

function main(){
	const input = require('prompt-sync')({sigint:true})

	let vector = [];
	const persona = new Persona("Angel Corzo", "1007196987", "23/07/2003", "josedanielmmf@gmail.com", "El Zulia, Colombia", "El Zulia, Colombia", "She", ["¿Donde Estas? - She", "Tiempo - She", "Juguete Roto - She"])
	const persona2 = new Persona("Angelica Corzo", "1007196985", "10/04/2002", "angelicacorzo@gmail.com", "El Zulia, Colombia", "El Zulia, Colombia", "Bab Bunny", ["El venano - Los cantantes", "Normal - Fercho", "Ajena - eddy herrera"])
	const persona3 = new Persona("Juan Niño", "1223658942", "20/05/2004", "juanniño@gmail.com", "Cucuta, Colombia", "Cucuta, Colombia", "Riahna", ["El venano - Los cantantes", "Normal - Fercho", "Ajena - eddy herrera"])
	vector.push(persona)
	vector.push(persona2)
	vector.push(persona3)

	let option = -1
	while (option !== 0){
		console.log("Ingrese un numero para mostrar la infomacion personal de la persona")
		vector.forEach((item, index) =>{
			console.log((index + 1) + ". " + item.nombre)
		})
		console.log("0. Salir")
		option = parseInt(input(""))

		if (option > vector.length || option < 0){
			console.log("El numero que ingreso no existe")
			continue;
		}

		if (option !== 0){
			console.log("Nombre:",vector[option - 1].nombre);
			console.log("C.C:", vector[option - 1].cc);
			console.log("Fecha de Nacimiento:", vector[option - 1].fechaNacimineto);
			console.log("E-Mail:", vector[option - 1].EMail);
			console.log("Ciudad de Recidencia:", vector[option - 1].ciudadRecidencia);
			console.log("Ciudad de Origen:", vector[option - 1].ciudadOrigen);
			console.log("Artista Favorito:", vector[option - 1].artistaFavorito);
			console.log("-------Canciones Favoritas-------\n", vector[option - 1].cancionesFavoritas.join("\n"));
		}
	}
}

main()