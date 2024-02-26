import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { IoIosClose } from "react-icons/io";
import axios from 'axios'

const OrderForm = ({ closeOrderForm }) => {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('')
  const [dbNumber, setDbNumber] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  
  const fetchOrders = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/api/order/');
      setOrders(resp.data)
    } catch (err) {
      console.log('Error fetching orders:',err);
    }
  }
  useEffect(() => {
    fetchOrders()
  },[])

const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/order/', {
        name,
        dbNumber,
        date,
        time,
      });
      setOrders((prevOrders) => [...prevOrders, response.data]);
      setName('');
      setDbNumber('');
      setDate(null);
      setTime(null);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <Wrapper>
      <div className='order-form'>
        <h3 className='main'>COFFEE ORDER</h3>
        <IoIosClose className='close' onClick={closeOrderForm}/>
        <form className='form-control'>
          <label>Name</label>
          <br/>
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          <br />
            <label>how many</label>
          <br />
            <input 
            type="text"
            size={1}
            style={{ textAlign: 'center' }}
              pattern="[0-9]*"
              maxLength="2"
              value={dbNumber}
              onChange={(e) => {
                // Only Number
                const inputValue = e.target.value.replace(/\D/g, '');

                // Just 2 numbers are allowed
                const truncatedValue = inputValue.slice(0, 2);

                // Status update
                setDbNumber(truncatedValue);
              }} 
            />
          <br />
            <label>Date</label>
          <br />
          <Calendar
            className="custom-calendar"
            value={date}
              onChange={(e) => setDate(e.value)}
              dateFormat="dd/mm/yy" />
          <br />
            <label>Time</label>
          <br />
          <Calendar
            value={time}
            className='time'
            onChange={(e) => setTime(e.value)} timeOnly />
          <br />
          <button onClick={createOrder} className='btn'>Create Order</button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  /* left: 23.5%; */
  top: 10%;
  display: grid;
  margin-left: -60%;
  z-index: 100;
  .custom-calendar {
  
}
  .main{
    margin-top: 1.5rem;
    color: #fdd300;
  }
  .close{
    position: absolute;
    top: 10px;
    margin-left: 20rem;
    font-size: 2.5rem;
    color: black;
    color: #ff0000;
    cursor: pointer;
  }
  .order-form{
  text-align: center;
  display: grid;
  justify-items: center;
  margin: 0 50%;
  width: 400px;
  height: 400px;
  background-color: #1a1a1a;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.737);
  
  }
  .form-control,.label{
    font-size: 1rem;
    color: #fdc400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-transform: uppercase;
  }
  input{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.95rem;
    text-align: center;
    border: none;
    background-color: transparent;
    margin-bottom: 1rem;
    border-bottom: 1px solid #f19100;
    color: white;
    outline: none;
  }
  .btn{
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: medium;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    border: #f6a200;
    padding: 10px 25px;
    border-radius: 5px;
    text-align: center;
    background-image: linear-gradient(to right top, #f19100, #f6a200, #f6a200, #fdc400, #ffd500);
    cursor: pointer;
  }
  .btn:hover{
    transition: all 0.3s linear;
    transform: scale(0.9);
  }
  @media screen and (max-width: 776px) {
    margin-top: -4.5rem;
    margin-left: -34%;
  @media screen and (max-width: 500px) {

    }
  }

`

export default OrderForm