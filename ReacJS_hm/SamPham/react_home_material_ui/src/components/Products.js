import React, { Component } from 'react'
// link out
import Button from "@material-ui/core/Button";
import { Link} from "react-router-dom";
//custom me
import './Products.css';
import { Container, Typography } from '@material-ui/core';

export default class Products extends React.Component {
    render() {
        return (
            <>
                <Container className='container_products'>
                    <Typography variant="h1" color="initial" style={{textShadow:'1px 1px darkblue'}}>Products</Typography>
                </Container>
            </>
        )
    }
}
