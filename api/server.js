//ENV CONFIG
require('dotenv').config();
require('express-async-errors');

// Express
const express = require('express')
const app = express()

// Extra
const cors = require('cors')

//Routers
const orderRouter = require('./routes/orderRoutes');
//DB
const connectDB = require('./db/connect')

//Middleware
  app.use(cors())
  app.use(express.json())
// Router

app.use('/api/order', orderRouter)

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port,() => console.log(`Server is listening on port ${port}...`))
  }
  catch (err) {
    console.log(err);
    
  }
}
start()
