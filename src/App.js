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
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

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
  typography: {
    h2: {
      fontSize: 36,
    }
  },
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
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
            </Grid>

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
      </Container>
    </ThemeProvider>
  );
}

export default App;
