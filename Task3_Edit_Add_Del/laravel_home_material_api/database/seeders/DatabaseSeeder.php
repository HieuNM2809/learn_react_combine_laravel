<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('home')->insert([
        	['name' => 'Núi', 'image'=>'hinh-1.jpg', 'contents' => 'Núi là dạng địa hình lồi, có sườn dốc và độ cao thường lớn hơn đồi, nằm trải dài trên phạm vi nhất định. Nó được hình thành từ hiện tượng uốn nếp do tác động của nội lực. Theo quan niệm của các nhà nghiên cứu thì núi cao hơn đồi. Theo bách khoa toàn thư Britannica, núi có chiều cao từ 500 m trở lên.'],
        	['name' => 'Đảo', 'image'=>'hinh-2.jpg', 'contents' => 'Biển nói chung là một vùng nước mặn rộng lớn nối liền với các đại dương, hoặc là các hồ lớn chứa nước mặn mà không có đường thông ra đại dương một cách tự nhiên như biển Caspi, biển Chết.'],
        	['name' => 'Biển', 'image'=>'hinh-3.jpg', 'contents' => 'Biển nói chung là một vùng nước mặn rộng lớn nối liền với các đại dương, hoặc là các hồ lớn chứa nước mặn mà không có đường thông ra đại dương một cách tự nhiên như biển Caspi, biển Chết.'],
        	['name' => 'Thể thao', 'image'=>'hinh-4.jpg', 'contents' => 'Thể thao là tất cả các loại hình hoạt động thể chất và trò chơi có tính chất cạnh tranh, từ đó có việc trao giải thưởng thông qua thành tích.'],
        	['name' => 'Hoang mạc', 'image'=>'hinh-8.jpg', 'contents' => 'Hoang mạc (chữ Hán: 荒漠) là vùng có lượng mưa rất ít, ít hơn lượng cần thiết để hầu hết các loại thực vật sinh trưởng, là vùng đại diện cho những khu vực có khí hậu nhiệt đới lục địa khô.']
    	]);
    }
}
