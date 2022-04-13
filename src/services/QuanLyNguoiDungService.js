import { baseService } from "./baseService";


export class QuanNguoiDungService extends baseService {
    constructor (){
        super();
    }

    // userLogin- tk, mk 
    postUserLogin = (userLogin)=>{
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,userLogin)
    }

}

export const {postUserLogin} = new QuanNguoiDungService ()
