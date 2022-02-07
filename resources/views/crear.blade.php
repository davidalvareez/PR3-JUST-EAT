<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <script src="{!! asset('js/validacion.js') !!}"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
    <form action="{{url('crearPost')}}" method="POST" enctype="multipart/form-data" onsubmit="return validarCrear();">
        @csrf
        <p>Nombre</p>
        <input type="text" id="nombre" name="nombre" placeholder="Introduce el nombre..." value="{{old('nombre')}}">
        @error('nombre')
        <br>
        {{$message}}
        @enderror
        <p>Precio</p>
        <input type="text" id="precio" name="precio" placeholder="Introduce el precio...">
        @error('precio')
        <br>
        {{$message}}
        @enderror
        <p>Nacionalidad</p>
        <input type="text" id="nacionalidad" name="nacionalidad" placeholder="Introduce la nacionalidad...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Tipo</p>
        <input type="text" id="tipo" name="tipo" placeholder="Introduce el primer tipo...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Segundo tipo (Opcional)</p>
        <input type="text" name="tipo2" placeholder="Introduce el segundo tipo...">
        @error('nacionalidad')
        <br>
        {{$message}}
        @enderror
        <p>Foto</p>
        <input type="file" id="foto" name="foto">
        @error('foto')
        <br>
        {{$message}}
        @enderror
        <div>
            <input type="submit" name="enviar">
        </div>
</body>
</html>