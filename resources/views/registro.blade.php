<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <script src="{!! asset('js/validacion.js') !!}"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    <title>Registro</title>
</head>
<body class="login">
    <div class="mensajee"></div>
    <div class="row flex-cv">
        <div class="cuadro_login">
            <form action="{{url('registroPost')}}" method="POST" onsubmit="return validarRegistro()">
            @csrf

            <h1 class="h1_login">REGISTRO DE USUSARIO</h1>
            <input class="input_login" type="text" id="email" name="email" placeholder="Introduce el email..." value="{{old('email')}}">
            <input class="input_login" type="password" id="password" name="password" placeholder="Introduce la contraseña...">
            <input class="input_login" type="password" id="passwordvalidar" name="passwordvalidar" placeholder="Vuelve a introducir la contraseña...">
            <div>
                <input type="hidden" name="tipo" value="estandar">
                <input type="submit" name="Enviar">
            </div>
            </form>
        </div>
    </div>
</body>
</html>
