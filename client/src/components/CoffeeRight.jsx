import React, { useState } from 'react'
import styled from 'styled-components'
import { coffee } from '../page/FakeData'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Res from './Res';

const CoffeeRight = ({ onClickCoffee }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // eslint-disable-next-line
  const [scrollStep, setScrollStep] = useState(200); 
  const handleNext = () => {
    setScrollPosition((prevPosition) =>
      prevPosition + scrollStep >= coffee.length * scrollStep ? 0 : prevPosition + scrollStep
    );
  };

  const handlePrev = () => {
    setScrollPosition((prevPosition) =>
      prevPosition - scrollStep < 0 ? (coffee.length - 1) * scrollStep : prevPosition - scrollStep
    );
  };

  return (
    <Wrapper>
      <div className='coffee-container'>
        <div className='section'>
          <div className='box'
          >
          {coffee.map((coff, index) => {
            const { img, id, } = coff;
            return (
                <img
                  key={id}
                  src={img}
                  alt=""
                  className='img'
                  style={{ transform: `translateX(-${scrollPosition}px)` }}
                  onClick={() => onClickCoffee(coff)}
                />
            );
          })}
            <div className='icons'>
              <MdArrowBackIosNew className='icon'  onClick={handlePrev}/>
              <MdArrowForwardIos className='icon'  onClick={handleNext}/>
            </div>
          </div>
            <Res/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  .section{
    margin-top: 5rem;
    
  }
  .icons{
    display: flex;
    margin-left: 1rem;
    gap: 38rem;
    font-size: 2rem;
    position: absolute;
    top:45%;
  }
  .icon{
    background-color: #ff8400f0;
    border-radius: 50%;
    color: #000000f0;
    padding: 2px;
    cursor: pointer;
  }
  .img{
    padding-left: 1rem;
    margin: auto 0;
    min-width: 300px;
    height: 350px;
    object-fit: cover/center;
    cursor: pointer;
  }
.box{
  position: relative;
  overflow: hidden;
  display: flex;
  width: 700px;
  height: 400px;
  border: none;
  border-radius: 5px;
  border: 2px solid #121212ff;
  background-color: #121212ff ;
}
@media screen and (max-width: 776px) {
    .box{
      width: 450px;
      height: 400px;
      margin-left: 1rem;
    }
    .icons{
      gap: 22rem;
    }
  }
`

export default CoffeeRight
