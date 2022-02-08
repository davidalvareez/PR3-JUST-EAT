<?php

namespace App\Http\Controllers;

use App\Models\Restaurante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Registro;
use App\Http\Requests\CrearRestaurante;
use Illuminate\Support\Facades\Storage;


class RestauranteController extends Controller
{
    /*LOGIN*/

    public function inicio(){
        return view ('inicio');
    }
    
    public function mostrarRestaurante(Request $request){
        //if para que si no iniciamos sesión no podamos acceder a mostrarRestaurantes
        if ($request->session()->exists('email')) {
        //si se ha iniciado sesion mostrará todos los restaurantes
        return view('mostrarRestaurantes');
        } else {
            return redirect('../public');
        }
    }

    public function login(){
        return view ('login');
    }

    public function loginPost(Request $request){
        $datos= $request->except('_token','_method','register');
        /*validación de login*/
        $request->validate([
            'email'=>'required',
            'password'=>'required'
        ]);
        try {
        $email=$datos['email'];
        $password=md5($datos['password']);
        DB::beginTransaction();
        $users = DB::table("tbl_usuario")->where('email','=',$email)->where('password','=',$password)->count();
        $user = DB::table("tbl_usuario")->where('email','=',$email)->where('password','=',$password)->first();
        DB::commit();
        if($users == 1){
            //Establecer la sesion
            $request->session()->put('email',$request->email);
            $request->session()->put('tipouser',$user->tipo);
            return redirect('/mostrarRestaurantes');
        }else{
            //Redirigir al login
            return redirect('/login');
        }
            }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
            }
    }

    public function logout(Request $request){
        //Olvidar una sesion en especifico
            //$request->session()->forget('email');
        //Eliminar todas las variables de sesion
        $request->session()->flush();
        return redirect('/');
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
            'password'=>'required|string|min:8|max:100',
            'passwordvalidar'=>'required|same:password'
        ]);
        try{
            DB::beginTransaction();
            /*insertar datos en la base de datos*/
            DB::table('tbl_usuario')->insert(["email"=>$datos['email'],"password"=>md5($datos['password']),"passwordvalidar"=>md5($datos['passwordvalidar']),"tipo"=>$datos['tipo']]);
            DB::commit();
            return redirect('login');
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }

    //crear
    public function crear()
    {
        return view('crear');
    }

    public function crearPost(CrearRestaurante  $request){
        $datos = $request->except('_token');
        $request->validate([
            'nombre'=>'required|string|max:100',
            'precio'=>'required|string|max:100',
            'foto'=>'required|mimes:jpg,png,webp,svg',
            'descripcion'=>'required|string|max:400',
            'nacionalidad'=>'required|string|max:100',
            'tipo'=>'required|string|max:100'
        ]);
        if($request->hasFile('foto')){
            $datos['foto'] = $request->file('foto')->store('uploads','public');
        }else{
            $datos['foto'] = NULL;
        }
        try{
            DB::beginTransaction();
            DB::table('tbl_restaurante')->insert(["foto"=>$datos['foto'],"nombre"=>$datos['nombre'],"precio"=>$datos['precio'],"nacionalidad"=>$datos['nacionalidad'],"tipo"=>$datos['tipo'],"tipo2"=>$datos['tipo2']]);
            DB::commit();
            return redirect('mostrarRestaurantes');
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }

    //eliminar
    public function eliminar($id){
        try {
            DB::beginTransaction();
            DB::table('tbl_restaurante')->where('id','=',$id)->delete();
            DB::commit();
        }catch(\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }
        return redirect('mostrarRestaurantes');
    }

    //modificar
public function modificar($id){
    $restaurante=DB::table('tbl_restaurante')->select()->where('id','=',$id)->first();
    return view('modificar', compact('restaurante'));
}

public function modificarPut(Request $request){
    $datos=$request->except('_token','_method','enviar');
    $request->validate([
        'nombre'=>'required|string|max:100',
        'precio'=>'required|string|max:100',
        'descripcion'=>'required|string|max:400',
        'nacionalidad'=>'required|string|max:100',
        'tipo'=>'required|string|max:100'
    ]);
    if ($request->hasFile('foto')) {
        $foto = DB::table('tbl_restaurante')->select('foto')->where('id','=',$request['id'])->first();
        if ($foto->foto != null) {
            Storage::delete('public/'.$foto->foto);
        }
        $datos['foto'] = $request->file('foto')->store('uploads','public');
    }else{
        $foto = DB::table('tbl_restaurante')->select('foto')->where('id','=',$request['id'])->first();
        $datos['foto'] = $foto->foto;
    }
    //$datos=$request->except('_token','_method','nombre','precio','nacionalidad','tipo','tipo2','foto','id');
    try {
        DB::beginTransaction();
        DB::table('tbl_restaurante')->where('id','=',$request['id'])->update($datos);
        DB::commit();
    } catch (\Exception $e) {
        DB::rollBack();
        return $e->getMessage();
    }
    return redirect('mostrarRestaurantes');
}


    //Zona filtro

    public function leer(Request $request){
        if ($request->has('nacionalidad','filtro')) {
            $nacionalidades=DB::select('SELECT DISTINCT nacionalidad FROM `tbl_restaurante`');
            $datos = DB::table('tbl_restaurante')->select('*')->where('nacionalidad','=',$request['nacionalidad'])->where('nombre','like',$request['filtro'].'%')->get();
            return response()->json([
                'datos' => $datos,
                'nacionalidades' => $nacionalidades,
                /* 'nacion' => $request['nacionalidad'], */
            ]);
        }else{
            $nacionalidades=DB::select('SELECT DISTINCT nacionalidad FROM `tbl_restaurante`');
            $datos = DB::table('tbl_restaurante')->select('*')->where('nombre','like',$request['filtro'].'%')->get();
            return response()->json([
                'datos' => $datos,
                'nacionalidades' => $nacionalidades,
            ]);
        }
    }
}


