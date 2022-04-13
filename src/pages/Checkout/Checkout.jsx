import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { booking, getMovie, infoBooking } from '../../redux/actions/bookingMovieAction'
import { CloseOutlined } from '@ant-design/icons'
import { bookingInfo } from '../../_core/models/bookingInfo'
import Swal from "sweetalert2";  
import './Checkout.css'
import { BOOKING } from '../../redux/types/typesBookingMovie'
import _ from 'lodash'
import { Route ,Redirect} from 'react-router-dom'
import { history } from '../../App'


export default function Checkout(props) {
  const { userInfo } = useSelector(state => state.UserLoginReducer)

  const dispatch = useDispatch()
  const { arrCinema, danhSachGheDangDat } = useSelector(state => state.BookingMovie)

  useEffect(() => {
    dispatch(getMovie(props.match.params.id))
  }, [])
  const { thongTinPhim, danhSachGhe } = arrCinema
  let HandleClick = ()=> {  
    Swal.fire({  
      title: 'ĐẶT VÉ THÀNH CÔNG ',  
      confirmButtonText: 'OK',  
      html: `<div class="mx-4">
      <table class="table text-left" style="font-size: 15px;text-align: left;">
          <tr>
              <th>Phim :  </th>
              <td> ${thongTinPhim.tenPhim}</td>
          </tr>
          <tr>
              <th>SDT: </th>
              <td>  ${userInfo.soDT}</td>
          </tr>
          <tr>
              <th>Email: </th>
              <td> ${userInfo.email} </td>
          </tr>
          <tr>
              <th>Địa điểm: </th>
              <td>   ${thongTinPhim.tenCumRap}
              </td>
          </tr>
          <tr>
              <th>Ngày chiếu: </th>
              <td class="text-primary"> ${thongTinPhim.ngayChieu} - ${thongTinPhim.gioChieu}</td>
          </tr>
          <tr>
          
      </tr>
      </table>
      </div>`,  
    }).then((result) => {
      
      if (result.isConfirmed) {
     history.push("/home")
      } 
    })
  } 
  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
      let classGheDaDat = ghe.daDat ? 'gheDaDat' : ''
      let classGheDangDat = '';
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
      if (indexGheDD != -1) {
        classGheDaDat = 'gheDangDat';
      }


      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe  ${classGheVip} ${classGheDaDat}  ${classGheDangDat} text-center`} key={index}
          onClick={() => {
            dispatch({
              type: BOOKING,
              data: ghe
            })
          }}

        >

          {ghe.daDat ? <CloseOutlined /> : ghe.stt}

        </button>

        {(index + 1) % 16 === 0 ? <br /> : ''}

      </Fragment>


    })
  }
  return (
    <div className=" min-h-screen m-10"  >
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-9 w-full text-center">
          <div className="bg-black w-full h-5 "></div>
          <h3 className="text-gray-400 text-center text-4xl"> SCREEN </h3>

          {renderSeats()}

          <hr />


        </div>
        <div className="col-span-3">

          <h3 className="text-green-400 text-center text-4xl">
            {thongTinPhim.tenPhim}

          </h3>
          <hr />
          <h3 className="text-xl mt-2"> Thành Tiền: {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} VND</h3>
          <p>Địa điểm:{thongTinPhim.tenCumRap} </p>
          <p>Ngày chiếu:{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-full">
              <span className="text-red-400 text-lg"> Số ghế:
                {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                  return <span key={index} className="text-green-500 text-xl"> {gheDD.stt} |</span>
                })}


              </span>
            </div>


          </div>
          <hr />
          <div className="my-5">
            <i>Email: </i>
            {userInfo.email}

          </div>
          <hr />
          <div className="my-5">
            <i>SDT: </i>
            {userInfo.soDT}
          </div>
          <hr />

          <div className="bg-green-500 text-white w-full text-center py-1 font-bold text-2xl cursor-pointer"
            onClick={() => {
              const info = new bookingInfo()
              info.maLichChieu = props.match.params.id
              info.danhSachVe = danhSachGheDangDat
              console.log(111, info);
              {HandleClick()}
             

            }}
          >
            ĐẶT VÉ
          </div>
          <div className="grid grid-cols-4 gap-1">
            <span className="ghe"> </span> 
            <div>Ghế chưa đặt  </div>
            <div className=" ghe gheVip" ></div>
            <div>Ghế VIP  </div>
             <div className="ghe gheDaDat"></div>
             <div>Ghế đã đặt  </div>
            <div className="ghe gheDangDat"></div>
            <div>Ghế bạn chọn   </div>
          </div>



        </div>

      </div>
    </div >
  )
}
