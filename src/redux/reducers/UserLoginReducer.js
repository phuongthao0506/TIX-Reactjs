import {USER_LOGIN} from '../types/typesUser'
import {TOKEN} from '../../util/settings/config'


let user = {}
if(localStorage.getItem(USER_LOGIN)){
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userInfo:user
}

const UserLoginReducer= (state = initialState,action) => {
    switch (action.type) {
      case USER_LOGIN : 
      const dataLogin = action.data
      console.log("🚀 ~ UserLoginReducer ~ dataLogin", dataLogin)
      
      localStorage.setItem(USER_LOGIN,JSON.stringify(dataLogin))
      localStorage.setItem(TOKEN,JSON.stringify(dataLogin.accessToken))
      return {...state,userInfo:dataLogin}

  
  
  
   
  
    default:
      return state
    }
  }
  export default UserLoginReducer
  