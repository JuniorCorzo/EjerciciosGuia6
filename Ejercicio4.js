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
	let vector = [];
	const persona = new Persona("Angel Corzo", "1007196987", "23/07/2003", "josedanielmmf@gmail.com", "El Zulia, Colombia", "El Zulia, Colombia", "She", ["¿Donde Estas? - She", "Tiempo - She", "Juguete Roto - She"])
	vector.push(persona)
	console.log(vector[0].nombre);
	console.log(vector[0].cc);
	console.log(vector[0].fechaNacimineto);
	console.log(vector[0].EMail);
	console.log(vector[0].ciudadRecidencia);
	console.log(vector[0].ciudadOrigen);
	console.log(vector[0].artistaFavorito);
	console.log("-------Canciones Favoritas-------\n", vector[0].cancionesFavoritas.join("\n"));

	console.log("\n---------Persona 2---------")
	const persona2 = new Persona("Angelica Corzo", "1007196985", "10/04/2002", "angelicacorzo@gmail.com", "El Zulia, Colombia", "El Zulia, Colombia", "Bab Bunny", ["El venano - Los cantantes", "Normal - Fercho", "Ajena - eddy herrera"])
	vector.push(persona2)
	console.log(vector[1].nombre);
	console.log(vector[1].cc);
	console.log(vector[1].fechaNacimineto);
	console.log(vector[1].EMail);
	console.log(vector[1].ciudadRecidencia);
	console.log(vector[1].ciudadOrigen);
	console.log(vector[1].artistaFavorito);
	console.log("-------Canciones Favoritas-------\n", vector[1].cancionesFavoritas.join("\n"));
}

main()