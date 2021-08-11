import React from 'react'
import { useState,useEffect,useContext } from 'react'
import imglogin from '../assets/log.jpg'
import { AuthContext } from '../context/authContext'


export default function LoginView() {

    const {signIn} = useContext(AuthContext)


    return (
        <div className="h-100 row">
            <div className="col-sm-12 col-md-6">
                <img src={imglogin} style={{width:'100%',height:'100%',objectFit:'cover'}} alt='imagen login' />
            </div>
            <div className="col-sm-12 col-md-6">
                <h2>Ingresa</h2>
                <button className='btn btn-danger btn-lg' onClick={signIn}>
                    <i className='fab fa-google me-2'>Ingresa con Google</i>
                </button>
            </div>
        </div>
    )
}
