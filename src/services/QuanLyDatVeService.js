import { bookingInfo } from "../_core/models/bookingInfo";
import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {
    constructor (){
        super();
    }

    // userLogin- tk, mk 
    getBookingMovie = (id)=>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
    }
    booking = (info = new bookingInfo ) =>{
        return this.post('/api/QuanLyDatVe/DatVe',info);

    }

}

export const {getBookingMovie,booking} = new QuanLyDatVeService ()
