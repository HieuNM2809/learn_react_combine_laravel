<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected $status_code = 200;

    public function getDanhSach(){
        $product = Product::all();
        return response()->json($product);

    }
    public function postThem(Request $req){

        $validator  = Validator::make($req->all(), [
            "name"              =>        "required",
            "price"             =>        "required",
            "detail"             =>        "required",
            "image"             =>        "required|mimes:jpeg,png,jpg,gif,svg|max:4086"
        ],[
            "name.required" => "Vui lòng nhập tên",
            "price.required" =>"Vui lòng nhập giá",
            "detail.required" =>"Vui lòng nhập chi tiết",
            "image.required" =>"Vui lòng chọn hình ảnh",
            "image.image" => "Vui lòng chọn đúng định dạng hình hình ảnh",
            "image.mimes" =>"Vui lòng chọn định dạng jpeg,png,jpg,gif,svg ",
        ]);

        if($validator->fails()) {
            return response()->json([
                "status" => "failed",
                "message" => "validation_error",
                "errors" => $validator->errors()]);
        }

        $product  = new Product();

        $product->name       =  $req->name;
        $product->price           =  $req->price;
        $product->detail           =    $req->detail;
        
         // lay bien hinh
         $file = $req->file('image');

         //lay ten
         $name = $file->getClientOriginalName();

         //tao tên không trùng (ghep vs ngay)
         $nameKhongTrung =  date('Y_m_d_H_i_s_').$name;
         $file->move('uploads/', $nameKhongTrung);
         
        $product->image = $nameKhongTrung;

        $check =  $product->save();
     
        if($check) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Thêm thành công"]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Thêm thật bại"]);
        }
    }
    public function getXoa($id){

        $product  = Product::find($id);
        $check = $product->delete();
        if($check) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Xóa thành công"]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Xóa thật bại"]);
        }
    }
    public function postSua($id, Request $req){

        $validator  = Validator::make($req->all(), [
            "name"              =>        "required",
            "price"             =>        "required",
            "detail"              =>      "required"
        ],[
            "name.required" => "Vui lòng nhập tên",
            "price.required" =>"Vui lòng nhập giá",
            "detail.required" => "Vui lòng nhập chi tiết"
        ]);

        if($validator->fails()) {
            return response()->json([
                "status" => "failed",
                "message" => "validation_error",
                "errors" => $validator->errors()]);
        }

        $product  = Product::find($id);

        //sua hinh
        if($req->hasFile('image')){
            $validator  = Validator::make($req->all(), [
                "image"             => "required|image|mimes:jpeg,png,jpg,gif,svg|max:4086",
            ],[
                "image.required" =>"Vui lòng chọn hình ảnh",
                "image.image" => "Vui lòng chọn đúng định dạng hình hình ảnh. ",
                "image.mimes" =>"Vui lòng chọn định dạng jpeg,png,jpg,gif,svg ",
            ]);
            if($validator->fails()) {
                return response()->json([
                    "status" => "failed",
                    "message" => "validation_error",
                    "errors" => $validator->errors()]);
            }
            // lay bien hinh
            $file = $req->file('image');

            //lay ten
            $name = $file->getClientOriginalName();

            //tao tên không trùng (ghep vs ngay)
            $nameKhongTrung =  date('Y_m_d_H_i_s_').$name;
            $file->move('uploads/', $nameKhongTrung);
            
            // xoa file cu
            unlink("uploads/$product->image");
            $product->image = $nameKhongTrung;
        }

        $product->name     =  $req->name;
        $product->price    =  $req->price;
        $product->detail   =    $req->detail;

        $check =  $product->save();
     
        if($check) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Sửa thành công",'img'=>$product->image]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Sửa thật bại"]);
        }
    }
    public function getSua($id)
    {
        $item = Product::find($id);
        return response()->json($item);
    }
}


