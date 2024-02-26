import React from 'react'
import styled from 'styled-components'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'
const Footer = () => {
  return (
    <Wrapper>
      <div className='footer'>
        <div className='icons-container'>
          <BiLogoFacebook className='icon'/>
          <BiLogoInstagram className='icon' />
          <BiLogoTwitter className='icon' />
        </div>
        <div className='copy'
        >&copy; Copyright 2023, All Rights Reserved</div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
height: 110px;
  z-index: 100;
  background-image: linear-gradient(to right top, #ff9900, #ffa800, #ffb700, #ffc600, #ffd500);
  overflow: hidden;
  .icons-container{
    display: flex;
    justify-content: center;
    font-size: 1rem;
    gap:4rem;
  }
  .icon{
    margin-top: 1rem;
    padding: 5px;
    height: 40px;
    width: 40px;
    background: #ff8d02ff;
    backdrop-filter: blur(20px);
    border-radius: 50%;
    cursor: pointer;
    color: white;
  }
  .icon:hover{
    background:#ff9100b8;
  }
  .copy{
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: #ffffff;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 776px) {
    .icons-container{
    gap:1rem;
  }
  }
`


export default Footer