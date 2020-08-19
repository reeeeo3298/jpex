<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class JpexController extends Controller
{
    /**
     * 
     * 初期画面表示
     */
    public function index(){
        
        $results = DB::table('t_data')
                    ->get();
        
//        dd($results);
        
        return view('main.index');
    }
    
    public function spot_data(Request $request){
        
        $date = $request->input('day');
        $area_cd = $request->input('area');
//        $results = 1;
        $results = DB::table('t_data')
                        ->where('date',$date)
                        ->where('area_cd',$area_cd)
                        ->select('price')
                        ->get();
        
        return $results;
        
    }
}
