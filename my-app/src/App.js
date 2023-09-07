import './App.css';
import { Route, Routes } from "react-router-dom";
// import Heropage from './components/Heropage';
// import Experience from './components/Experience';
// import Navbar from './components/Navbar';
// import ProjectCards from './components/projectCards';
// import Contactme from './components/Contactme';
// import formcontact from '../src/'
// import navbar from './components/Navbar'
import Greeneking from './page/Greeneking'
import BristolCarPark from './page/BristolCarPark'
import Mainpage from './page/Mainpage'

function App() {
  return (
    <div className="App">
    <Routes>
          <Route path="/BristolCarPark" element={<BristolCarPark />} />
          <Route path="/Greeneking" element={<Greeneking />} />
          <Route path="/" element={<Mainpage/>} />
     </Routes>
      

   
     
    </div>
  );
}

export default App;
