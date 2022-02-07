<!DOCTYPE HTML>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Login</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
  <script src="{!! asset('js/validacion.js') !!}"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">

</head>
<body class="login">
  @if($errors->any())
  <!--mensaje de error de validaicón-->
  <div>
      <ul>
      @foreach($errors->all() as $error)
      <li>{{$error}}</li>
      @endforeach
      </ul>
  </div>
  @endif
  <div class="row flex-cv">
    <div class="cuadro_login">
      <!-- formulario inicio de sesión-->
      <form action="{{url('loginPost')}}" method="POST" onsubmit="return validarLogin();">
          @csrf
          {{method_field('POST')}}
          <br>
          <h1>INICIO DE SESIÓN</h1>
          <br>
          <div class="form-group">
            <p>Email:</p>
            <div>
              <input type="email" id="email" type="email" name="email" placeholder="Introduce tu email" value="{{old('email')}}">
            </div>
          </div>
          <br>
          <div class="form-group">
            <p>Contraseña:</p>
            <div>
              <input type="password" id="password" name="password" placeholder="Introduce la contraseña">
            </div>
          </div>
          <br><br>
          <div class="form-group">
            <button class= "botonlogin" type="submit" name="register" value="register">Iniciar Sesión</button>
          </div>
          <div class="form-group">
            <a href='./registro' class='registro'>Registrate</a>
          </div>
      </form>
    </div>
  </div>
</body>
</html>
