import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Menu = () => {
    const classes = useStyles();

    return (
        <ButtonGroup aria-label="outlined primary button group" className={classes.navMenu}>
           <Button component={Link} to="/browse" variant="text" exact className={classes.navMenuItem} activeclassname={classes.active}>BROWSE</Button>
            <Button component={Link} to="/login" variant="text" className={classes.navMenuItem} activeclassname={classes.active}>Films</Button>
            <Button component={Link} to="/browse/tvshows" variant="text" className={classes.navMenuItem} activeclassname={classes.active}>TV Shows</Button>
            <Button component={Link} to="/browse/mylist" variant="text" className={classes.navMenuItem} activeclassname={classes.active}>Saved Scripts
            </Button>
        </ButtonGroup>
    );
};

const useStyles = makeStyles((theme) => ({
    navMenu: {
        flexGrow: 1,
    },
    navMenuItem :{
        '&:hover':{
            color: 'rgb(220,220,220)'
        }
    },
    active:{
        fontWeight: 700,
        color:'rgb(255, 0, 0)',
        '&:hover':{
            color: '#fff'
        }
    }
}));

export default Menu;
