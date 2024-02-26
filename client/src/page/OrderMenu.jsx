import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { formatDate,formatTime } from '../utils'
import { TiDeleteOutline } from "react-icons/ti";

const OrderMenu = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/order/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/order/${id}`);
      setOrders(prevOrders => prevOrders.filter(order => order._id !== id));
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <Wrapper>
      <div className='order-container'>
        <h1 className='main'>Order List</h1>
        <div className='two-side'>
          <div className='left'>
          {/*   ORDER MENU */}
            <div className='menu'>
              <div className='list-item'>Name</div>
              <div className='list-item'>HOW MANY</div>
              <div className='list-item'>DATE</div>
              <div className='list-item'>TIME</div>
            </div>
            {/* ORDER LIST */}
            <div className='list-container'>
              <div className='move'>
                <table className='list'>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr key={order._id} className='list-items'>
                        <td className='name'>{order.name} </td>
                        <td className='db'>{order.dbNumber}</td>
                        <td className='date'>{formatDate(order.date)}</td>
                        <td className='time'>{formatTime(order.time)}</td>
                          <td><TiDeleteOutline className='delete' onClick={() => handleDelete(order._id)}/></td>
                      </tr>
                      )
                    })}
                  </tbody>
                </table>  
              </div>
            </div>
          </div>
          <div className='right'>
            <img src={require('../assets/ordercoffee.png')}
              className='img'
              alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
background-image: linear-gradient(to right top, #000000, #211010, #381913, #4c270d, #573900);
.main{
  text-align: center;
  letter-spacing: 2px;
  color: #f6a200;
  margin-top: 2rem;
}
.two-side{
  display: flex;
  justify-content: space-around;
}
.menu{
  display: flex;
  gap: 8rem;
  margin-top: 5rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  background-image: linear-gradient(to right top, #ff9900, #ffa800, #ffb700, #ffc600, #ffd500);
  padding: 15px 50px 15px 50px;
  border-radius: 5px;
}
.left{
  height: 500px;
}
.list-container{
  width: 800px;
  max-height: 400px;
  overflow-y: scroll;
  margin-top: 2rem;
  background-image: linear-gradient(to right top, #3e2707, #432a06, #492d05, #4e3004, #543302);
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: blue;
}
.list{
  width: 100%;
}
.move{
  
}
.list-items{
  display: flex;
  
}
.list td {
 /*  border: 1px solid white; */
  text-align: left;
  
}
.list tr{
  padding-top: 5px;
  padding-bottom: 5px;
}
.name{
  width: 30%;
}
.db{
  width: 5%;
  margin-left: 1.5rem;
}
.date{
  width: 20%;
  margin-left: 8.2rem;
}
.time{
  width: 10%;
  margin-left: 3rem;
}
.delete{
  color: red;
  font-size: 1rem;
  cursor: pointer;
}
@media screen and (max-width: 776px) {
  .right{
    display: none;
  }
  .menu{
    gap: 3rem;
    width: 500px;
  }
  .list-container{
    width: 450px;
    margin-left: 2rem;
  }
  .db{
    width: 2%;
  }
  .date{
    width: 18%;
    margin-left: 4rem;
}
.delete{
  margin-left: 1rem;
}
}
`
export default OrderMenu