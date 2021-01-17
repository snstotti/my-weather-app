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
       
        case SET_TEMP_DAILY:{
            return {
                ...state, dailyTemp : action.tempDaily
            }
        } 
        case SET_TEMP_HOURLY:{
            return {
                ...state, hourlyTemp : action.tempHourly
            }
        } 
        case SET_ICON_MORN:{
            return {
                ...state,
                
                 iconMorn : [...state.iconMorn, action.iconMorn]
            }
        } 
    
        
        default:
            return state
    }
    
}

export const loadingProcessing = (load:boolean) => ({ type: SET_LOADING, load})
export const getDailyWeathe = (tempDaily:object) => ({ type: SET_TEMP_DAILY, tempDaily})
export const getHourlyWeathe = (tempHourly:Array<Object>) => ({ type: SET_TEMP_HOURLY, tempHourly})
export const setMornWeathe = (iconMorn:string) => ({ type: SET_ICON_MORN, iconMorn})



    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        console.log(response);
        dispatch(getDailyWeathe(response.daily[0].temp))
        response.hourly.map((el:any)=>{
            let icon = el.weather[0].icon
            if(el.dt === 1610946000 ){
                  dispatch(setMornWeathe(icon))
            }else if(el.dt === 1610964000){
                  dispatch(setMornWeathe(icon))
            }else if(el.dt === 1610982000){
                  dispatch(setMornWeathe(icon))
            }else if(el.dt === 1610917200){
                dispatch(setMornWeathe(icon))
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