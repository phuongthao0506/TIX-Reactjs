import React,{useEffect} from 'react'
import { Carousel } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/actions';
import './HomeCarousel.css';
const contentStyle = {
  
    height: '480px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'red',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',

  };

export default function HomeCarousel() {



  let dispatch = useDispatch()
useEffect(() => {
  dispatch(getCarouselAction())

},[])



    let {arrImg} = useSelector( state => state.CarouselReducer)

    const renderCarouse = arrImg.map((img,index) =>{
        return  <div key={index}>
        <div style={{...contentStyle, backgroundImage:`url(${img.hinhAnh})`}}>
            <img src="{img.hinhAnh}" className="w-full opacity-0" alt="123" />
        </div>
    </div>
    })
  return (
    <Carousel effect="fade"  style={{width:'100%',padding:0,margin:0}}
     >
   {renderCarouse}
   
</Carousel>
  )
}
