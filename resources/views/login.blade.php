<!DOCTYPE HTML>
<html>
<head>
  <title>Login</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
  <script src="{!! asset('js/validacion.js') !!}"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">

</head>
<body class="login">
  <div class="row flex-cv">
    <div class="cuadro_login">
      <form action="{{url('loginPost')}}" method="POST" onsubmit="return validarLogin();">
          @csrf
          {{method_field('POST')}}
          <h1 class="h1_login">INICIO DE SESIÓN</h1>
          <input class="input_login" type="text" id="email" type="email" name="email" placeholder="Introduce tu email..." value="{{old('email')}}">
          <input class="input_login" type="password" id="password" name="password" placeholder="Introduce la contraseña...">
          <button class= "botonlogin" type="submit" name="register" value="register">Iniciar Sesión</button>     
      </form>
      <p class="msgregistrarse">¿No estás registrado en nuestra web? ¡Registrate aquí mismo!</p>
      <button class="botonregistro" OnClick="location.href='./registro'">Registrate</button>
    </div>
  </div>
</body>
</html>
