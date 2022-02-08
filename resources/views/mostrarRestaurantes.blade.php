<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    {{-- <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}"> --}}
    <script src="js/ajax.js"></script>
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <title>Just Eaten</title>
</head>
<body>
    <?php $tipo = (Session::get('tipouser')); echo '<p id="tipo">'.$tipo.'</p>';?>
    <div class="fondo2">
        <div class="logo">
            <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        </div>
        <h3 class="h1headerder"><i onclick='window.location="{{url("/logout")}}"' class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>¡Filtra para escoger el restaruante o el tipo de comida que estás deseando comer!</h1>
        <table class="productos">
            <tr>
                <td class="td25">
                    <span class="">NombreFiltro</span>
                    <input class="" type="text" onkeyup="leerJS()" name="" id="filtro"><br>
                    <span class="">Todas las cocinas A-Z</span>
                    <ul id="lateral">
                    </ul>
                </td>
                @if(Session::get('tipouser') == 'admin')
                    <td class="td75" id="cuadro">
                    </td>
                @else
                    <td class="td75" id="cuadro">
                    </td>
                @endif
            </tr>
        </table>
    </div>
</body>
</html>
