const argv = require('./config/yargs').argv;
const colors = require('colors');
const {
	crear,
	getListado,
	actualizar,
	borrar,
} = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
	case 'crear':
		console.log('Creará');
		let tarea = crear(argv.descripcion);
		console.log(tarea);
		break;
	case 'borrar':
		let borrado = borrar(argv.descripcion);
		console.log('borrado:' + (borrado === true));
		break;
	case 'actualizar':
		let actualizado = actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		break;
	case 'listar':
		let listado = getListado();
		for (let tarea of listado) {
			console.log('============Por Hacer============');
			console.log('tarea:' + tarea.descripcion);
			console.log('estado:' + tarea.completado);
			console.log('=================================');
		}
		console.log('Listó');
		break;

	default:
		console.log('Comando no reconocido');
		break;
}
