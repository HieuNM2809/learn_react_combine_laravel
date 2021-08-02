import React, { Component } from 'react'
// link out
import Box from "@material-ui/core/Box";
import { Link} from "react-router-dom";
//custom me
import './Services.css';
import { Container, Typography } from '@material-ui/core';

export default class Services extends React.Component {
    render() {
        return (
            <>
                <Container className='container_services'>
                    <Typography variant="h1" color="initial" style={{textShadow:'1px 1px darkblue'}} >Services</Typography>
                </Container>
            </>
        )
    }
}
