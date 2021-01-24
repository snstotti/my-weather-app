import { getWeatherDaily } from '../../api/api'


const SET_LOADING = 'SET_LOADING'
const SET_TEMP_DAILY = 'SET_TEMP_DAILY'
const SET_TEMP_HOURLY = 'SET_TEMP_HOURLY'
const SET_ICON_MORN = 'SET_ICON_MORN'




type TypeinitialState = {
    onLoading:boolean,
    dailyTemp:{},
    pop:{},
    hourlyTemp:[],
    weatherByTime:any
    
}

let initialState:TypeinitialState = {
    onLoading: false,
    dailyTemp:{},
    pop:{},
    hourlyTemp:[],
    weatherByTime:{m:'',d:'',e:'',n:''}
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
                ...state, dailyTemp : action.temp ,pop: action.pop
            }
        } 
        case SET_TEMP_HOURLY:{
            return {
                ...state, hourlyTemp : action.arr
            }
        } 
        case SET_ICON_MORN:{
                let hourlyWeather = action.icon.map((el:any)=>{
                    let date = new Date()
                    let dateWeather:any = new Date(el.dt*1000)
                    let dateFromRequest = `${dateWeather.getDay()}${dateWeather.getDate()}${dateWeather.getHours()}`
                    const curentDate =(num:any)=>{
                        return`${date.getDay()}${date.getDate()}${num}`
                    }
                    let time = state.weatherByTime
                    let icon = el.weather[0].icon 
                    if(dateFromRequest === curentDate(6)){return time.m = icon}
                    if(dateFromRequest === curentDate(11)){return time.d = icon}
                    if(dateFromRequest === curentDate(17)){return time.e = icon}
                    if(dateFromRequest === curentDate(22)){return time.n = icon}
                    return null
                })
                 
            return {
                ...state,
                weatherByTime:[...state.weatherByTime, ...hourlyWeather.filter((elem:any)=>elem)]
            }
        } 
    
        
        default:
            return state
    }
    
}

export const loadingProcessing = (load:boolean) => ({ type: SET_LOADING, load})
export const getDailyWeathe = (temp:any,pop:any) => ({ type: SET_TEMP_DAILY, temp,pop})
export const getHourlyWeathe = (arr:any) => ({ type: SET_TEMP_HOURLY, arr})
export const setMornWeathe = (icon:any) => ({ type: SET_ICON_MORN, icon})



    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        console.log(response);
        
        let base = response.daily[0]
        
        dispatch(getDailyWeathe(base.temp,base.pop))
        dispatch(setMornWeathe(response.hourly))
        

        // dispatch(getDailyWeathe(base.weather[0].icon,title,base.pop))
        dispatch(getHourlyWeathe(base))
      
        
        // dispatch(getHourlyWeathe(response.hourly))
        dispatch(loadingProcessing(false))
        
        // let iconWeather = response.hourly.map((el:any)=>{
        //     let date = new Date()
        //     let dateWeather:any = el.dt*1000
            
        //     let curentDate = `${date.getDay()}${date.getDate()}`
        //     let dateFromRequest = `${dateWeather.getDay()}${dateWeather.getDate()}`
            
        //     return `${dateFromRequest}/${curentDate}`
        //     // if(curentDate === dateFromRequest){
        //     //    return 'Yaaahuuuuu'
        //     // }
        //     // return 'fuck'
        // })
        
        
        
       
        
    } catch(e){
        dispatch(loadingProcessing(true))
    }
}






 

export default weatherDailyReducer