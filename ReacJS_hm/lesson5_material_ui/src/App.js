import {Box, Button, Container} from '@material-ui/core';
import './App.css';
import Btn from './components/Btn.js';
import { makeStyles } from '@material-ui/core/styles';

import Home from './components/home';
import './components/home.css';

const useStyles = makeStyles((theme) => ({
  title: {
     background : 'red'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Container maxWidth="lg" style={{background:'blue'}} fixed>
          hello
      </Container>
      <Box component="div">
        hello
        <Button className={classes.title}>Hello</Button>
     
          <Btn/>
      </Box> */}


        <Home/>

    </div>
  );
}

export default App;

