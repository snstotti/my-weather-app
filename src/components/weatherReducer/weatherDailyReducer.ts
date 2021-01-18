import { getWeatherDaily } from '../../api/api'


const SET_LOADING = 'SET_LOADING'
const SET_TEMP_DAILY = 'SET_TEMP_DAILY'
const SET_TEMP_HOURLY = 'SET_TEMP_HOURLY'
const SET_ICON_MORN = 'SET_ICON_MORN'




type TypeinitialState = {
    onLoading:boolean,
    dailyTemp:{},
    hourlyTemp:[],
    iconMorn:[],
    
}

let initialState:TypeinitialState = {
    onLoading: false,
    dailyTemp:{},
    hourlyTemp:[],
    iconMorn:[],
}

const weatherDailyReducer =(state = initialState, action:any)=>{

    switch(action.type) {
      
        case SET_LOADING:{
            return {
                ...state, onLoading : action.load
            }
        } 
       
        
        case SET_TEMP_HOURLY:{
            return {
                ...state, hourlyTemp : action.tempHourly
            }
        } 
        case SET_ICON_MORN:{
                let obj =  {icon:action.iconMorn, temp:action.temp, title:action.title, humidity:action.humidity }
            return {
                ...state,
                 iconMorn : [...state.iconMorn, obj]
            }
        } 
    
        
        default:
            return state
    }
    
}

export const loadingProcessing = (load:boolean) => ({ type: SET_LOADING, load})
export const getDailyWeathe = (tempDaily:any) => ({ type: SET_TEMP_DAILY, tempDaily})
export const getHourlyWeathe = (tempHourly:Array<Object>) => ({ type: SET_TEMP_HOURLY, tempHourly})
export const setMornWeathe = (iconMorn:string,temp:any,title:string,humidity:any) => ({ type: SET_ICON_MORN, iconMorn,temp,title,humidity})



    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        console.log(response);
        dispatch(getDailyWeathe(response.daily[0].temp.morn))

        response.hourly.map((el:any)=>{
            const hour = (dates:any) =>{
                let d = new Date(dates * 1000)
                return `${d.getDate()}${d.getDay()}${d.getHours()}` 
            }
            const dates = (num:any)=>{
                let d = new Date()
                return `${d.getDate()}${d.getDay()}${num}`
                
            }
            let humidity = el.humidity
            let morn:any = response.daily[0].temp.morn
            let day:any = response.daily[0].temp.day
            let eve :any= response.daily[0].temp.eve
            let night:any = response.daily[0].temp.night
            let icon:any = el.weather[0].icon
            if(hour(el.dt) === dates(8) ){
                dispatch(setMornWeathe(icon,morn,'Утро',humidity))
            }else if(hour(el.dt) === dates(11)){
                  dispatch(setMornWeathe(icon,day,'День',humidity))
            }else if(hour(el.dt) === dates(18)){
                  dispatch(setMornWeathe(icon,eve,'Вечер',humidity))
            }else if(hour(el.dt) === dates(23)){
                dispatch(setMornWeathe(icon,night,'Ночь',humidity))
            }
            return icon
        })
        
        dispatch(getHourlyWeathe(response.hourly))
        dispatch(loadingProcessing(false))
        
    } catch(e){
        dispatch(loadingProcessing(true))
    }
}






 

export default weatherDailyReducer