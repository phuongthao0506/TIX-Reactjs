import {GET_CINEMAS,GET_DETAIL} from '../types/typesCinemas'
const initialState = {
    CinemasReducer:[],
    filmDetail:{}
}

const CinemasReducer= (state = initialState,action) => {
  switch (action.type) {
    case GET_CINEMAS:
      return {...state,CinemasReducer: action.data}
    case GET_DETAIL:
       return {...state,filmDetail: action.data}



 

  default:
    return state
  }
}
export default CinemasReducer
