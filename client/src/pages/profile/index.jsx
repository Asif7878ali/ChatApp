import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from "axios";

const Profile = () => {
  const token = Cookies.get('token');

  const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  async function verifyUser(){
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/verify/user`;
    try {
       const result  = await axios.post(Url,{ headers: header });
       console.log(result);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(()=>{
     verifyUser();
  },[]);

  return (
    <div>Profile</div>
  )
}

export default Profile