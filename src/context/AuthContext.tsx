import {createContext, useContext, useEffect, useState} from 'react'

export const INITIAL_USER={
    id: '',
    name :'',
    username:'',
    email:'',
    imageUrl:'',
    bio:''
};

const INITIAL_STATE ={
    user: INITIAL_USER,
    isLoading: false,
    isAuthentiated : false,
    setUser: ()=>{},
    setIsAuthenticated :()=>{},
    checkAuthUser : async()=
}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext