<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Registro;


class RestauranteController extends Controller
{
    /*LOGIN*/

    public function login(){
        return view ('login');
    }

    public function loginPost(Request $request){
        $datos= $request->except('_token','_method','register');
        $user=DB::table("tbl_usuario")->where('email','=',$datos['email'])->where('password','=',$datos['password'])->count();
        if($user==1){
            DB::table("tbl_usuario")->select('tipo')->where('email','=',$datos['email'])->where('password','=',$datos['password'])->first();
            return redirect('/mostrar');
        }
        else{
            return redirect('');
        }
        return $user;
    }

    /*REGISTRO*/

    public function registro()
    {
        return view('registro');
    }

    public function registroPost(Registro  $request){
        $datos = $request->except('_token');
        $request->validate([
            'email'=>'required|string|max:100',
            'password'=>'required|string|max:100'
        ]);
        try{
            DB::beginTransaction();
            DB::table('tbl_usuario')->insert(["email"=>$datos['email'],"password"=>$datos['password'],"tipo"=>$datos['tipo']]);
            DB::commit();
            return redirect('');
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }
}
