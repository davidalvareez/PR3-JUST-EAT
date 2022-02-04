<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}">
    <script src="./script.js"></script>
    <title>Just Eaten</title>
</head>
<body>
    <div class="fondo">
        <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        <h3 class="h1headerder"><i onclick='window.location="{{url("/login")}}"' class="fas fa-user fa-2x"></i></h3>
    </div>
    <div class="mensaje">
        <h1 class="h1mensaje">Ponte las botas a tu gusto</h1>
        <h2 class="h3mensaje">Selecciona tu tipo de cocina favorito</h2>
    </div>
    <div class="contenido">
        <h1 class="txtcontenido">Elige el tipo de comida que mas te plazca</h1>
        <p class="txtcontenido2">¡Tenemos mas de 50 tipos de comida para ti!</p>
        <div class="carrusel">
            <center>
                <table class="tablacomida">
                    <tr>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/hamburguesas.png')}}" alt="Hamburguesas">   
                            </div>
                            <h3 class="h3mensaje2">Hamburguesas</h3>
                        </td>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/pizza.jpg')}}" alt="Pizzas">   
                            </div>
                            <h3 class="h3mensaje2">Pizzas</h3>
                        </td>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/pasta.jpg')}}" alt="Pasta">   
                            </div>
                            <h3 class="h3mensaje2">Pasta</h3>
                        </td>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/poke.jpg')}}" alt="Pokes">   
                            </div>
                            <h3 class="h3mensaje2">Pokes</h3>
                        </td>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/sushi.jpeg')}}" alt="Sushi">   
                            </div>
                            <h3 class="h3mensaje2">Sushi</h3>
                        </td>
                        <td class="tdcomida">
                            <div class="mensaje2">
                                <img class="imgcomida" src="{{asset('storage/uploads/kebab.jpg')}}" alt="Kebab">   
                            </div>
                            <h3 class="h3mensaje2">Kebab</h3>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    </div>
</body>
</html>