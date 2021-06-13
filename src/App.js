import './App.css';
import Form from './components/form.js';
import Disclaimer from './components/disclaimer.js';
import Message from './components/message.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Disclaimer/>
        <Form/>
        <Message/>
      </header>
      <footer className="App-footer">&copy; Copyright 2021 |
        <a href="https://diegonunez.dev">
          Diego Nunez
        </a>
      </footer>
    </div>
  );
}

export default App;
