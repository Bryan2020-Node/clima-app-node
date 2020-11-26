const axios = require('axios');


const getLugarLatLng = async(dir) => {
    // console.log(argv.direccion);
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geohub3.p.rapidapi.com/cities/search/${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'e8bd56e6f9mshd22fa99528dcb59p1d8575jsna1ca2580b53e' }
    });

    const resp = await instance.get();
    if (resp.data.data.cities.length === 0) {
        throw new Error(`No hat resultados para ${dir}`);
    }
    const data = resp.data.data.cities[0];

    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}