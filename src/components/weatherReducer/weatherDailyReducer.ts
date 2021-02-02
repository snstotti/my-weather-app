import { getIconImage, getWeatherDaily } from '../../api/api'


const SET_LOADING = 'SET_LOADING'
const SET_TEMP_DAILY = 'SET_TEMP_DAILY'
const SET_TEMP_CURRENT = 'SET_TEMP_CURRENT'
const SET_WIND_DAILY = 'SET_WIND_DAILY'
const SET_EXTRA_DATA_DAILY = 'SET_EXTRA_DATA_DAILY'
const SET_URL_ICON_DAILY = 'SET_URL_ICON_DAILY'
const SET_HOURLY_DATA = 'SET_HOURLY_DATA'




type TypeinitialState = {
    onLoading:boolean
    dailyTemp:{}
    pop:{}
    humidity:''
    hourlyTemp:[]
    extraDataDaily:{}
    iconDailyUrl: string
    wind:{}
    hourlyData:any
    timeZone: 0
}

let initialState:TypeinitialState = {
    onLoading: false,
    dailyTemp:{},
    pop:{},
    humidity:'',
    hourlyTemp:[],
    extraDataDaily:{},
    iconDailyUrl: '',
    wind:{},
    hourlyData:[],
    timeZone: 0
}

const weatherDailyReducer =(state = initialState, action:any)=>{

    switch(action.type) {
      
        case SET_LOADING:{
            return {
                ...state, onLoading : action.load
            }
        } 
        
        case SET_TEMP_DAILY:{
           
            return {
                ...state, 
                dailyTemp : action.temp,
                pop: action.pop,
                humidity: action.humidity,
                timeZone: action.time
            }
        } 
        case SET_TEMP_CURRENT:{
            return {
                ...state, hourlyTemp : action.arr
            }
        } 
        case SET_HOURLY_DATA:{
                let hourlyArr = action.arr.slice(1, 6).map((el:any)=>{
                    return{
                        date:el.dt,
                        temperature: el.temp,
                        icon:el.weather[0].icon,
                        pop:el.pop
                    }
                    
                })
            return {
                ...state, hourlyData : hourlyArr
            }
        } 
        case SET_EXTRA_DATA_DAILY:{
            return {
                ...state, extraDataDaily : action.obj
            }
        } 
        case SET_URL_ICON_DAILY:{
            return {
                ...state, iconDailyUrl : action.url
            }
        } 
        case SET_WIND_DAILY:{
            return {
                ...state, wind : {speed:action.speed, deg:action.deg}
            }
        } 
        
        default:
            return state
    }
    
}

export const loadingProcessing = (load:boolean) => ({ type: SET_LOADING, load})
export const getDailyWeathe = (temp:any,pop:any,humidity:any,time:any) => ({ type: SET_TEMP_DAILY, temp,pop,humidity,time})
export const getCurentWeathe = (arr:any) => ({ type: SET_TEMP_CURRENT, arr})
export const setExtraDataDaily = (obj:any) => ({ type: SET_EXTRA_DATA_DAILY, obj})
export const setUrlIconDaily = (url:any) => ({ type: SET_URL_ICON_DAILY, url})
export const setWindDaily = (speed:any,deg:any) => ({ type: SET_WIND_DAILY, speed,deg})
export const setHourlyData = (arr:any) => ({ type: SET_HOURLY_DATA, arr})



    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        console.log(response);
        
        let base = response.daily[0]
        
        dispatch(getDailyWeathe(base.temp,base.pop, base.humidity,response.timezone_offset))
        dispatch(setWindDaily(base.wind_speed,base.wind_deg))
        dispatch(setHourlyData(response.hourly))
        dispatch(setExtraDataDaily(base.weather[0]))

        dispatch(getCurentWeathe(response.daily[0]))
      
        dispatch(loadingProcessing(false))
     
        
    } catch(e){
        dispatch(loadingProcessing(true))
    }
}


export const imageDailyWeather =(icon:any)=>async (dispatch:any)=> {
    try{
        let response = await getIconImage.getI(icon)
        
        dispatch(setUrlIconDaily(response))
    }catch(e){
        
        
    }
}



 

export default weatherDailyReducer