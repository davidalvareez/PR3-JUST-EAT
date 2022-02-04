<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    <script src="./script.js"></script>
    <title>Just Eaten</title>
</head>
<body>
    <div class="fondo2">
        <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        <h3 class="h1headerder"><i onclick="window.location=''" class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>Puedes filtrar entre todos nuestros tipos de comida!</h1>
        <table class="productos">
            <tr>
                <td class="td25">
                    <form action="">
                        <span class="">Nombre</span>
                        <input class="" type="text" name="" id="">
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
                    @foreach($listaRestaurantes as $restaurante)
                        <div class="cartaproductos">
                            <table class="tablaproductos">
                                <tr>

                                        <td class="td25">{{$restaurante->nombre}}</td>
                                        <td class="td25">
                                            {{$restaurante->precio}}
                                            {{$restaurante->nacionalidad}}
                                        </td>
                                        <td class="td50">Botonoes admin</td>
                                </tr>
                            </table>
                        </div>
                    @endforeach
                </td>
            </tr>
        </table>
    </div>
</body>
</html>