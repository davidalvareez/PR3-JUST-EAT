<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Registro;


class RestauranteController extends Controller
{
    /*LOGIN*/

    public function inicio(){
        return view ('inicio');
    }

    public function login(){
        return view ('login');
    }

    public function mostrarRestaurante(){
        $listaRestaurantes = DB::table('tbl_restaurante')->get();
        return view('mostrarRestaurantes', compact('listaRestaurantes'));
    }

    public function loginPost(Request $request){
        $datos= $request->except('_token','_method','register');
        /*validación de login*/
        $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);
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
        /*validación registro de usuarios*/
        $request->validate([
            'email'=>'required|unique:tbl_usuario,email|string|max:100',
            'password'=>'required|string|min:8|max:100'
        ]);
        try{
            DB::beginTransaction();
            /*insertar datos en la base de datos*/
            DB::table('tbl_usuario')->insert(["email"=>$datos['email'],"password"=>$datos['password'],"tipo"=>$datos['tipo']]);
            DB::commit();
            /*?>
            <script>alert("Usuario registrado")</script>
            <?php*/ 
            return redirect('');
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }
}
