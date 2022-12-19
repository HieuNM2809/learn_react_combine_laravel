import React, {Component} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {  Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Footer';
import './AddProduct.css';
import Nav from '../Nav.js';

export default class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: '',
            detail: '',
            image: '',
            errName: '',
            errPrice: '',
            errDetail: '',
            errImage: '',
            msg: '',
        };
    }
    onChangehandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
        // const { signupData } = this.state;
        // signupData[e.target.name] = e.target.value;
        // this.setState({ signupData });
    }
    onChangehandlerFile = (e) => {
        this.setState({
            image: e.target.files[0]
        })
      }
    handleReset = () =>{
        this.setState({
            msg: '',
            name: '',
            price: '',
            detail:'', 
            image: '',
            errName: '', 
            errPrice: '',
            errDetail:'', 
            errImage: ''
        });
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData() 
        data.append('name', this.state.name);
        data.append('price', this.state.price);
        data.append('price', this.state.price);
        data.append('detail', this.state.detail);
        data.append('image', this.state.image);

        axios
          .post( `http://127.0.0.1:8000/api/danhsach/them`, 
            data
          )
          .then((response) => {
            //   đúng 
            if (response.data.status === 200) {
                this.setState({
                    msg: response.data.message,
                    name: '',
                    price: '',
                    detail:'', 
                    image: '',
                    errName: '', 
                    errPrice: '',
                    errDetail:'', 
                    errImage: ''
                });  
                setTimeout(() => {
                    this.setState({ msg: "" });
                }, 3000);    
            } 
            // lỗi nhập 
            if (
            response.data.status === "failed" &&
            response.data.success === undefined
            ) {
            this.setState({
                errName: response.data.errors.name,
                errPrice: response.data.errors.price,
                errDetail: response.data.errors.detail,
                errImage: response.data.errors.image,
            });
            } else if (
            response.data.status === "failed" &&
            response.data.success === false
            ) {
                this.setState({
                    msg: response.data.message,
                });
                setTimeout(() => {
                    this.setState({ errMsg: "" });
                }, 2000);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render(){
        const login = localStorage.getItem("isLoggedIn");
        if (!login) {
          return <Redirect to="/login" />;
        }
      return (
        <div>
          <Nav/>
          <h1>Update Item</h1>
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2">
                <Link to="/products" className="btn btn-success">
                  <Button variant="outlined" color="default" style={{marginTop: '10px'}}>
                    Return
                  </Button>
                </Link>
            </div>
          </div>
           <Container className='container' style={{margin: '0 auto 20px'}}>
                <Typography component="h1" variant="h5">
                   Add Product 
                </Typography>
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data" >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onChangehandler}
                    />
                    <span className='errMsg'>{this.state.errName}</span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="price"
                        label="Price"
                        name="price"
                        autoComplete="Price"
                        value={this.state.price}
                        onChange={this.onChangehandler}
                    />
                    <span className='errMsg'>{this.state.errPrice}</span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="detail"
                        label="Detail"
                        name="detail"
                        autoComplete="Detail"
                        value={this.state.detail}
                        onChange={this.onChangehandler}
                    />
                    <span className='errMsg'>{this.state.errDetail}</span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        type='file'
                        name="image"
                        onChange={this.onChangehandlerFile}
                    />
                    <br/>
                    <span className='errMsg'>{this.state.errImage}</span> 

                    <p  className='errMsg'>{this.state.msg}</p>
                    <div style={{display:'flex'}}>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="default"
                            className="form_btn"
                            onClick={this.handleReset}
                        >
                            Làm mới 
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="form_btn"
                        >
                            Lưu 
                        </Button>
                    </div>
                </form>
            </Container>
            <Footer/>
      </div>
      )
    }
}
