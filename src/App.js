import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          onClick={() => alert('hello')}
          size="large"
          style = {{
            fontSize: 12
          }} 
          variant="contained" 
          color="secondary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
