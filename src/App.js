import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField 
            variant="filled"
            color="secondary"
            type="email"
            label="Email"
            placeholder="test@test.com"
          />
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
    </ThemeProvider>
  );
}

export default App;
