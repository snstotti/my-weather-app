import Axios from 'axios';

let API_KEY_CURENT = `&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530`
let API_KEY_DAILY = `&exclude=minutely&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530`
const WEATHER_CURRENT = `weather?q=`
const WEATHER_DAILY = `onecall?`
const LON = `lon=`
const LAT = `lat=`


const instanceCurentWeather = Axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
    responseType: "json"
})
const instanceIcon = Axios.create({
    baseURL: `http://openweathermap.org/img/wn/`,
    responseType: "json"
})


const dop = '@2x.png'

export const getIconImage = {
    getI(i) {
        return instanceIcon.get(`${i}${dop}`)
            .then(responce => responce.request.responseURL)
    }
}

export const getWeather = {

    getExtraData(city) {
        return instanceCurentWeather.get(WEATHER_CURRENT + city + API_KEY_CURENT)
            .then(responce => responce.data)
    },
}

export const getWeatherDaily = {
    
    getDailyData(lat, lon) {
        
        return instanceCurentWeather.get(WEATHER_DAILY + LAT + lat + '&' + LON + lon + API_KEY_DAILY)
            .then(responce => responce.data)
    },
}


