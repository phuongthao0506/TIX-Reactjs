import { postUserLogin } from "../../services/QuanLyNguoiDungService"
import { USER_LOGIN } from "../types/typesUser"
import {history} from '../../App'


export const userLogin = (userLogin)=>{
    return async (dispatch) =>{
     
        try {
            let result = await postUserLogin(userLogin)
                dispatch({
                    type: USER_LOGIN,
                    data:result.data.content
                })
                history.goBack()

                      
        } catch (error) {
            console.log(error.response.data);
            
        }

    }
}