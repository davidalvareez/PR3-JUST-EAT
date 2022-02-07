<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <script src="{!! asset('js/validacion.js') !!}"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    <title>Registro</title>
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
    <form action="{{url('registroPost')}}" method="POST" onsubmit="return validarRegistro()">
        <div class=alert id='mensaje'>
        @csrf
        <p>Email</p>
        <input type="text" id="email" name="email" placeholder="Introduce el email..." value="{{old('email')}}">
        <p>Password</p>
        <input type="password" id="password" name="password" placeholder="Introduce la contraseña...">
        <p>Repetir Password</p>
        <input type="password" id="passwordvalidar" name="passwordvalidar" placeholder="Vuelve a introducir la contraseña...">
        <div>
            <input type="hidden" name="tipo" value="estandar">
            <input type="submit" name="Enviar">
        </div>
</body>
</html>
