//==lesson 2
// Component
// Component lồng
// Props
// Props children
// even onclick

//==lesson 3
// State 

class LopHoc extends React.Component{
    constructor(props) {
      super(props);
      this.state = {soLuong: "12"};
    }
    render(){
      return (
        <div>
            <h1 className = "mauVang"> {this.props.tenLop} - {this.props.giangVien} - {this.props.children}</h1>
            
            <p>So luong la : {this.state.soLuong}</p>
            <SinhVien></SinhVien>
        </div>
      );
    }
};
class SinhVien extends React.Component{
   
    themHocSinh(){
        alert('Thành công');
    }
    render(){
      return (
          <div>
            <p>Minh Hieu </p>
            <button onClick={() => this.themHocSinh()}>Thêm</button>
          </div>
      );
    }
};

ReactDOM.render( 
    <div>
        <LopHoc tenLop="Lop 12" giangVien="Mr A">Children-1</LopHoc>
    </div>
, document.getElementById("trangChu"));



