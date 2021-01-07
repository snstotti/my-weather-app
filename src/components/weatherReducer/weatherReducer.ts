import {getWeather,getIconImage} from '../../api/api'

const SET_TEMP = 'SET_TEMP'
const SET_EXTRA_DATA = 'SET_EXTRA_DATA'
const SET_LCALITY = 'SET_LCALITY'
const SET_URL_IMAGE = 'SET_URL_IMAGE'
const SET_NAME_LOCALITY = 'SET_NAME_LOCALITY'

type TypeinitialState = {
    temperature: any,
    extraData: any,
    locality: any,
    imageUrl: string,
    nameLocality: string
}

let initialState:TypeinitialState = {
    temperature: {},
    extraData: {},
    locality: 'Тольятти',
    imageUrl: '',
    nameLocality: ''
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
        case SET_LCALITY:{
            
            return {
                ...state, locality : action.locality
            }
        }
        case SET_URL_IMAGE:{
            
            return {
                ...state, imageUrl : action.url
            }
        }
        case SET_NAME_LOCALITY:{
            
            return {
                ...state, nameLocality : action.name
            }
        }
        
        default:
            return state
    }
    
}

export const getTempSuccess = (obj:any) => ({ type: SET_TEMP, obj})
export const setExtraData = (objData:any) => ({ type: SET_EXTRA_DATA, objData})
export const setLocality = (locality:any) => ({ type: SET_LCALITY, locality})
export const setUrlImage = (url:any) => ({ type: SET_URL_IMAGE, url})
export const setNameLocality = (name:any) => ({ type: SET_NAME_LOCALITY, name})


export const getTemp = (city:any) => async(dispatch:any)=>{
    let response = await getWeather.getTemp(city)
    dispatch(getTempSuccess(response))
}
export const getExtraData = (city:any) => async(dispatch:any)=>{
    let response = await getWeather.getExtraData(city)
    // console.log(response);
    dispatch(setExtraData(response))
}
export const getName = (city:any) => async(dispatch:any)=>{
    let response = await getWeather.getNameLocality(city)
    // console.log(response);
    dispatch(setNameLocality(response))
}
export const getIconUrl = (icon:any='01n') => async(dispatch:any)=>{
    let response = await getIconImage.getI(icon)
    dispatch(setUrlImage(response))
}


 

export default weatherReducer