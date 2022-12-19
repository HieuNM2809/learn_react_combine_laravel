import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import { Box, Container } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import './Nav.css';


export default class Nav extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect : false
        }
    }
    onLogoutHandler = () => {
        localStorage.clear();
        this.setState({
          redirect: true,
        });
      };
    
    render() {
        const user = JSON.parse(localStorage.getItem("userData"));
        const login = localStorage.getItem("isLoggedIn");

        // dang xuat , chuyen sang login
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/login" push={true} />;
        }
      
        return (
            <>
                <AppBar position="fixed" className='header'>
                    <Toolbar className='header_1' >
                        <Link to='/' className='header_item-logo'>
                            <Typography variant="h4" color="initial">HM</Typography>
                            <FiberNewIcon className='header__Logo' />
                        </Link>
                        <Box className='header_item-nav'>
                            <ul className='header_nav-list'>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-links'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/services'
                                        className='nav-links'
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/products'
                                        className='nav-links'
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to='/products/add_product'
                                        className='nav-links'
                                    >
                                        Add Product
                                    </Link>
                                </li>
                                <li className='nav-item' >
                                    {!login ?
                                        <Link to='/login' className='nav-item-link'>
                                            <Button variant="outlined" className='nav-item-btn' >
                                                SIGN IN
                                            </Button>
                                        </Link> :
                                        <>
                                            <i className='nav_name'>{user.name}</i>
                                            <Button onClick={this.onLogoutHandler } variant="outlined" className='nav-item-btn' >
                                                LOG OUT
                                            </Button>
                                        </>
                                    }
                                </li>

                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

