import React, { useState,Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Tabs } from 'antd';
import moment from 'moment';
const { TabPane } = Tabs;
export default function HomeMenu(props) {
    let [state, setState] = useState({ tabPosition: 'left', })
    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    let tabPosition = state.tabPosition;
    let renderCinemas = props.Cinemas.map((cinema, index) => {
        let { tabPosition } = state;
        return <TabPane tab={<img src={cinema.logo} className="rounded-full" width="50" alt='' />} key={index}>
            <Tabs tabPosition={tabPosition}>
            {cinema.lstCumRap.map((cumRap,index) => {
                return <TabPane tab={
                    <div style={{ width: '300px', display: 'flex' }} >
                        <img src={cinema.logo} width="50" /> <br />
                        <div className="text-left ml-2">
                            {cumRap.tenCumRap}
                            <p className="text-red-200">Chi tiết</p>
                        </div>
                    </div>
                }
                    key={index}>
                         {cumRap.danhSachPhim.slice(0, 4).map((phim,index)=>{
                             return <Fragment key={index}>
                             <div className="my-5" >
                                 <div style={{ display: 'flex' }}>
                                     <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                     <div className="ml-2">
                                         <h1 className="text-xl text-green-700" >{phim.tenPhim}</h1>
                                         <p>{cumRap.diaChi}</p>
                                         <div className="grid grid-cols-5 gap-2">
                                             {phim.lstLichChieuTheoPhim?.slice(0, 5).map((lichChieu, index) => {
                                                 return <>
                                                 <NavLink className=" text-green-400 border-r-2 border-gray-200" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                     {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A') } 
                                                 </NavLink> </>
                                                 
                                             })}
                                         </div>
                                     </div>


                                 </div>

                             </div>
                             <hr />
                         </Fragment>

                         })}
                        
                        
                        
                        
                         </TabPane>

            })}
            Content of Tab {index}
            </Tabs>
        </TabPane>
    })
    return (

        <>
           <h2 className="text-blue-500 text-3xl font-bold text-center " style={{textDecoration: 'underline overline'}}> LỊCH CHIẾU CÁC CỤM RẠP </h2>

            <Tabs tabPosition={tabPosition}>
                {renderCinemas}
            </Tabs>
        </>
    )
}
