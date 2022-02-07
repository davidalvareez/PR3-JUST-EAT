<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{!! asset('css/styles.css') !!}">
    <link rel="stylesheet" href="{!! asset('css/fontawesome/css/all.css') !!}">
    {{-- <link rel="icon" type="image/x-icon" href="{{asset('storage/uploads/hamburguesas.png')}}"> --}}
    {{-- <script src="./script.js"></script> --}}
    <meta name="csrf-token" id="token" content="{{ csrf_token() }}">
    <title>Just Eaten</title>
</head>
<body>
    <div class="fondo2">
        <div class="logo">
            <h1 class="h1headerizq"><i class="fas fa-utensils"></i> Just Eaten</h1>
        </div>
        <h3 class="h1headerder"><i onclick='window.location="{{url("/logout")}}"' class="fas fa-sign-out-alt fa-2x"></i></h3>
    </div>
    <div class="contenido2">
        <h1>¡Filtra para escoger el restaruante o el tipo de comida que estás deseando comer!</h1>
        <table class="productos">
            <form action="{{url('crear')}}" method="GET">
                <button class= "" type="submit" name="Crear" value="Crear">Crear</button>
            </form>
            <tr>
                <td class="td25">
                    <span class="">NombreFiltro</span>
                    <input class="" type="text" onkeyup="leerDiegoJS()" name="" id="filtro"><br>
                    <span class="">Todas las cocinas A-Z</span>
                    <ul id="lateral">
                    </ul>
                </td>
<<<<<<< HEAD
                @if(Session::get('tipouser') == 'admin')
                    <td class="td75" id="tablaproductos">
                        @foreach($listaRestaurantes as $restaurante)
                            <div class="cartaproductos">
                                <table class="tablaproductos">
                                    <td class="td25 image">
                                    </td>
                                    <td class="td25 campos">
                                    </td>
=======
                <td class="td75">
                    @foreach($listaRestaurantes as $restaurante)
                        <div class="cartaproductos">
                            <table class="tablaproductos">
                                <td class="td25">
                                    <img style="width:200px; height:120px;" src="{{asset('storage/uploads/hamburguesas.png')}}">
                                </td>
                                <td class="td50">
                                    @if(is_null($restaurante->tipo2))
                                        <h3>{{$restaurante->nombre}} ({{$restaurante->precio}})</h3>
                                        <br>
                                        <p>{{$restaurante->nacionalidad}} · {{$restaurante->tipo}} </p>
                                    @else
                                        <h3>{{$restaurante->nombre}} ({{$restaurante->precio}})</h3>
                                        <br>
                                        <p>{{$restaurante->nacionalidad}} · {{$restaurante->tipo}} · {{$restaurante->tipo2}}</p>
                                        <p></p>
                                    @endif
                                </td>
                                @if(Session::get('tipouser') == 'admin')
>>>>>>> main
                                    <td class="td50">
                                        <td class="td25"><form action="{{url('modificar/'.$restaurante->id)}}" method="GET">
                                            <button class= "" type="submit" name="Modificar" value="Modificar">Modificar</button>
                                        </form></td>
                                        <td class="td25"><form action="{{url('eliminar/'.$restaurante->id)}}" method="POST">
                                            @csrf
                                            {{method_field('DELETE')}}
                    
                                            <button class= "" type="submit" name="Eliminar" value="Eliminar">Eliminar</button>
                                        </form></td>
                                    </td>
                                </table>
                            </div>
                        @endforeach
                    </td>
                @else
                    <td class="td75" id="cuadro">
                    </td>
                @endif
            </tr>
        </table>
    </div>
    <script src="js/ajax.js"></script>
</body>
</html>
