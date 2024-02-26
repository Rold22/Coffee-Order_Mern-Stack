import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Sidebar = ({closeSidebar}) => {
  return (
    <Wrapper>
      <div className='sidebar'>
        <ul className='ul-centers'>
          <Link to="/"
            onClick={closeSidebar}>
            <li className='list' >Home</li>
          </Link>
          <Link to="/about"
            onClick={closeSidebar}>
            <li className='list'>About</li>
          </Link>
          <Link to="/order"
            onClick={closeSidebar}>
            <li className='list'>Order</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 50px;
background-image: linear-gradient(to right top, #ff9900, #ffa800, #ffb700, #ffc600, #ffd500);
backdrop-filter: blur(10px);
position: absolute;
z-index: 900;
margin-top: -0.5rem;
.sidebar{
  font-size: 1.5rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
}
.list{
  margin-top: 0.4rem;
  font-size: medium;
  cursor: pointer;
  color: #f6f6f6;
  
}
.list:hover{
    color: #b8780f;
  }
.ul-centers{
  padding-top: 1rem;
  display: flex;
  justify-content: center;
}

`

export default Sidebar