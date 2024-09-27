import React from 'react'
import { FaCommenting, FaBars, FaSearch } from 'react-icons/fa';

const ContactContainer = () => {
  return (
    <div className='relative md:w-[35vw] xl:w-[20vw] border-black border-r-[1px] w-full'>
     <section className="left">
      <div className="profile">
        <img 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1089577/user.jpg" 
          alt="User Profile" 
        />
        <div className="icons">
          <FaCommenting size="1.5em" />
          <FaBars size="1.5em" />
        </div>
      </div>
      <div className="wrap-search">
        <div className="search">
          <FaSearch />
          <input 
            type="text" 
            className="input-search" 
            placeholder="Suchen oder neuen Chat beginnen" 
          />
        </div>
      </div>
      <div className="contact-list"></div>
    </section>

    </div>
  )
}

export default ContactContainer

