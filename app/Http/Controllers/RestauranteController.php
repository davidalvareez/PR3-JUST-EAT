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

    public function crear()
    {
        return view('crearPersona');
    }

    public function crearPost(PersonaCrear  $request){
        $datos = $request->except('_token');
        $request->validate([
            'nombre'=>'required|string|max:30',
            'precio'=>'required|string|max:30',
        ]);
        if($request->hasFile('foto_persona')){
            $datos['foto_persona'] = $request->file('foto_persona')->store('uploads','public');
        }else{
            $datos['foto_persona'] = NULL;
        }
        return $datos;
        try{
            DB::beginTransaction();
            $id = DB::table('tbl_persona')->insertGetId(["foto_persona"=>$datos['foto_persona'],"nombre_persona"=>$datos['nombre_persona'],"apellido_persona"=>$datos['apellido_persona'],"dni_persona"=>$datos['dni_persona'],"edad_persona"=>$datos['edad_persona']]);
            DB::table('tbl_telef')->insertGetId(["num_telf"=>$datos['num_telf'],"num_telf2"=>$datos['num_telf2'],"id_persona"=>$id]);
            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            return $e->getMessage();
        }
    }

    /* eliminar */
    public function eliminar($id){
        try {
            DB::beginTransaction();
            DB::table('tbl_restaurante')->where('id','=',$id)->delete();
            DB::commit();
        }catch(\Exception $e) {
            DB::rollback();
            return $e->getMessage();
        }
        return redirect('mostrarRestaurante');
    }
}
