import {combineReducers,createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import MovieReducer from './reducers/MovieReducer'
import CinemasReducer from './reducers/CinemasReducer'
import UserLoginReducer from './reducers/UserLoginReducer'
import BookingMovie from './reducers/BookingMovie'
const rootReducer = combineReducers({
  CarouselReducer,
  MovieReducer,
  CinemasReducer,
  UserLoginReducer,
  BookingMovie

})
const store = createStore(rootReducer,applyMiddleware(reduxThunk))
export default store