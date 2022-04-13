import { getMovieApi } from '../../services/QuanLyPhimService'
import { GET_LIST_MOVIE } from '../types/typeListMovie'

export const getListMovie = ()=>{
    return async (dispatch) =>{
     
        try {
            let data = await getMovieApi()

            dispatch({
                type: GET_LIST_MOVIE,
                data:data.data.content
            })
        } catch (error) {
            
        }

    }
}