<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <title>Crear</title>
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
    <form action="{{url('crearPost')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <p>Nombre</p>
        <input type="text" name="nombre" placeholder="Introduce el nombre..." value="{{old('nombre')}}">
        @error('nombre')
        <br>
        {{$message}}
        @enderror
        <p>Precio</p>
        <input type="text" name="precio" placeholder="Introduce el precio...">
        @error('precio')
        <br>
        {{$message}}
        @enderror
        <p>Nacionalidad</p>
        <input type="text" name="nacionalidad" placeholder="Introduce la nacionalidad...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Tipo</p>
        <input type="text" name="tipo" placeholder="Introduce el primer tipo...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Segundo tipo</p>
        <input type="text" name="tipo2" placeholder="Introduce el segundo tipo...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Foto</p>
        <input type="file" name="foto">
        @error('foto')
        <br>
        {{$message}}
        @enderror
        <div>
            <input type="submit" name="enviar">
        </div>
</body>
</html>