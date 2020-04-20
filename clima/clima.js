const axios = require('axios');

const getClima = async(lat, lon) => {
    const apiKey = '3b1cb0a2283de61b0a7dab0517302e48';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    return resp.data.main;
}


const getClimaHora = async(lat, lon) => {
    const apiKey = '3b1cb0a2283de61b0a7dab0517302e48';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    return resp.data.list;
}



module.exports = {
    getClima,
    getClimaHora
}