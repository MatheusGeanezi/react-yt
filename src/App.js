import logo from './logo.svg';
import Home from './Home.js'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
