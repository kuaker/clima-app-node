const axios = require('axios');
const argv = require('../config/yargs').argv;
const colors = require('colors');


const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(argv.direccion)

    //let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBnUBSyelLKqId1egzcJMZV-9DA9H6CWLs`)


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBnUBSyelLKqId1egzcJMZV-9DA9H6CWLs`)


    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultado para la ciudad ${ direccion }`.red.bold);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: (location.formatted_address),
        //direccion: (location.formatted_address).replace('on', '    '),
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}