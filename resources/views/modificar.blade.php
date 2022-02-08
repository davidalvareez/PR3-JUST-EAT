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
    <div class="row flex-cv">
        <div class="cuadro_crear_restaurante">
            <form action="{{url('modificarPut')}}" method="POST" enctype="multipart/form-data" onsubmit="return validarModificar();">
            @csrf
            {{method_field('PUT')}}
            <h1 class="h1_crear_restaurante">MODIFICAR RESTAURANTE</h1>   
            <input class="input_login" type="text" id="nombre" name="nombre" value="{{$restaurante->nombre}}">
            <input class="input_login" type="text" id="precio" name="precio" value="{{$restaurante->precio}}">
            <input class="input_login" type="text" id="nacionalidad" name="nacionalidad" value="{{$restaurante->nacionalidad}}">
            <input class="input_login" type="text" id="tipo" name="tipo" value="{{$restaurante->tipo}}">
            <input class="input_login" type="text" id="tipo2" name="tipo2" value="{{$restaurante->tipo2}}">
            <input class="input_login" type="file" id="foto" name="foto" value="{{$restaurante->foto}}">
            <div>
                <input type="hidden" name="id" value="{{$restaurante->id}}">
                <input class="inputregistro"type="submit" value="Modificar restaurante">
            </div>
            </form>
        </div>
    </div>
</body>
</html>