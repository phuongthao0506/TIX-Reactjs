import {Route} from 'react-router-dom'
import React from 'react'
import Header from './Layout/Header/Header';
import Home from '../../pages/Home/Home';
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel';
import Footer from './Layout/Footer/Footer';


export const HomeTemplate = (props) => {
    const {Component,...restProps} = props;
    return <Route {...restProps} render = {(propsRoute)=>{

        return <>
        <Header {...propsRoute}/>
      
      

        <Component {...propsRoute} />
        <Footer {...propsRoute} />
        </>
    
    }} />

    
}