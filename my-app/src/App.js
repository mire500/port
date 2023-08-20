import logo from './logo.svg';
import './App.css';
import Heropage from './components/Heropage';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import ProjectCards from './components/projectCards';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      <div class="relative  column-2 sm:flex ">
        <div className="fixed col-1 w-96 ">
         <Heropage />
        </div>
        <div className="ml-96 col-2 sm:py-48"><ProjectCards/> 
        <Experience />
        <Contactme/>
        </div>
      </div>
    
   
   
     
    </div>
  );
}

export default App;
