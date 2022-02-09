<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="{!! asset('js/validacion.js') !!}"></script>
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    <script src="js/ajax.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <title>Just Eaten</title>
</head>
<body>
    <?php $tipo = (Session::get('tipouser')); echo '<p id="tipo" style="color:white;">'.$tipo.'</p>';?>
    <div class="fondo2">
        <div class="logo">
            <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        </div>
        <h3 class="h1headerder"><i onclick='window.location="{{url("/logout")}}"' class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>¡Filtra para escoger el restaurante o el tipo de comida que estás deseando comer!</h1>
        @if(Session::get('tipouser') == 'admin')
            <form action="{{url('crear')}}" method="GET">
                <button class="boton_crear_restaurante" type="submit" name="Crear" value="Crear">Crear nuevo restaurante</button>
            </form>
        @endif
        <table class="productos">
            <tr>
                <td class="td25">
                    <div class="div_filtro">
                        <span class="">Nombre</span>
                        <input class="inputfiltro" type="text" onkeyup="leerJS()" name="" id="filtro"><br>
                        <span class="">Todas las cocinas A-Z:</span>
                        <ul class="ulfiltro" id="lateral">
                    </div>
                    </ul>
                </td>
                <td class="td75filtro" id="cuadro">
                </td>
            </tr>
        </table>
    </div>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <div class="modal-header" id="mheader">
                <span class="close">&times;</span>
                <h1 class="h1_modal" id="nombreRestaurante">Preuba</h1>
            </div>
            <div class="modal-body" id="mbody">
                <p id="precio">Preuba</p>
                <p id="tipo">Preuba</p>
                <p id="tipo2">Preuba</p>
                <p id="descripcion">Preuba</p>
            </div>
        </div>
    </div>
</body>
</html>