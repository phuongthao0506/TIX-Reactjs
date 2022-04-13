import { baseService } from "./baseService";


export class QuanLyRapService extends baseService {
    constructor (){
        super();
    }

    getCinema = ()=>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`)
    }
    getDetail = (id)=>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
    
    

}

export const {getCinema,getDetail} = new QuanLyRapService ()
