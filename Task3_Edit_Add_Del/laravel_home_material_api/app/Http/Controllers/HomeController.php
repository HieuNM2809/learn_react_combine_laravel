<?php

namespace App\Http\Controllers;
use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getHome(){
        $data =  Home::all();
        return response()
               ->json([
                   "data" => $data, 
                   "success" => 200]);
    }
}
