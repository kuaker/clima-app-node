const axios = require('axios');
//const argv = require('./config/yargs').argv;

const getClima = async(lng, lat) => {

    // let encodedLat = encodeURI(argvClima.lat);
    // let encodedLon = encodeURI(argvClima.lon);
    //    let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${ encodedLat }&lon=${ encodedLon }&appid=42f4fae30efc5b931e67bf0b4de19a56&units=metric`;




    let URL = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=42f4fae30efc5b931e67bf0b4de19a56&units=metric`;

    let respClima = await axios.get(URL)

    /*
        if (respClima.data.status === "ZERO_RESULTS") {
            throw new Error(`No hay resultado para la ciudad ${ direccion }`.red.bold);
        }
    */
    let temp = respClima.data.main.temp;

    return temp;

}

module.exports = {
    getClima
}