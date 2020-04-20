const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

console.log(argv.direccion);

const getInfo = async(dir) => {

    const coords = await lugar.getLanLong(dir);
    const temp = await clima.getClima(coords.lat, coords.lng);

    return {
        coords,
        temp
    }
}

getInfo(argv.direccion)
    .then(d => console.log(d))
    .catch(e => console.log(e));


/*
lugar.getLanLong(argv.direccion)
    .then(d => {
        console.log(d);
        clima.getClima(d.lat, d.lng)
            .then(d2 => console.log(d2))
            .catch(e2 => console.log(e2));

        clima.getClimaHora(d.lat, d.lng)
            .then(d2 => console.log(d2))
            .catch(e2 => console.log(e2));


    })
    .catch(e => console.log(e));
*/