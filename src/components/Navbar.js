import React from "react";
import { makeStyles } from "tss-react/mui";
import valo6 from "./assests/valo6.svg";
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar,Button,Typography } from "@mui/material";


const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: 'flex',
      flex:1,
      cursor: "pointer",
      fontFamily: "Poppins",
      justifyContent: 'space-between',
    },
    apply: {
        color:'#A06CD5', fontSize:18, fontFamily:'Poppins' ,fontWeight:'bold' , width:100, height:40, marginLeft:'0.5rem', textTransform:'capitalize'
    },
  };
});

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <>
      <div >
        <AppBar position="static" sx={{ backgroundColor: "#E2CFEA" }}>
          <Container>
            <Toolbar >
            <Typography className={classes.root}>
              <img  src={valo6} alt="" style={{ marginTop: "0.5rem" }} />
              <div>
              <Button className={classes.apply}>Home</Button>
              <Button className={classes.apply}>Features</Button>
              <Button className={classes.apply}>Docs</Button>
              </div>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
