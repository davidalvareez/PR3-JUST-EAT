<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <title>Modificar</title>
</head>
<body>
    <form action="{{url('modificarPut')}}" method="POST" enctype="multipart/form-data">
        @csrf
        {{method_field('PUT')}}
        <p>Nombre</p>
        <input type="text" name="nombre" value="{{$restaurante->nombre}}">
        <p>Precio</p>
        <input type="text" name="precio" value="{{$restaurante->precio}}">
        <p>Nacionalidad</p>
        <input type="text" name="nacionalidad" value="{{$restaurante->nacionalidad}}">
        <p>Tipo</p>
        <input type="text" name="tipo" value="{{$restaurante->tipo}}">
        <p>Segundo tipo</p>
        <input type="text" name="tipo2" value="{{$restaurante->tipo2}}">
        <p>Foto</p>
        <input type="file" name="foto" value="{{$restaurante->foto}}">
        <div>
            <input type="hidden" name="id" value="{{$restaurante->id}}">
            <input type="submit" name="enviar">
        </div>
    </form>
</body>
</html>