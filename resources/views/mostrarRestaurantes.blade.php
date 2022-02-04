<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    {{-- <script src="./script.js"></script> --}}
    <script src="js/ajax.js"></script>
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <title>Just Eaten</title>
</head>
<body>
    <div class="fondo2">
        <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        <h3 class="h1headerder"><i onclick="window.location=''" class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>Puedes filtrar entre todos nuestros tipos de comida!</h1>
        <input type="text" onkeyup="leerJS()" id="filtro">
        <table class="productos" id="productos">
        </table>
    </div>
</body>
</html>