import { BOOKING, GET_BOOKING_MOVIE } from "../types/typesBookingMovie"


const initialState = {

    arrCinema: {
        thongTinPhim: {},
        danhSachGhe: [],      
    },
    danhSachGheDangDat: []
}

const BookingMovie = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKING_MOVIE:
            return { ...state, arrCinema: action.data }
        case BOOKING:

        let gheDangDatUpdate  = [...state.danhSachGheDangDat]
            let index = gheDangDatUpdate.findIndex( ghe => ghe.maGhe === action.data.maGhe)
            if(index !== -1){
                gheDangDatUpdate.splice(index, 1)
            }else{
                gheDangDatUpdate.push(action.data)
            }   
            return { ...state,danhSachGheDangDat:gheDangDatUpdate }
        default:
            return { ...state }
    }
}

export default BookingMovie
