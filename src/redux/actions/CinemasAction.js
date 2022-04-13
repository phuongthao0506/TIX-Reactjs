import {getCinema, getDetail} from '../../services/QuanLyRapService'
import { GET_CINEMAS, GET_DETAIL } from '../types/typesCinemas'
export const getCinemaApi = ()=>{
    return async (dispatch) =>{
     
        try {
            let data = await getCinema()

            dispatch({
                type: GET_CINEMAS,
                data:data.data.content
            })
        } catch (error) {
            
        }

    }
}
export const getDetailApi = (id)=>{
    return async (dispatch) =>{
     
        try {
            let data = await getDetail(id)
       

            dispatch({
                type: GET_DETAIL,
                data:data.data.content
            })
        } catch (error) {
            
        }

    }
}