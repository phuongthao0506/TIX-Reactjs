import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Movie(props) {
  let {film} = props
 
  return (

    <div className=" m-2 p-2 h-full bg-gray-100 bg-opacity-75   rounded-lg overflow-hidden text-center relative">
      <img src={film.hinhAnh} alt={film.tenPhim} className=" w-full rounded-lg" style={{ height: '300px' }} />
      <h4 className="title-font text-lg font-medium text-gray-900 mb-3 h-12">{film.tenPhim}</h4>
      
      <NavLink  to={`/detail/${film.maPhim}`} className="bg-red-500 hover:text-black text-white font-bold py-2 px-4 rounded w-full">
Đặt Vé
</NavLink>
     
    </div>

  )
}
