import {getWeather} from '../../api/api'

const SET_TEMP = 'SET_TEMP'
const SET_EXTRA_DATA = 'SET_EXTRA_DATA'

type TypeinitialState = {
    temperature: any,
    extraData: any
}

let initialState:TypeinitialState = {
    temperature: {},
    extraData: {}
}

const weatherReducer =(state = initialState, action:any)=>{

    switch(action.type) {
      
        case SET_TEMP:{
            
            return {
                ...state, temperature : action.obj
            }
        }
        case SET_EXTRA_DATA:{
            
            return {
                ...state, extraData : action.objData
            }
        }
        
        default:
            return state
    }
    
}

export const getTempSuccess = (obj:any) => ({ type: SET_TEMP, obj})
export const setExtraData = (objData:any) => ({ type: SET_EXTRA_DATA, objData})

export const getTemp = (city:any) => async(dispatch:any)=>{
    let response = await getWeather.getTemp(city)
    dispatch(getTempSuccess(response))
}
export const getData = (city:any) => async(dispatch:any)=>{
    let response = await getWeather.getExtraData(city)
    dispatch(setExtraData(response))
}
 

export default weatherReducer