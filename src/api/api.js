import Axios from 'axios';

let API_KEY = `&units=metric&lang=ru&appid=393c06f5cc22b09161f54b62d6e44530`
const WEATHER_Q = `weather?q=`

const instance = Axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
    responseType: "json"
})
const instanceIcon = Axios.create({
    baseURL: `http://openweathermap.org/img/wn/`,
    responseType: "json"
})
let dop = '@2x.png'

export const getIconImage = {
    getI(i) {
        return instanceIcon.get(i + dop).then(responce=>responce.request.responseURL)
    }
}

export const getWeather = {

    getTemp(city) {
        return instance.get(WEATHER_Q + city + API_KEY)
            .then(responce => responce.data.main)
    },
    getExtraData(city) {
        return instance.get(WEATHER_Q + city + API_KEY)
            .then(responce => responce.data.weather[0])
    }
}

getIconImage.getI("01n")
