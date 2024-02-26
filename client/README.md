import React, { useState } from 'react';

const OrderForm = () => {
const [orders, setOrders] = useState([]);
const [name, setName] = useState('');
const [dbNumber, setDbNumber] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');

const createOrder = () => {
// Validációk és adatok ellenőrzése itt...

    // Rendelés létrehozása és hozzáadása az állapothoz
    const newOrder = {
      id: orders.length + 1, // Általában az id-t a szerver állítaná elő, de most egyszerűség kedvéért egyszerű számláló
      name,
      dbNumber,
      date,
      time,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);

    // Űrlap mezők törlése
    setName('');
    setDbNumber('');
    setDate('');
    setTime('');

};

return (
<div>
<h2>Create Order</h2>
<div>
<label>Name:</label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
</div>
<div>
<label>DB Number:</label>
<input type="text" value={dbNumber} onChange={(e) => setDbNumber(e.target.value)} />
</div>
<div>
<label>Date:</label>
<input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
</div>
<div>
<label>Time:</label>
<input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
</div>
<button onClick={createOrder}>Create Order</button>
</div>
);
};

const OrderMenu = ({ orders }) => {
return (
<div>
<h2>All Orders</h2>
<ul>
{orders.map((order) => (
<li key={order.id}>
<strong>{order.name}</strong> - DB Number: {order.dbNumber}, Date: {order.date}, Time: {order.time}
</li>
))}
</ul>
</div>
);
};

const App = () => {
const [orders, setOrders] = useState([]);

return (
<div>
<OrderForm setOrders={setOrders} orders={orders} />
<OrderMenu orders={orders} />
</div>
);
};

export default App;
