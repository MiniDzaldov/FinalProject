// import logo from './logo.svg';
import './App.css';
import AssistsDetailsFetch from './AssistsDetailsFetch';
import AssistantDetailsFetch from './AssistantDetailsFetch';
import Navigators from './project/Navigators';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './pictures/logo.png'
import HomePage from './project/HomePage';
import BasicForm from './project/form/BasicForm';
import SearchAssistById from './project/button/SearchAssistById';
import l from './pictures/logo1.png'
import { Container, Navbar } from 'react-bootstrap';
import Nav from './project/Nav';
import Navbarr from './project/Navbarr';
import Footer from './project/Footer';


function App() {
    // const s = {"backgroundColor":"white"}
  //  const logoStyle = {'width': '8rem', 'height':'8rem'}
  //  const divStyle = {'marginTop':'2rem', 'marginLeft':'2rem'}

  return (
    <>
      {/* <div style={divStyle} ><img style={logoStyle} src ={l}></img></div> */}
      <Navbarr></Navbarr>
      <div className="App">
      <header >
      {/* <img src={logo} /> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Provider store={store}> */}
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
