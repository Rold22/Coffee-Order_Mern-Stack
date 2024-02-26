import React, { useState } from 'react'
import { CoffeeLeft, CoffeeRight} from '../components'
import styled from 'styled-components'
const Hero = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const handleCoffeeClick = (coffeeData) => {
    setSelectedCoffee(coffeeData);
  };

  return (
    <Wrapper>
      <div className='section'>
          <h1 className='name'>
            Menoza
        </h1>
        <h4 className='name-two'>Coffee Shop</h4>
        <div className='order'>
        </div>
        <div className='container'>
          <CoffeeLeft selectedCoffee={selectedCoffee} />
          <CoffeeRight onClickCoffee={handleCoffeeClick} />
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(to right top, #000000, #211010, #381913, #4c270d, #573900);
  .container{
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  .name{
    color: #ff9900 ;
    letter-spacing: 5px;
    text-align: center;
    margin-top: 2rem;
  }
  .name-two{
    color: #ff9900 ;
    letter-spacing: 10px;
    text-align: center;
    margin-top: 1rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 776px) {
      .container{
        display: block;
      }
    }
    @media screen and (max-width: 500px) {

    }
`

export default Hero