import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ListMovie from '../../components/movie/ListMovie'
import Movie from '../../components/movie/Movie'
import { getCinemaApi } from '../../redux/actions/CinemasAction'
import { getListMovie } from '../../redux/actions/ListMovieAction'
import { getCinema } from '../../services/QuanLyRapService'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {
let dispatch = useDispatch()
 

useEffect (() => {
   
  dispatch(getListMovie())
     
  dispatch(getCinemaApi())
 },[])
  const {arrMovie} = useSelector(state=>state.MovieReducer)
  const {CinemasReducer} = useSelector(state=>state.CinemasReducer)
 
 

  
  return (
    
    <div>
      <HomeCarousel/>
 

      <section className="text-gray-600 body-font" >
        <div className="container px-5 py-5 mx-auto" >
        <ListMovie arrMovie={arrMovie}/>
         
        </div>
      </section>


      <div className="mx-36">
        <HomeMenu Cinemas={CinemasReducer} />

      </div>
    </div>
  )
}
