<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    <script src="{!! asset('js/validacion.js') !!}"></script>
    <title>Just Eaten</title>
</head>
<body class="login">
    @if($errors->any())
    <div>
        <ul>
        @foreach($errors->all() as $error)
        <li>{{$error}}</li>
        @endforeach
        </ul>
    </div>
    @endif
    <div class="row flex-cv">
        <div class="cuadro_crear_restaurante">
            <form action="{{url('crearPost')}}" method="POST" enctype="multipart/form-data" onsubmit="return validarCrear();">
                @csrf
                <h1 class="h1_crear_restaurante">CREAR RESTAURANTE</h1>
                <input class="input_crear_restaurante" type="text" id="nombre" name="nombre" placeholder="Introduce el nombre..." value="{{old('nombre')}}">
                @error('nombre')
                @enderror
                <input class="input_crear_restaurante" type="text" id="precio" name="precio" placeholder="Introduce el precio...">
                @error('precio')
                @enderror
                <input class="input_crear_restaurante" type="text" id="nacionalidad" name="nacionalidad" placeholder="Introduce la nacionalidad...">
                @error('nacionalidad')
                @enderror
                <input class="input_crear_restaurante" type="text" id="tipo" name="tipo" placeholder="Introduce el primer tipo de cocina...">
                @error('nacionalidad')
                @enderror
                <input class="input_crear_restaurante" type="text" name="tipo2" placeholder="Introduce el segundo tipo... (opcional)">
                @error('nacionalidad')
                @enderror
                <input class="input_crear_restaurante" type="file" id="foto" name="foto">
                @error('foto')
                @enderror
                <input class="inputregistro" type="submit" value="Crear restaurante">
            </form>
        </div>
    </div>
</body>
</html>