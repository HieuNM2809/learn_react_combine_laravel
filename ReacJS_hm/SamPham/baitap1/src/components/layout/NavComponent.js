import React from 'react';

class SearchComponent extends React.Component {
    render() {
        return (
            <div>
                <form className="form-inline" method="GET">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm"/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit"><i className="fa fa-search" aria-hidden="true"></i>
                                Tìm
                                kiếm</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <form method="POST">
                    <div className="form-group" style={{width: "250px"}}>
                        <label for="txtTenTK">Tên tài khoản:</label>
                        <input type="text" className="form-control" id="txtTenTK"/>
                    </div>
                    <div className="form-group">
                        <label for="txtMK">Mật khẩu:</label>
                        <input type="password" className="form-control" id="txtMK"/>
                    </div>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="chkGhiNho" checked/>
                        <label className="custom-control-label" for="chkGhiNho">Ghi nhớ tài khoản</label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-2">Đăng nhập</button><a href="#">Quên
                        mật
                        khẩu?</a>
                    <div className="dropdown-divider"></div>
                    Chưa có tài khoản? <a href="#">Đăng kí ngay</a>
                </form>
            </div>
        );
    }
}

class NavComponent extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">                 
                    <a className="navbar-brand" href="#">
                        <img src="img/logo.png" alt="Logo" style={{width: "40px"}}  />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Sản phẩm
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Apple</a>
                                    <a className="dropdown-item" href="#">Samsung</a>
                                    <a className="dropdown-item" href="#">HTC</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Tài khoản
                                </a>
                                <div className="dropdown-menu">
                                    <div className="container" >
                                        <FormComponent/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-success mr-2"><i className="fas fa-shopping-cart"></i> 2</a>
                        <SearchComponent/>
                    </div>
                </nav>
                <div style={{marginTop : "66px"}}></div>
            </>
        );
    }
}

export default NavComponent;



