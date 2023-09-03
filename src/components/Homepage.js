import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Container, Toolbar, Typography, Grid} from "@mui/material";
import axios from "axios";
import "./Homepage.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const useStyles = makeStyles()((theme) => {
  return {
    head: {
      fontFamily: "Poppins",
      color: "#A06CD5",
      fontWeight: "bold",
      fontSize: 42,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginLeft: "5rem",
    },
    hd:{
      backgroundImage:`url('./group.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      
    },
  };
});

const Homepage = () => {
  const { classes } = useStyles();

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(response => {
        setAgents(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching agents:', error);
      });
  }, []);

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((data) => {
        // Filter out one of the "Sova" agents based on display name
        const agentInfo = data.data.filter((agent) => agent.displayName !== 'Sova').map((agent) => ({
          name: agent.displayName,
          iconUrl: agent.displayIcon,
        }));
        setCard(agentInfo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Configuration for the AliceCarousel
  const carouselConfig = {
    items: 4,
    responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 1024: { items: 4 } },
    dotsDisabled: true,
    buttonsDisabled: false,
    mouseTracking:true,
        infinite:true,
        autoPlayInterval:1000,
        animationDuration:1500,
        disableButtonsControls:true,
       
  };
  return (
    <div style={{ backgroundColor: "#E2CFEA",  width:'100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Container>
            <Toolbar>
              <Typography
                className={classes.head}
                style={{ paddingTop: "4rem" }}
              >
                Get updates of your favorite Valorant agents!
              </Typography>
            </Toolbar>
            <Toolbar>
              <Typography
                className={classes.head}
                style={{
                  paddingTop: "1rem",
                  color: "white",
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                An extensive descriptive data containing web app containing data
                of most in-game valo agents, items, assets and more!
              </Typography>
            </Toolbar>
            <Toolbar>
              <Typography
                className={classes.head}
                style={{ marginTop: "4.5rem", fontSize: 34, marginBottom:'2rem' }}
              >
                Select your agent! 
              </Typography>
              <br />
            
            </Toolbar>
            <div className="ggsss" style={{marginLeft:'5.5rem', color:'#5e3fb0', fontFamily:'Poppins', fontWeight:'600', textAlign:'center', marginRight:'2rem'}}>
            <AliceCarousel {...carouselConfig}  > 
        {card.map((agent, index) => (
          <div key={index} className="agent-card" style={{cursor:'pointer'}}>
            <img src={agent.iconUrl} alt={`${agent.name} Icon`} className="agent-image-1" height="90"/>
            <p className="agent-name">{agent.name}</p>
          </div>
        ))}
      </AliceCarousel>
      </div>
          </Container>
          
        </Grid>
        <Grid item xs={6} className={classes.hd} >
        
      <AliceCarousel
      style={{alignItems:'center', justifyContent:'center', display:'flex', }}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlayInterval={1000}
        items={agents.map(agent => (
          <div key={agent.uuid} className="agent-slide">
            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              height="680"
              className="agent-image"
            />
          </div>
        ))}
      />
    
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
