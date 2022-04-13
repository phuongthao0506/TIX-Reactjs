import React, { Component } from 'react'
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css';
import Movie from "../movie/Movie"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick['slick-prev']}`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} ${styleSlick['slick-next']}`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  

export default class ListMovie extends Component {
 
  


    render() {
      let renderMovie = this.props.arrMovie.map((movie,index)=>{
        return  <Movie key={index} film= {movie}/>
      })
      
  
        const settings = {
          className: "slider variable-width",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          rows: 2,
          slidesPerRow: 1,
            variableWidth: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
          <div className="">
            <h2 className="text-red-500 text-3xl font-bold text-center " style={{textDecoration: 'underline overline'}}> PHIM  HAY   THÁNG 4</h2>
            <Slider {...settings}>
          {renderMovie}
        
          
            
            </Slider>
          </div>
        );
      }
}
