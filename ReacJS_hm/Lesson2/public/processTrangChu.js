// Component
// Component lồng
// Props
// Props children
// even onclick

class LopHoc extends React.Component{
    render(){
      return (
        <div>
            <h1 className = "mauVang"> {this.props.tenLop} - {this.props.giangVien} - {this.props.children}</h1>
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
        <LopHoc tenLop="Lop 11" giangVien="Mr B">Children-2</LopHoc>
    </div>
, document.getElementById("trangChu"));



