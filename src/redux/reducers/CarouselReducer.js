import { GET_CAROUSEL_API } from "../types/typesCarosel"

const initialState = {
  
 arrImg: [
    
]}

const  CarouselReducer= (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL_API:
      return {...state,arrImg: action.data}

  default:
    return {...state}
  }
}

export default CarouselReducer
 