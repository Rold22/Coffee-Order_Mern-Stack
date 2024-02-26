import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Nav } from "./components";
import { Footer, Hero, OrderMenu } from "./page";
import About from './page/About';

function App() {
  return (
    <>
    <div className="App">
      <Router>
          <Nav/>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About/>} />
            <Route path='/order' element={<OrderMenu/>} />
          </Routes>
          <Footer/>
      </Router>
    </div> 
    </>
  );
}

export default App;
