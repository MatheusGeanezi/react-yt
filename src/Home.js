import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, ThemeProvider, Drawer,List,Divider,ListItem,ListItemText,ListItemIcon,Box,Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        height: '100vh'
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),

    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: '25px'
    },
    drawer: {
        width: '240px',
        flexShrink: 0,
      },
      drawerPaper: {
        width: '240px',
        borderRight: 'none'
      },
      ListItemText: {
        fontSize: '14px'
      },
    icons: {
        paddingRight: theme.spacing(5)
    },
    grow: {
        flexGrow: '1'
    },
    ListItem:{
        paddingTop: '4px',
        paddingBottom: '4px'
    }
}))

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuIcon} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.icons} color="inherit">
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit">
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit">
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer login</Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }}>
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button classes={{root: classes.ListItem}}>
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={'Inicio'} />
                            </ListItem>
                            <ListItem button classes={{root: classes.ListItem}}>
                                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={'Em alta'} />
                            </ListItem>
                            <ListItem button classes={{root: classes.ListItem}}>
                                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={'Inscrições'} />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button classes={{root: classes.ListItem}}>
                                <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={'Biblioteca'} />
                            </ListItem>
                            <ListItem button classes={{root: classes.ListItem}}>
                                <ListItemIcon>{<History />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={'Historico'} />
                            </ListItem>
                        </List>
                        <Divider />
                        <Box p={5}>
                        <Typography variant='body1'>
                                Faça login para curtir vídeos,comentar e se inscrever
                        </Typography>   
                            <Box mt={2}>
                                <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer login</Button>
                            </Box>   
                        </Box>
                        <Divider />
                    </div>
                </Drawer>
                <Box p={8}>
                   <Toolbar/>
                        <Typography variant="h5" color='textPrimary' style={{fontWeight:800}}>
                                Recomendados
                        </Typography>
                    <Grid container>
                        <Grid item>TESTE</Grid>
                        <Grid item>TESTE</Grid>
                        <Grid item>TESTE</Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default Home;