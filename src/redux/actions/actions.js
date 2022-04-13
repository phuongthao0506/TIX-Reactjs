
import { getCarouselApi } from '../../services/QuanLyPhimService'

import { GET_CAROUSEL_API } from '../types/typesCarosel'


export const  getCarouselAction = ()=> {
 return async (dispatch) =>{
     try {
         let data = await getCarouselApi()
         dispatch({
            type:GET_CAROUSEL_API ,
            data: data.data.content})
     } catch (err) {
         console.log(err);
         
     }


 }
}