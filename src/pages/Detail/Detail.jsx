import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { Tabs } from 'antd';
import { getDetailApi } from '../../redux/actions/CinemasAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function Detail(props) {
  const { filmDetail } = useSelector(state => state.CinemasReducer)

  let dispatch = useDispatch()
  useEffect(() => {
    // lấy param  
    let { id } = props.match.params
    dispatch(getDetailApi(id))


  }, [])
  return (
    <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh', backgroundRepeat: 'no-repeat' }}>

      <CustomCard
        style={{ paddingTop: 150, minHeight: '100vh' }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={18} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px

      >
        <div className="grid grid-cols-4  ">

          <div className=" col-start-2 col-end-3 " >
            <img src={filmDetail.hinhAnh} className="w-full"  alt='' style={{height:'400px'}} />

          </div>
          <div className=" col-start-3 col-span-2 container">
            <h1 className=" text-3xl text-white "> {filmDetail.tenPhim} </h1>
            <p className="text-lg text-white ">Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
            <h1 className=" text-lg text-white "> Nội dung Phim :  <span className=" text-sm text-white ">{filmDetail.moTa} </span></h1>
            <h1 className=" text-lg text-white "> Trạng thái:  <span className=" text-sm text-white ">Full HD, Vietsub </span></h1>
            <h1 className=" text-lg text-white "> Quốc gia:  <span className=" text-sm text-white ">Hàn Quốc </span></h1>
            <h1 className=" text-lg text-white "> Diễn viên:  <span className=" text-sm text-white ">Ahn Hyo Seop, Kim Se Jeong, Kim Min Kyu, Seol In Ah </span></h1>
            <h1 className=" text-lg text-white "> Lượt xem:  <span className=" text-sm text-white ">931 views</span></h1>
            <h1 className=" text-lg text-white "> Thể loại:  <span className=" text-sm text-white ">Hài hước, tình cảm..</span></h1>


          </div>
        </div>


        <div className="my-5 container  bg-white  " >
          <Tabs defaultActiveKey="1" centered >
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div >
                <Tabs tabPosition={'left'} >
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return <TabPane
                      tab={<div className="flex flex-row items-center justify-center">
                        <img src={htr.logo} className="rounded-full w-full" style={{ width: 50 }} />
                        <div className="text-center ml-2">
                          {htr.tenHeThongRap}
                        </div>
                      </div>}
                      key={index}>
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return <div className="mt-5" key={index}>
                          <div className="flex flex-row">
                            <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} />
                            <div className="ml-2">
                              <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                              <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                            </div>
                          </div>
                          <div className="thong-tin-lich-chieu grid grid-cols-4">
                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                              return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                          </div>
                        </div>
                      })}



                    </TabPane>
                  })}


                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
            Phần 2 Fantastic Beasts: The Crimes Of Grindelwald vẫn ăn khách nhưng doanh thu sút giảm hẳn so với phần 1 Fantastic Beasts And Where To Find Them. Fantastic Beasts 3 sẽ là phép thử quan trọng để nhà sản xuất quyết định tương lai loạt phim 5 phần này. Khi bạn thân cũ kiêm kẻ thù Grindelwald tuyên bố khai chiến với Muggle, phù thủy vĩ đại Albus Dumbledore phải nhờ Newt và bạn bè hỗ trợ chống lại.  Phim mới Fantastic Beasts: The Secrets Of Dumbledore dự kiến ra rạp chiếu phim từ 08.04.2022.  Xem thêm tại: https://www.galaxycine.vn/dat-ve/fantastic-beasts-the-secrets-of-dumbledore

Xem thêm tại: https://www.galaxycine.vn/dat-ve/fantastic-beasts-the-secrets-of-dumbledore
            </TabPane>
            <TabPane tab="Giá vé" key="3" style={{ minHeight: 300 }}>
           
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  )
}
