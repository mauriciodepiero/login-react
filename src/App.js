import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/scss/bootstrap";
import {table, button, container, modal, modalbody, modalheader, formgroup, modalfooter} from 'reactstrap';
import { Button } from 'reactstrap';

class app extends

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
