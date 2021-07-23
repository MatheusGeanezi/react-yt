import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, ThemeProvider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme)=>({
    root:{
        background: theme.palette.primary.main,
        height: '100vh'
    },
    appBar : {
        boxShadow:'none'
    },
    icons:{
        paddingRight: theme.spacing(2)
    },
    grow: {
        flexGrow: '1'
    }
}))

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton  className={classes.icons} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <IconButton  className={classes.icons} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <IconButton  className={classes.icons} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <IconButton  className={classes.icons} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer loginn</Button>
                </Toolbar>
            </AppBar>

        </div>
    );
}
  
  export default Home;