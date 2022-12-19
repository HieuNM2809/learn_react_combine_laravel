import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import './DeleteProduct.css';
import axios from 'axios';
import Nav from '../Nav.js';
  
class DeleteProduct extends Component {
    constructor(props){
        super(props);
        this.state = {msg: '', redirect:false };
    }
    handleSubmit = () => {
        axios
          .get( `http://127.0.0.1:8000/api/danhsach/xoa/${this.props.match.params.id}`)
          .then((response) => {
            //   đúng 
            if (response.data.status === 200) {
              this.setState({
                msg: response.data.message,
              });  
              setTimeout(() => {
                this.setState({ msg: "" });
                this.setState({ redirect:true});
              }, 1000);    

            } else  {
              this.setState({
                msg: response.data.message,
              });
              setTimeout(() => {
                this.setState({ msg: "" });
                this.setState({ redirect:true});
              }, 1000);
            }
          })
          .catch((error) => {
            console.log(error);
        });
    };
  render() {
      if(this.state.redirect == true){
        return  <Redirect to='/products'/>
      }
    return (
        <>
            <Nav/>
            <Container className='container container_delete' >
                <h3>Bạn có chắc chắn xóa hay không ?</h3>
                <Link to='/products'><Button className='link_delete' variant="contained" color="default">Trở về</Button></Link>
                <Button  onClick={this.handleSubmit} className='link_delete' variant="contained" color="primary">Xóa</Button>
                <h4>{this.state.msg}</h4>
            </Container>
        </>
    );
  }
}

export default DeleteProduct;

