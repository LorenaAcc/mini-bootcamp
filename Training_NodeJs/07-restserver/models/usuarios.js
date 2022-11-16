
const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
	nombre:{
		type: String,
		require: [true, 'El nombre es obligatorio']
	},
	correo: {
		type: String,
		require: [true, 'El correo es obligatorio']
	},
	password: {
		type: String,
		require: [true, 'La contraseña es obligatoria']
	},
	img: {
		type: String
	},
	rol: {
		type: String,
		require: true,
		enum: ['ADMIN_ROLE', 'USER_ROLE']
	},
	estado: {
		type: Boolean,
		default: true
	},
	google: {
		type: Boolean,
		default: false
	}
});




module.exports = model('Usuario', UsuariosSchema);















// {
// 	nombre: 'Lorena Martin'
// 	correo: 'admin@admin.com'
// 	password: '123456'
// 	img: '123456',
// 	rol: 'ADMIN_ROLE',
// 	estado: false,
// 	google: false

// }