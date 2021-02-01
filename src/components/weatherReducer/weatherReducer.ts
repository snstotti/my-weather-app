import {getWeather,getIconImage } from '../../api/api'

const SET_TEMP = 'SET_TEMP'
const SET_EXTRA_DATA = 'SET_EXTRA_DATA'
const SET_LCALITY = 'SET_LCALITY'
const SET_URL_IMAGE = 'SET_URL_IMAGE'
const SET_NAME_LOCALITY = 'SET_NAME_LOCALITY'
const SET_COORDINATES = 'SET_COORDINATES'
const SET_ERROR = 'SET_ERROR'


type TypeinitialState = {
    temperature: any,
    extraData: any,
    locality: any,
    imageUrl: string,
    nameLocality: string,
    onError:boolean,
    coordinates:{}
}

let initialState:TypeinitialState = {
    temperature: {},
    extraData: {},
    locality: 'Тольятти',
    imageUrl: '',
    nameLocality: '',
    onError: false,
    coordinates: {}
    
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
        case SET_COORDINATES:{
            
            return {
                ...state, coordinates : action.obj
            }
        }
        
        case SET_ERROR:{
            
            return {
                ...state, onError : action.er
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
export const getCoordinates = (obj:any) => ({ type: SET_COORDINATES, obj})
export const errorProcessing = (er:boolean) => ({ type: SET_ERROR, er})


    
export const getExtraData = (city:any) => async(dispatch:any)=>{
    
    try{
        let response = await getWeather.getExtraData(city)
        // console.log(response);
        
        
        dispatch(setExtraData(response.weather[0]))
        dispatch(setNameLocality(response.name))
        dispatch(getTempSuccess(response.main))
        dispatch(getCoordinates(response.coord))
        dispatch(errorProcessing(false))
    } catch(e){
        dispatch(errorProcessing(true))
        console.log('Нет такого города');
        
    }
    
}

export const getIconUrl = (icon:any='01n') => async(dispatch:any)=>{
    try{
        let response = await getIconImage.getI(icon)
        dispatch(setUrlImage(response))
    } catch(e){
        
        console.log('Нет Иконки');
        
    }
   
}



 

export default weatherReducer