<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    {{-- <script src="./script.js"></script> --}}
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <title>Just Eaten</title>
</head>
<body>
    <div class="fondo2">
        <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        <h3 class="h1headerder"><i onclick='window.location="{{url("/logout")}}"' class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>Puedes filtrar entre todos nuestros tipos de comida!</h1>
        <table class="productos">
            <tr>
                <td class="td25">
                    <form action="">
                        <span class="">NombreFiltro</span>
                        <input class="" type="text" onkeyup="leerJS()" name="" id="filtro">
                        <br>
                        <span class="" >Nombre</span>
                        <input class=""type="text" name="" id="">
                        <span>Nombre</span>
                        <input class=""type="text" name="" id="">
                        <span class="">Nombre</span>
                        <input class=""type="text" name="" id="">
                        <input type="submit" value="Filtrar">
                    </form>
                </td>
                <td class="td75">
                    <div class="cartaproductos">
                        <table class="tablaproductos" id="tablaproductos">
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <script src="js/ajax.js"></script>
</body>
</html>
