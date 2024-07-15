import './App.css';
import Navigators from './project/files/Navigators';
import { BrowserRouter,  Routes } from 'react-router-dom';
import Navbarr from './project/files/Navbarr';
import Footer from './project/files/Footer';

function App() {
  return (
    <>
      <Navbarr/>
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
