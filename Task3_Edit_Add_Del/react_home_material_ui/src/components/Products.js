import React, { Component } from 'react'
// link out
//custom me
import './Products.css';
import dateFormat from 'dateformat';
import { Container, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Footer from './Footer';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Nav from './Nav.js';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ''};
    }
    componentDidMount(){
        axios
            .get('http://127.0.0.1:8000/api/danhsach')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
         if(this.state.items instanceof Array){   // Nếu nó là array thì chạy 
            return this.state.items.map(
                function(object){
                    return (
                        <TableRow key={object.name}>
                            <TableCell component="th" scope="row">{object.id}</TableCell>
                            <TableCell component="th" scope="row">{object.name}</TableCell>
                            <TableCell align="right">{object.price}</TableCell>
                            <TableCell align="right">{object.detail}</TableCell>
                            <TableCell align="right">
                                <img src={'http://127.0.0.1:8000/uploads/'+ object.image}  className='table_img' />
                            </TableCell>
                            <TableCell align="right">
                                { dateFormat(object.created_at, "dd-mm-yyyy")}
                            </TableCell>
                            <TableCell align="right">
                              <Link to={"products/delete/" + object.id}><Button variant="contained" color="default">Xóa</Button></Link>
                            </TableCell>
                            <TableCell align="right">
                               <Link to={"products/edit/" + object.id}><Button variant="contained" color="primary">Sửa</Button></Link>
                            </TableCell>
                        </TableRow>
                        
                    );
                }  
            );      
        }
    }
    render() {
        // nếu chưa đăng nhập
        const login = localStorage.getItem("isLoggedIn");
        if (!login) {
          return <Redirect to="/login" />;
        }
        return (
            <>
               <Nav/>
                <Container className='container_products'>
                    <Typography variant="h1" color="initial" style={{ textShadow: '1px 1px darkblue' }}>Products</Typography>
                </Container>
                <TableContainer className="TableContainer" component={Paper}>
                    <Table className="" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Detail</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Xóa</TableCell>
                                <TableCell align="right">Sửa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody> 
                           {this.tabRow()}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Footer />
            </>
        );
    }
}

export default Product;


