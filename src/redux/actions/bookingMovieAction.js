import { getBookingMovie,booking } from '../../services/QuanLyDatVeService'
import { GET_BOOKING_MOVIE } from '../types/typesBookingMovie'

export const getMovie = (id)=>{
    return async (dispatch) =>{
     
        try {
            let data = await getBookingMovie(id)
        

            dispatch({
                type: GET_BOOKING_MOVIE,
                data:data.data.content
            })
        } catch (error) {
            
        }

    }
}

export const infoBooking = (info)=>{
    return async (dispatch) =>{
     
        try {
            let data = await booking(info)
            console.log(444,data.data.content);
        

            // dispatch({
            //     type: GET_BOOKING_MOVIE,
            //     data:data.data.content
            // })
        } catch (error) {
            console.log(222,error);
            
        }

    }
}