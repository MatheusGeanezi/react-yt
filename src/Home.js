import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    root:{
        background: 'gray',
        height: '100vh'
    }
})

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </div>
    );
}
  
  export default Home;