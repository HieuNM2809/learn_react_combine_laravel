import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import Nav from '../Nav.js';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSignUp :  {
                name:'',
                email :'',
                password :'',
                passwordAgain :''
            },
            errName :'',
            errEmail :'',
            errPassword :'',
            errPasswordAgain :'',
            msg :''
        }
        
    }
    onChangehandler = (e) => {
        const { dataSignUp } = this.state;
        dataSignUp[e.target.name] = e.target.value;
        this.setState({ dataSignUp });
        // let name = e.target.name;
        // let value = e.target.value;
        // let data = {};
        // data[name] = value;
        // this.setState(data);
    }
    handleSubmit = ()=>{
        axios
        .post( `http://127.0.0.1:8000/api/register`, {
          name: this.state.dataSignUp.name,
          email: this.state.dataSignUp.email,
          password: this.state.dataSignUp.password,
          passwordAgain: this.state.dataSignUp.passwordAgain
        })
        .then((response) => {
          //   đúng 
          if (response.data.status === 200) {
            this.setState({
              msg: response.data.message,
              dataSignUp :  {
                name:'',
                email :'',
                password :'',
                passwordAgain :''
              },
              errName: '', 
              errEmail: '',
              errPassword:'', 
              errPasswordAgain: ''
            });  
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 3000);    
          } 
          // lỗi nhập 
          if (
            response.data.status === "failed" &&
            response.data.message === "validation_error"
          ) {
            this.setState({
              errName: response.data.errors.name,
              errEmail: response.data.errors.email,
              errPassword: response.data.errors.password,
              errPasswordAgain: response.data.errors.passwordAgain,
            });
          } else if (
            response.data.status === "failed"
          ) {
            this.setState({
              msg: response.data.message,
            });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    handleReset = ()=> {
        this.setState({
            dataSignUp :  {
                name:'',
                email :'',
                password :'',
                passwordAgain :''
            },
            errName :'',
            errEmail :'',
            errPassword :'',
            errPasswordAgain :'',
        });
    }
    render() {
        return (
            <>
               <Nav/>
                <Container className='container container_register' >
                    <Avatar className='container_icon' >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Tên của bạn"
                            name="name"
                            autoComplete="Tên"
                            autoFocus
                            value = {this.state.dataSignUp.name}
                            onChange = {this.onChangehandler}
                        />
                         <span className='errMsg'>{this.state.errName}</span>
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Địa chỉ Email"
                            name="email"
                            autoComplete="email"
                            value = {this.state.dataSignUp.email}
                            onChange = {this.onChangehandler}

                        />
                         <span className='errMsg'>{this.state.errEmail}</span>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password "
                            name="password"
                            autoComplete="password"
                            type='password'
                            value = {this.state.dataSignUp.password}
                            onChange = {this.onChangehandler}
                        />
                        <span className='errMsg'>{this.state.errPassword}</span>
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Nhập lại Password"
                            name="passwordAgain"
                            autoComplete="Nhập lại password"
                            type='password'
                            value = {this.state.dataSignUp.passwordAgain}
                            onChange = {this.onChangehandler}
                        />
                        <span className='errMsg'>{this.state.errPasswordAgain}</span>
                        <span className='errMsg'>{this.state.msg}</span>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="form_btn btn_submit"
                            onClick ={this.handleSubmit} 
                        >
                            Sign up 
                        </Button>
                        <Box className ='form_forgot'>
                            <Button onClick ={this.handleReset}  variant="contained"  color="default">Làm mới</Button>
                            <Link to="login" variant="body2">
                                <Button  variant="contained"  color="default">Sign in</Button>
                            </Link>
                        </Box>
                    </form>
                </Container>
            </>
        )
    }
}
