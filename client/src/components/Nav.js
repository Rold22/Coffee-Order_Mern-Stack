import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import Sidebar from './Sidebar';

const Nav = () => {
   const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <Wrapper>
      <nav className='nav'>
        <div className='name-title'>
          <h1 className='main'>Menoza</h1>
          <IoMenu className='icon' onClick={toggleSidebar}/>
        </div>
        <ul className='ul' >
          <Link to="/" className='li'>
            <li className='list'>Home</li>
          </Link>
          <Link to="/about" className='li'>
            <li className='list'>About</li>
          </Link>
          <Link to="/order" className='li'>
            <li className='list'>Order</li>
          </Link>
        </ul>
      </nav>
      {showSidebar && <Sidebar closeSidebar={closeSidebar} />}
    </Wrapper>
  )
}
const Wrapper = styled.nav`
width: 100%;
height: 50px;
z-index: 100;
background-image: linear-gradient(to right top, #ff9900, #ffa800, #ffb700, #ffc600, #ffd500);
overflow: hidden;
.nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul{
  display: flex;
  gap: 2rem;
  margin-top: -10px;
  color: white;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
}
li{
  cursor: pointer;
}
.li{
  color: white;
}
.main{
  margin-left: -2rem;
}
.icon{
  display: none;
}
@media screen and (max-width: 776px) {
  .name-title{
    display: flex;
    gap:14rem;
    margin-left: 2rem;
  }
  .icon{
    margin-top: 0.75rem;
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
  .ul{
    display: none;
  }
}
 //For Mobil
    @media screen and (max-width: 350px) {
      .name-title{
        gap:3rem;
      }
    }
`

export default Nav