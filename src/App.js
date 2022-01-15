import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox 
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'arial-label': 'secondary checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
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
