import Axios from 'axios';



let API_KEY_CURENT = `&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530`
let API_KEY_DAILY = `&exclude=minutely&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530`
const WEATHER_CURRENT = `weather?q=`
const WEATHER_DAILY = `onecall?`
const LON = `lon=`
const LAT = `lat=`


const instanceCurentWeather = Axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`,
    responseType: "json"
})
const instanceIcon = Axios.create({
    baseURL: `https://openweathermap.org/img/wn/`,
    responseType: "json"
})


const dop = '@2x.png'

export const getIconImage = {
    getI(i) {
        if(!i){return}
        return instanceIcon.get(`${i}${dop}`)
            .then(responce => responce.request.responseURL)
            .catch(e=>{console.log(e);})
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
        if(!lat || !lon){return}
        return instanceCurentWeather.get(WEATHER_DAILY + LAT + lat + '&' + LON + lon + API_KEY_DAILY)
            .then(responce => responce.data)
    },
}


