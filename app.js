const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');
const colors = require('colors');


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let tempi = await clima.getClima(coors.lng, coors.lat);

        return `El clima en ${coors.direccion} es de ${ tempi } grados`;

    } catch (error) {

        return `No se pudo determinar el clima en ${ direccion.bold.red }`;

    }

}



getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))

/*

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    });



clima.getClima(139, 35)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));


    */