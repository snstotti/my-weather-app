import { getWeatherDaily } from '../../api/api'


const SET_LOADING = 'SET_LOADING'
const SET_TEMP_DAILY = 'SET_TEMP_DAILY'



type TypeinitialState = {
    onLoading:boolean,
    dailyTemp:{},
    
}

let initialState:TypeinitialState = {
    onLoading: false,
    dailyTemp:{},
    
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
        
        default:
            return state
    }
    
}

export const loadingProcessing = (load:boolean) => ({ type: SET_LOADING, load})
export const getDailyWeathe = (tempDaily:object) => ({ type: SET_TEMP_DAILY, tempDaily})
// 

    
export const getDailyWeather = (lat:string , lon:string) => async(dispatch:any)=>{
    
    try{
        let response = await getWeatherDaily.getDailyData(lat, lon)
        
        dispatch(getDailyWeathe(response.daily[0].temp))
        dispatch(loadingProcessing(false))
        
    } catch(e){
        dispatch(loadingProcessing(true))
        console.log('Нет картинки');
        
    }
   
}




 

export default weatherDailyReducer