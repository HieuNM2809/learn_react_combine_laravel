import React, { Component } from 'react'
// link out
//custom me
import './Services.css';
import { Container, Typography } from '@material-ui/core';
import Nav from './Nav.js';
import Footer from './Footer.js';

export default class Services extends React.Component {
    render() {
        return (
            <>  
                <Nav/>
                <Container className='container_services'>
                    <Typography variant="h1" color="initial" style={{textShadow:'1px 1px darkblue'}} >Services</Typography>
                </Container>
                <Footer/>
            </>
        )
    }
}
