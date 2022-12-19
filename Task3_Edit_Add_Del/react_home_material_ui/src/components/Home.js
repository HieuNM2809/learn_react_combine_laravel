import React, { Component } from 'react'
//custom me
import Container from '@material-ui/core/Container';
import './Home.css';
import Footer from './Footer'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Nav from './Nav.js';
import axios from "axios";

class ListCart extends Component{
    constructor(props) {
        super(props);
        this.state = {
          item: [],
        };
      }
    
    componentDidMount() {
        this.getImages();
    }
    
    getImages = () => {
        axios
            .get("http://127.0.0.1:8000/api/home")
            .then((response) => {
                if (response.data.success === 200) {
                    this.setState({
                       item: response.data.data
                    });
                }
            })
            .catch((error) => {
               console.error(error);
            });
    }
    render(){
        return (
            <>
                <Box className='row' >
                    {
                          this.state.item.length > 0  ? 
                            this.state.item.map((it) => (
                                <Card className="col-4">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={ "http://127.0.0.1:8000/uploads_pro/" + it.image }
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {it.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className="container__text">
                                                {it.contents} 
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Chia sẻ 
                                        </Button>
                                        <Button size="small" color="primary">
                                            Tìm hiểu thêm
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        :<h2 className="text-danger text-center">Không có bài đăng nào</h2>
                    }
                </Box>
            </>
        );
    }
}

function Intro(){
    return(
        <Container className='container_Intro'>
           <Typography variant="h1" style={{textShadow:'1px 1px darkblue'}} color="initial">Welcome</Typography>
           <Typography variant="h5" style={{textShadow:'1px 1px darkblue'}} color="initial">To website</Typography>
        </Container>
    );
}


export default class Home extends React.Component {
    render() {
        return (
            <>
                <Nav/>
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <Intro/>
                <Container className='container-home'>
                    <Typography className='container__title' variant="h3" color="initial">Các địa điểm đẹp</Typography>
                    <ListCart/>
                </Container>
                <Footer/>
            </>
        )
    }
}


 {/* <Box className='row' >
    <Card className="col-6">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="./images/img-1.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Núi
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="container__text">
                            Núi là dạng địa hình lồi, có sườn dốc và độ cao thường lớn hơn 
                            đồi, nằm trải dài trên phạm vi nhất định. Nó được hình thành từ
                            hiện tượng uốn nếp do tác động của nội lực.
                        Theo quan niệm của các nhà nghiên cứu thì núi cao hơn đồi.
                            Theo bách khoa toàn thư Britannica, núi có chiều cao từ 500 m
                            trở lên.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Chia sẻ
                </Button>
                <Button size="small" color="primary">
                    Tìm kiểu thêm
                </Button>
            </CardActions>
    </Card>
    <Card className="col-6">
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="./images/img-2.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Đảo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="container__text">
                            Biển nói chung là một vùng nước mặn rộng lớn nối liền với các đại dương, hoặc là các hồ lớn chứa nước mặn mà không có đường thông ra đại dương một cách tự nhiên như biển Caspi, biển Chết. 
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Chia sẻ
                </Button>
                <Button size="small" color="primary">
                    Tìm hiểu thêm
                </Button>
            </CardActions>
    </Card>
</Box> */}