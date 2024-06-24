import './App.css';
import Navigators from './project/Navigators';
import { BrowserRouter,  Routes } from 'react-router-dom';
import Navbarr from './project/Navbarr';
import Footer from './project/Footer';



function App() {

  return (
    <>
      <Navbarr></Navbarr>
      <div className="App">
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
