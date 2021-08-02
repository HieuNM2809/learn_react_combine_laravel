import React, { Component } from 'react'
//custom me
import Container from '@material-ui/core/Container';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {Link}  from 'react-router-dom';

function ListCart(){
    return (
        <>
            <Box className='row' >
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
            </Box>
            <Box className='row' >
                <Card className="col-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="./images/img-3.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Biển
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
                <Card className="col-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="./images/img-4.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Thể thao
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className="container__text">
                                hể thao là tất cả các loại hình hoạt động thể chất và trò chơi có tính chất cạnh tranh, từ đó có việc trao giải thưởng thông qua thành tích. 
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
                <Card className="col-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="./images/img-8.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Hoang mạc
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className="container__text">
                                Hoang mạc (chữ Hán: 荒漠) là vùng có lượng mưa rất ít, ít hơn lượng cần thiết để hầu hết các loại thực vật sinh trưởng, là vùng đại diện cho những khu vực có khí hậu nhiệt đới lục địa khô. 
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
            </Box>
        </>
    );
}
function Intro(){
    return(
        <Container className='container_Intro'>
           <Typography variant="h1" style={{textShadow:'1px 1px darkblue'}} color="initial">Welcome</Typography>
           <Typography variant="h5" style={{textShadow:'1px 1px darkblue'}} color="initial">To website</Typography>
        </Container>
    );
}
function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-text'>
           Nhập email để đăng ký nhận những thông tin hữu ích về HM.
          </p>
          <div className='input-areas'>
            <form className='form-email'>
                <input type='text' placeholder='Email' className='form-txt'/>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="nav-item-btn"
                >
                    Gửi
                </Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Về chúng tôi</h2>
              <Link to='/sign-up'>Tuyển dụng</Link>
              <Link to='/'>Điều khoản</Link>
              <Link to='/'>Nhà dầu tư</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Liên hệ </h2>
              <Link to='/'>Liên hệ</Link>
              <Link to='/'>Ủng hộ</Link>
              <Link to='/'>Tài trợ</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Mạng xã hội</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default class Home extends React.Component {
    render() {
        return (
            <>
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
