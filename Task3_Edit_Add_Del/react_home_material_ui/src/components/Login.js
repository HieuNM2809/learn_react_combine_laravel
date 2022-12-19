import React, { Component } from 'react';
//custom me
import './Login.css';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email :'',
            password :'',

            errEmail :'',
            errPassword :'',
            msg :'',
            redirect:false
        }
    }
    onChangehandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    }
    onClickSubmid = ()=>{
        axios
            .post( `http://127.0.0.1:8000/api/login`, {
                email: this.state.email,
                password: this.state.password,
            })
            .then((response) => {
                if (response.data.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", JSON.stringify(response.data.data));
                    this.setState({
                        msg: response.data.message,
                        email :'',
                        password :'',
                        errEmail :'',
                        errPassword :'',
                        redirect: true,
                    });      
                }
                if (
                response.data.status === "failed" &&
                response.data.message === "validation_error"
                ) {
                    this.setState({
                        msg:'',
                        errEmail: response.data.errors.email,
                        errPassword: response.data.errors.password,
                    });
                } 
                else if ( response.data.status === "failed") {
                    this.setState({
                        msg: response.data.message,
                        email :'',
                        password :'',
                        errEmail: '',
                        errPassword: '',
                    });
                // setTimeout(() => {
                //     this.setState({ errMsg: "" });
                // }, 2000);
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        if(this.state.redirect == true){
            return <Redirect to='/' />
        }
         // nếu chưa đăng nhập
         const login = localStorage.getItem("isLoggedIn");
         if (login) {
           return <Redirect to="/" />;
         }
        return (
            <>
                <Nav/>
                <Container className='container'>
                    <Avatar className='container_icon' >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Địa chỉ Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.onChangehandler}
                        />
                        <span className='errMsg'>{this.state.errEmail}</span>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                            value={this.state.password}
                            type='password'
                            onChange={this.onChangehandler}
                        />
                        <span className='errMsg'>{this.state.errPassword}</span>
                        <span className='errMsg'>{this.state.msg}</span>

                        <FormControlLabel className='form_remember'
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="form_btn"
                            onClick ={this.onClickSubmid}
                        >
                            Sign In
                        </Button>
                        <Box className ='form_forgot'>
                            <Link to='forgot-password' variant="body2">
                               Forgot Password?
                            </Link>
                            <Link to="sign-up" variant="body2">
                                Resgister
                            </Link>
                        </Box>
                    </form>
                </Container>
            </>
        )
    }
}
export default Login;




