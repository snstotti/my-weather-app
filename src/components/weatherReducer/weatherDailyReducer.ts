import { getWeatherDaily } from '../../api/api'


const SET_LOADING = 'SET_LOADING'
const SET_TEMP_DAILY = 'SET_TEMP_DAILY'
const SET_TEMP_HOURLY = 'SET_TEMP_HOURLY'
const SET_ICON_MORN = 'SET_ICON_MORN'




type TypeinitialState = {
    onLoading:boolean,
    dailyTemp:[],
    hourlyTemp:[],
    iconMorn:[],
    
}

let initialState:TypeinitialState = {
    onLoading: false,
    dailyTemp:[],
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
            let obj = {icon:action.icon,title:action.title,pop:action.pop}
            return {
                ...state, dailyTemp : [...state.dailyTemp, obj]
            }
        } 
        case SET_TEMP_HOURLY:{
            return {
                ...state, hourlyTemp : action.temp
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
export const getDailyWeathe = (icon:string,title:any,pop:any) => ({ type: SET_TEMP_DAILY, icon,title,pop})
export const getHourlyWeathe = (temp:any) => ({ type: SET_TEMP_HOURLY, temp})
export const setMornWeathe = (iconMorn:string,temp:any,title:string,humidity:any,) => ({ type: SET_ICON_MORN, iconMorn,temp,title,humidity})



    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        console.log(response);
        let base = response.daily[0]
        let title = [{title:"Утро"},{title:"День"},{title:"Вечер"},{title:"Ночь"}]
        let bas = title.map((e:any)=>Object.assign({}, e, base.temp))
        // dispatch(getDailyWeathe(base.weather[0].icon,title,base.pop))
        dispatch(getHourlyWeathe(bas))
      
        
        // dispatch(getHourlyWeathe(response.hourly))
        dispatch(loadingProcessing(false))
        
    } catch(e){
        dispatch(loadingProcessing(true))
    }
}






 

export default weatherDailyReducer