import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Route } from 'react-router'
import Header from './Components/Header'

const ProtectedRoute = (props) => {

    const authTokenValeFromCookies=Cookies.get("auth_token")
    console.log({authTokenValeFromCookies})

    if(!authTokenValeFromCookies){
        return <Navigate to="/login"/>
    }

    return (
        <>
        <Header/>
        {props.element}
        </>
    )
}

export default ProtectedRoute