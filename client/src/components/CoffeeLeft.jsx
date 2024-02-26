import React from 'react'
import styled from 'styled-components'
const CoffeeLeft = ({ selectedCoffee }) => {
  return (
    <Wrapper>
      <div className='section'>
        <div className='coffee'>
           <div className='img-container'>
  {selectedCoffee ? (
    <img
      src={selectedCoffee.img}
      className='img'
      alt=""
    />
  ) : (
    <img
      src={require('../assets/Espresso.jpg')}
      className='img'
      alt=""
    />
  )}
</div>
<h2 className='name-text'>{selectedCoffee ? selectedCoffee.name : 'Espresso'}</h2>
<p className='text'>{selectedCoffee ? selectedCoffee.text : "Strong, concentrated coffee typically served in a small cup, usually prepared with a single shot."}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
height: 100%;
overflow-x: hidden;
.coffee{
margin-left: 10rem;
margin-top: 5rem;

}
.img{
  border-radius: 5px;
  border: 2px solid #121212ff;
  box-shadow: 0px 0px 10px 5px rgba(248, 121, 3, 0.737);
  width: 350px;
  height: 400px;
  object-fit: cover/center;
}
.name-text{
  color: white;
  letter-spacing: 4px;
  margin-top: 1rem;
}
.text{
  color: white;
  width: 350px;
  letter-spacing: 1px;
  word-wrap: break-word;
}
  @media screen and (max-width: 776px) {
    .coffee{
      margin-left: 4rem;
    }
  }

`

export default CoffeeLeft