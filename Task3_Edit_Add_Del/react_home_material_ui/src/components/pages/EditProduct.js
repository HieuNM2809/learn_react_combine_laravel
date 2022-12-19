import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Footer';
import Nav from '../Nav.js';
import './EditProduct.css';


export default class EditProduct extends Component {
 
    constructor(props) {
        super(props);
        this.state = {name: '', price: '', detail:'', image: '', msg :'',
        errName: '', errPrice: '', errDetail:'', errImage: '',imageTamp:''
        };
    }
  
    // lay du lieu 
    componentDidMount(){
      axios.get(`http://127.0.0.1:8000/api/danhsach/sua/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ 
            name: response.data.name,
            price: response.data.price,
            detail: response.data.detail,
            image: response.data.image,
            imageTamp :response.data.image
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    onChangehandler = (e) => {
        // const { signupData } = this.state;
        // signupData[e.target.name] = e.target.value;
        // this.setState({ signupData });
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    }
    onChangehandlerFile = (e) => {
      this.setState({
          image: e.target.files[0]
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData() 
        data.append('name', this.state.name);
        data.append('price', this.state.price);
        data.append('price', this.state.price);
        data.append('detail', this.state.detail);
        data.append('image', this.state.image);
        
        axios
          .post( `http://127.0.0.1:8000/api/danhsach/sua/${this.props.match.params.id}`, 
            data
          )
          .then((response) => {
            //   đúng 
            if (response.data.status === 200) {
              this.setState({
                msg: response.data.message,
                errName: '', 
                errPrice: '',
                errDetail:'', 
                errImage: '', 
                imageTamp: response.data.img
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
      };
    render(){
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
                   Edit Product 
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
                        required
                        fullWidth
                        id="detail"
                        label="Detail"
                        name="detail"
                        autoComplete="Detail"
                        value={this.state.detail}
                        onChange={this.onChangehandler}
                    />
                    <span className='errMsg'>{this.state.errDetail}</span>

                    <img src={'http://127.0.0.1:8000/uploads/'+ this.state.imageTamp}  className='edit_img' />

                    <input type="file" name="image"  id="image"  onChange={this.onChangehandlerFile} />
                    <br/>
                    <span className='errMsg'>{this.state.errImage}</span>
                    <br/>
                    <p className='errMsg'>{this.state.msg}</p>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="form_btn"
                        // onClick={this.handleSubmit}
                    >
                        Lưu 
                    </Button>
                </form>
            </Container>
            <Footer/>
      </div>
      )
    }
}




// {this.props.match.params.id}

//import { useParams } from "react-router-dom";
// export default function EditProduct() {
//     let { id } = useParams();

//     return (
//         <div>
//         {id}
//         </div>
//     )
// }