import logo from './logo.svg';
import Home from './Home.js'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

function App() {
  const theme = createMuiTheme({
    palette:{
      primary:{
        main:'#f44336'
      },
      secondary:{
        main: '#3f51b5'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
