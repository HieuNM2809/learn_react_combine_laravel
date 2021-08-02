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
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    render() {
        return (
            <>
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
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="password"
                        />
                        <FormControlLabel className='form_remember'
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="form_btn"
                        >
                            Sign In
                        </Button>
                        <Box className ='form_forgot'>
                            <Link to='forgot-password' variant="body2">
                                Quên mật khẩu?
                            </Link>
                            <Link to="sign-up" variant="body2">
                                Đăng ký
                            </Link>
                        </Box>
                    </form>
                </Container>
            </>
        )
    }
}
export default Login;




