const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dd1325270fd56e224aeb97e3ae171517&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}