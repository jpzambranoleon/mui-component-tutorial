import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function CheckboxExample() {
  return (
    <div>
      Test
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button 
            onClick={() => alert('hello')}
            startIcon={<SaveIcon />}
            size="large"
            style = {{
              fontSize: 12
            }}
            >
              Save
          </Button>
          <Button 
            onClick={() => alert('hello')}
            startIcon={<DeleteIcon />}
            size="large"
            style = {{
              fontSize: 12
            }}
            >
              Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
