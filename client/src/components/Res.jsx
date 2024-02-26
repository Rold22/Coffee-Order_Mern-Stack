import React, { useState } from 'react'
import styled from 'styled-components'
import { GiCoffeeMug } from "react-icons/gi";
import OrderForm from './OrderForm';

const Res = () => {
  const [orderOpen, setOrderOpen] = useState(false);

  const openOrderForm = () => {
    setOrderOpen(true);
  }
  const closeOrderForm= () => {
    setOrderOpen(false);
  }

  return (
    <Wrapper>
      {orderOpen && <OrderForm closeOrderForm={closeOrderForm}/>}
      <div className='reservation'>
        <button className='order' onClick={openOrderForm}>
          Order Coffee
          <GiCoffeeMug className='icon'/>
        </button>
      </div>
    </Wrapper> 
  )
}
const Wrapper = styled.div`
  .reservation {
    width: 100%;
    margin-top: 4rem;
  }
  .order{
    margin-top: 2rem;
    margin: 0 35%;
    font-size: large;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    padding: 10px 25px;
    border-radius: 5px;
    text-align: center;
    background-image: linear-gradient(to right top, #f19100, #f6a200, #f6a200, #fdc400, #ffd500);
    cursor: pointer;
  }
   .order:hover{
    transition: all 0.3s linear;
    transform: scale(1.1);
  }
  .icon{
    color: #f6a200;
    margin-left: 5px;
    background-color: black;
  }
    @media screen and (max-width: 776px) {
      .order{
        margin-left: 0 auto;
      }
    }
    @media screen and (max-width: 500px) {

    }
`

export default Res

