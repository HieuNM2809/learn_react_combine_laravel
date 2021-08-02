var express =require("express");
var app =express();
app.use(express.static("public"));   // chỉ đến tài nguyên ở public
app.set("view engine", "ejs");       // kiểu file là ejs
app.set("views", "./views");         // chỉ đến mục views 
app.listen(3000);                    //  máy ảo cổng 3000 


// route
app.get("/", function (req, res) {
    res.render("trangChu");
});
