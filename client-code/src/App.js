import './App.css';
import Navigators from './project/Navigators';
import { BrowserRouter,  Routes } from 'react-router-dom';
import Navbarr from './project/Navbarr';
import Footer from './project/Footer';
import BB from './project/BB'
import B from './project/B';


function App() {

  return (
    <>
      <Navbarr></Navbarr>
      <div className="App">
        {/* <BB></BB> */}
        {/* <B></B> */}
      <header >
            <BrowserRouter>
            <Routes> 
            </Routes>
              <Navigators></Navigators>
            </BrowserRouter>
      </header>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
