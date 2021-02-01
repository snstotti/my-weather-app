import { getIconImage } from '../../api/api'

const SET_HOURLY_ICON= 'SET_HOURLY_ICON'



type TypeinitialState = {
    iconHourly:String
}

let initialState:TypeinitialState = {
    iconHourly:''
}

const weatherHourlyReducer =(state = initialState, action:any)=>{

    
    switch (action.type) {

        case SET_HOURLY_ICON: {

            return {
                ...state, iconHourly: action.icon
            }
        }
       
        default:
        return state
    }

    
}



export const setUrlIconHourly = (icon:any) => ({ type: SET_HOURLY_ICON, icon})

    




export const imageHourlyWeather =(icon:any)=>async (dispatch:any)=> {
    try{
        let response = await getIconImage.getI(icon)
        
        dispatch(setUrlIconHourly(response))
    }catch(e){
        
        
    }
}


 

export default weatherHourlyReducer