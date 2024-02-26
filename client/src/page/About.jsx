import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
const About = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h1 className='main'>About</h1>
        <div className='section'>
          <div className='left'>
            <h2 className='shop'>Menoza Coffee Shop</h2>
            <h4 className='h4'>Open Hours</h4>
            <p>Monday - Friday</p>
            <p>9AM - 7PM</p>
            <p>Saturday</p>
            <p>9AM - 5PM</p>
            <p>Sunday</p>
            <p>Close</p>
            <div className='loc'>
              <MdLocationOn className='icon'/>
              <p className='info'>790 7th Ave, New York, NY 10019</p>
            </div>
            <div className='loc'>
              <IoIosPhonePortrait  className='icon'/>
              <p className='info'>347-222-2222</p>
            </div>
          </div>
          <div className='right'>
            <div style={{ width: '100%' }}>
              <iframe
                className='map'
                width="400px"
                height="450"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=790%207th%20Ave,%20New%20York,%20NY%2010019+(Menoza)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Google Map"
              >
                <a href="https://www.gps.ie/">gps vehicle tracker</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(to right top, #000000, #211010, #381913, #4c270d, #573900);
  .main{
    margin-top: 2rem;
    text-align: center;
    color: #ff9900;
    margin-bottom: 2rem;
  }
  .section{
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
  }
  .shop{
    color: #ff9900;
  }
  p{
    padding-top: 5px;
    color: white;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }
  .h4{
    margin-top: 1.5rem;
    text-decoration: underline;
    color:#ff9a02;
  }
  .loc{
    margin-top: 2rem;
    display: flex;
  }
  .icon{
    margin-left: -0.5rem;
    font-size: 2rem;
    color: #fdd300;
  }
  .info{
    margin-left: 1rem;
  }
  .map{
    border-radius: 2px;
    border: 2px solid #ffee00ff;
    box-shadow: 0px 0px 10px 5px rgba(248, 215, 3, 0.737);
  }
    @media screen and (max-width: 776px) {
      .section{
        display: block;
        margin-left: 2.5rem;
      }
      .right{
        margin-top: 2rem;
      }
    }
    @media screen and (max-width: 500px) {

    }

`

export default About