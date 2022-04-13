import { Route ,Redirect} from 'react-router-dom'
import React from 'react'
import {USER_LOGIN} from '../../util/settings/config'



export const CheckoutTemplate = (props) => {
    const { Component, ...restProps } = props;

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to ="/login"/>
    }
    return <Route {...restProps} render={(propsRoute) => {
        return <>
          <Component {...propsRoute} />
        </>
    }} />


}