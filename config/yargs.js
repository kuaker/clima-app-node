const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener clima',
        demand: true
    }
}).argv;

/*
const argvClima = require('yargs').options({
    lat: {
        alias: 'la',
        desc: 'Latitud',
        demand: true
    },
    lon: {
        alias: 'lo',
        desc: 'Longitud',
        demand: true
    }
}).argv;
*/

module.exports = {
    argv
}