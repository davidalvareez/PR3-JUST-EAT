<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <title>Modificar</title>
</head>
<body>
    @if($errors->any())
    <div>
        <ul>
        @foreach($errors->all() as $error)
        <li>{{$error}}</li>
        @endforeach
        </ul>
    </div>
    @endif
    <form action="{{url('modificarPut')}}" method="POST" enctype="multipart/form-data">
        @csrf
        {{method_field('PUT')}}
        <p>Nombre</p>
        <input type="text" name="nombre" value="{{$restaurante->nombre}}">
        @error('nombre')
        <br>
        {{$message}}
        @enderror
        <p>Precio</p>
        <input type="text" name="precio" value="{{$restaurante->precio}}">
        @error('precio')
        <br>
        {{$message}}
        @enderror
        <p>Descripción</p>
        <textarea name="descripcion" rows="5" cols="30">{{$restaurante->descripcion}}</textarea>
        @error('descripcion')
        <br>
        {{$message}}
        @enderror
        <p>Nacionalidad</p>
        <input type="text" name="nacionalidad" value="{{$restaurante->nacionalidad}}">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Tipo</p>
        <input type="text" name="tipo" value="{{$restaurante->tipo}}">
        @error('tipo')
        <br>
        {{$message}}
        @enderror
        <p>Segundo tipo</p>
        <input type="text" name="tipo2" value="{{$restaurante->tipo2}}">
        @error('tipo2')
        <br>
        {{$message}}
        @enderror
        <p>Foto</p>
        <input type="file" name="foto" value="{{$restaurante->foto}}">
        <div>
            <input type="hidden" name="id" value="{{$restaurante->id}}">
            <input type="submit" name="enviar">
        </div>
    </form>
</body>
</html>