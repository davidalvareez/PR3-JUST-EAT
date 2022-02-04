<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device=width, initial-scale=1.0">
    <script type="text/javascript" src="../../js/validacion.js"></script>
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
    <form action="{{url('registro')}}" method="POST" enctype="multipart/form-data" onsubmit="return validar_user()">
        <div class=alert id='mensaje'>
        @csrf
        <p>Email</p>
        <input type="email" name="email" placeholder="Introduce el email..." value="{{old('email')}}">
        <p>Password</p>
        <input type="password" name="password" placeholder="Introduce la contraseña...">
        <div>
            <input type="hidden" name="tipo" value="estandar">
            <input type="submit" name="enviar">
        </div>
</body>
</html>
