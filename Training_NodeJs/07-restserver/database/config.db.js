const mongoose = require('mongoose');
require('colors');

const dbConnection = async() => {

	try{
		await mongoose.connect(process.env.MONGODB_CNN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			//useCreateIndex: true,
			//useFindAndModify: false
		});

		console.log('Base de datos: '.cyan + 'online'.green);

	} catch (error) {
		console.log(error);
		throw new Error('Error al iniciar base de datos'.red);
	}

}


module.exports = {
	dbConnection
}