import React, { Component } from 'react';

import { Image, Grid, Header, Icon, Transition  } from "semantic-ui-react";
import Dial from "../../components/Dial.jsx";
import FlareComponent from 'flare-react';
import LogoController from '../../components/landingPage/LogoController'


export default class Page1 extends Component {
    
    state= {
        visible: false
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({visible:true})
        },5000);
    }
  render() {
    return(
        <div className="firstPage">
            <Grid centered>
                <Grid.Row className='mainRow' columns='14'>
                    {/* <div className='firstpagebackdiv'></div> */}
                    <Grid.Column mobile='12' textAlign='center' className='leftMain' computer='6' >
                            <FlareComponent className="TechLogoMainPage" width={360} height={360} controller={new LogoController()} file="tcr_logo.flr"/>
                            
                            <Transition visible={this.state.visible} animation={'fade up'} duration={1000}>
                                <Header className='Title' size='medium'>Technocrats Robotics</Header>
                            </Transition>
                            <div className='arrowDown'>
                                <Icon className='arrow' color='yellow' size='huge' name='chevron down'></Icon>
                            </div>    
                        </Grid.Column>
                    <Grid.Column only='computer'  width='4'>
                        <Dial></Dial>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
    }
}