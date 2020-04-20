const axios = require('axios');

const getLanLong = async(direccion) => {
    const encoledUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encoledUrl,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'f22b64c2c4msh67c2330b9fae02bp17dfc1jsn5a19dc970be9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`no hay resultados para ${direccion}`);
    }

    return {
        direccion: resp.data.Results[0].name,
        lat: resp.data.Results[0].lat,
        lng: resp.data.Results[0].lon,
    }
}

module.exports = {
    getLanLong
}