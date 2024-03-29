import logo from './logo.svg';
import './App.css';
import AssistsDetailsFetch from './AssistsDetailsFetch';
import AssistantDetailsFetch from './AssistantDetailsFetch';
import Navigators from './project/Navigators';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <a>Sari & Mini</a> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* <Provider store={store}> */}
            <BrowserRouter>
              <Navigators></Navigators>
            </BrowserRouter>

        {/* </Provider> */}
        {/* <p>AssistsDetailsFetch</p>
        <AssistsDetailsFetch></AssistsDetailsFetch>

        <p>AssistantDetailsFetch</p> */}
        {/*<AssistantDetailsFetch></AssistantDetailsFetch>*/}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
