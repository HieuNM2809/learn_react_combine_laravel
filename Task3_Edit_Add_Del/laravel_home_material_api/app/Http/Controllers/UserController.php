<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    protected $status_code = 200;

    public function getUser(){
        
    }
    public function postLogin(Request $request){

         // kiem tra du lieu   ( ko $this->validate dc )
         $validator  = Validator::make($request->all(), [
            "email"             =>          "required|email",
            "password"          =>          "required|min:3|max:32"
        ],[
            "email.required" => " Vui lòng nhập email",
            "email.email" => " Vui lòng nhập đúng định dạng email",
            "password.required" => " Vui lòng nhập mật khẩu",
            "password.min" => "Mật khẩu ít nhất 3 và nhiều nhất 32 ký tự",
            "password.max" => "Mật khẩu ít nhất 3 và nhiều nhất 32 ký tự",
        ]);

        if($validator->fails()) {
            return response()->json([
                "status" => "failed",
                "message" => "validation_error",
                "errors" => $validator->errors()]);
        }
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'status' => 200 ,
                "message" => "Đăng nhập thành công",
                'data' =>Auth::user(),
            ]);
        }else{
            return response()->json([
                "status" => "failed",
                "message" => "Đăng nhập thất bại"]);
        }
    }

    public function postRegister(Request $request){

         // kiem tra du lieu   ( ko $this->validate dc )
         $validator  = Validator::make($request->all(), [
            "name"              =>          "required|min:3",
            "email"             =>          "required|email|unique:users,email",
            "password"          =>          "required|min:3|max:32",
            "passwordAgain"          =>     "required|same:password",
        ],[
            "name.required" => "Vui lòng nhập tên",
            "name.min" => "Tên ít nhất 3 ký tự",
            "email.required" => " Vui lòng nhập email",
            "email.email" => " Vui lòng nhập đúng định dạng email",
            "email.unique" => "Email đã được sử dụng",
            "password.required" => " Vui lòng nhập mật khẩu",
            "password.min" => "Mật khẩu ít nhất 3 và nhiều nhất 32 ký tự",
            "password.max" => "Mật khẩu ít nhất 3 và nhiều nhất 32 ký tự",
            "passwordAgain.same" => "Nhập lại mật khẩu không đúng",
            "passwordAgain.required" => "Vui lòng nhập lại mật khẩu",
        ]);

        if($validator->fails()) {
            return response()->json([
                "status" => "failed",
                "message" => "validation_error",
                "errors" => $validator->errors()]);
        }

        // luu
        $user  = new User();
        $user->name            =  $request->name;
        $user->email           =  $request->email;
        $user->password       =   bcrypt($request->password);
        $check =  $user->save();
     
        if($check) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Đăng ký thành công", "data" => $user]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Đăng ký thật bại"]);
        }
    }

}
