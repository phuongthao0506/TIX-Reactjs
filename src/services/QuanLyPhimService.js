import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {
    constructor (){
        super();
    }

    getCarouselApi = ()=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    getMovieApi = ()=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`)
    }

}

export const {getCarouselApi,getMovieApi} = new QuanLyPhimService ()
