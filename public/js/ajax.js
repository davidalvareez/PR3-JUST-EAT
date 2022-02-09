window.onload = function() {
    //cuando se abra la pantalla, que se muestren las consultas
    leerJS();
    //definimos variables de modal
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function objetoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function leerJS() {
    var cuadro = document.getElementById("cuadro");
    var tipo = document.getElementById("tipo").textContent;
    //lista de nacionalidades
    var lateral = document.getElementById("lateral");
    //lista de valoraciones
    var lvaloracion = document.getElementById("lvaloracion");
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));


    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            // definir las tres consultas sql
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var valoraciones = respuesta.valoraciones;
            var recarga = '';
            var ul = '';
            var ul2 = '';
            /* Leerá la respuesta datos que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + ' · ' + datos[i].tipo2 + ' ' + ' <p class="valoracion">' + datos[i].valoracion + '<i class="fas fa-star"></i></p>' + '</p></td>';
                if (tipo == 'admin') {
                    //modificar
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    //eliminar
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    //modal
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" onclick="openmodal(' + datos[i].id + ', `' + datos[i].precio + '`' + ', `' + datos[i].nombre + '`' + ', `' + datos[i].nacionalidad + '`' + ', `' + datos[i].descripcion + '`' + ', `' + datos[i].tipo + '`' + ', `' + datos[i].tipo2 + '`' + ', `' + datos[i].valoracion + '`' + ', );return false;">Ver mas información</button></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            /* Leerá la respuesta nacionalidades que es devuelta por el controlador: */
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
            /* Leerá la respuesta valoraciones que es devuelta por el controlador: */
            for (let k = 0; k < valoraciones.length; k++) {
                ul2 += '<li><button type="button" class="valoracions" value="' + valoraciones[k].valoracion + '" onclick="valorJS(' + k + ')">' + valoraciones[k].valoracion + '</button></li>';
            }
            lvaloracion.innerHTML = ul2;
        }
    }
    ajax.send(formData);
}

function filtroJS() {
    var cuadro = document.getElementById("cuadro");
    var tipo = document.getElementById("tipo").textContent;
    //lista de nacionalidades
    var lateral = document.getElementById("lateral");
    //lista de valoraciones
    var lvaloracion = document.getElementById("lvaloracion");
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            // definir las tres consultas sql
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var valoraciones = respuesta.valoraciones;
            var recarga = '';
            var ul = '';
            var ul2 = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + ' · ' + datos[i].tipo2 + ' ' + ' <p class="valoracion">' + datos[i].valoracion + '<i class="fas fa-star"></i></p>' + '</p></td>';
                if (tipo == 'admin') {
                    //modificar
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    //eliminar
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    //modal
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" onclick="openmodal(' + datos[i].id + ', `' + datos[i].precio + '`' + ', `' + datos[i].nombre + '`' + ', `' + datos[i].nacionalidad + '`' + ', `' + datos[i].descripcion + '`' + ', `' + datos[i].tipo + '`' + ', `' + datos[i].tipo2 + '`' + ', `' + datos[i].valoracion + '`' + ', );return false;">Ver mas información</button></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            /* Leerá la respuesta nacionalidades que es devuelta por el controlador: */
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
            /* Leerá la respuesta valoraciones que es devuelta por el controlador: */
            for (let k = 0; k < valoraciones.length; k++) {
                ul2 += '<li><button type="button" class="valoracions" value="' + valoraciones[k].valoracion + '" onclick="valorJS(' + k + ')">' + valoraciones[k].valoracion + '</button></li>';
            }
            lvaloracion.innerHTML = ul2;
        }
    }
    ajax.send(formData);
}

function cocinaJS(numero) {
    var cuadro = document.getElementById("cuadro");
    var tipo = document.getElementById("tipo").textContent;
    //lista de nacionalidades
    var lateral = document.getElementById("lateral");
    //lista de valoraciones
    var lvaloracion = document.getElementById("lvaloracion");
    var nacionalidad = document.getElementsByClassName('nacionalidad')[numero].value;
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);
    formData.append('nacionalidad', nacionalidad);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            // definir las tres consultas sql
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var valoraciones = respuesta.valoraciones;
            var recarga = '';
            var ul = '';
            var ul2 = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductosfiltrados">';
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + ' · ' + datos[i].tipo2 + ' ' + ' <p class="valoracion">' + datos[i].valoracion + '<i class="fas fa-star"></i></p>' + '</p></td>';
                if (tipo == 'admin') {
                    //modificar
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    //eliminar
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    //modal
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" onclick="openmodal(' + datos[i].id + ', `' + datos[i].precio + '`' + ', `' + datos[i].nombre + '`' + ', `' + datos[i].nacionalidad + '`' + ', `' + datos[i].descripcion + '`' + ', `' + datos[i].tipo + '`' + ', `' + datos[i].tipo2 + '`' + ', `' + datos[i].valoracion + '`' + ', );return false;">Ver mas información</button></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            /* Leerá la respuesta nacionalidades que es devuelta por el controlador: */
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
            /* Leerá la respuesta valoraciones que es devuelta por el controlador: */
            for (let k = 0; k < valoraciones.length; k++) {
                ul2 += '<li><button type="button" class="valoracions" value="' + valoraciones[k].valoracion + '" onclick="valorJS(' + k + ')">' + valoraciones[k].valoracion + '</button></li>';
            }
            lvaloracion.innerHTML = ul2;
        }
    }
    ajax.send(formData);
}

function valorJS(numero) {
    var cuadro = document.getElementById("cuadro");
    var tipo = document.getElementById("tipo").textContent;
    //lista de nacionalidades
    var lateral = document.getElementById("lateral");
    //lista de valoraciones
    var lvaloracion = document.getElementById("lvaloracion");
    var valoracions = document.getElementsByClassName('valoracions')[numero].value;
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);
    formData.append('valoracion', valoracions);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            // definir las tres consultas sql
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var valoraciones = respuesta.valoraciones;
            var recarga = '';
            var ul = '';
            var ul2 = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductosfiltrados">';
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + ' · ' + datos[i].tipo2 + ' ' + ' <p class="valoracion">' + datos[i].valoracion + '<i class="fas fa-star"></i></p>' + '</p></td>';
                if (tipo == 'admin') {
                    //modificar
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    //eliminar
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    //modal
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" onclick="openmodal(' + datos[i].id + ', `' + datos[i].precio + '`' + ', `' + datos[i].nombre + '`' + ', `' + datos[i].nacionalidad + '`' + ', `' + datos[i].descripcion + '`' + ', `' + datos[i].tipo + '`' + ', `' + datos[i].tipo2 + '`' + ', `' + datos[i].valoracion + '`' + ', );return false;">Ver mas información</button></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            /* Leerá la respuesta nacionalidades que es devuelta por el controlador: */
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
            /* Leerá la respuesta valoraciones que es devuelta por el controlador: */
            for (let k = 0; k < valoraciones.length; k++) {
                ul2 += '<li><button type="button" class="valoracions" value="' + valoraciones[k].valoracion + '" onclick="valorJS(' + k + ')">' + valoraciones[k].valoracion + '</button></li>';
            }
            lvaloracion.innerHTML = ul2;
        }
    }
    ajax.send(formData);
}

function eliminarJS(id) {
    var token = document.getElementById('token').getAttribute("content");
    var method = document.getElementById('postDelete').value;
    var formData = new FormData();
    formData.append('_token', token);
    formData.append('_method', method);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();
    ajax.open("POST", "eliminar/" + id, true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            leerJS();
        }
    }
    ajax.send(formData)
}

function openmodal(id, precio, nombre, nacionalidad, descripcion, tipo, tipo2, valoracion) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var mheader = document.getElementById("mheader");
    var mbody = document.getElementById("mbody");
    mheader.innerHTML = "<h1>Restaurante " + nombre + "</h1>";
    mheader.innerHTML += "<hr>";
    mbody.innerHTML = "<br>";
    mbody.innerHTML += "<p>Este restaurante tiene un precio medio de " + precio + "</p>";
    mbody.innerHTML += "<p>La nacionalidad de este restaurante es " + nacionalidad + "</p>";
    mbody.innerHTML += "<p>El tipo de comida: " + tipo + "</p>";
    mbody.innerHTML += "<p>Tipo de comida opcional: " + tipo2 + "</p>";
    mbody.innerHTML += "<br>";
    mbody.innerHTML += "<p>" + descripcion + "</p>";
    mbody.innerHTML += "<p class='valoracion'>Tiene una valoración de " + valoracion + "<i class='fas fa-star'></i></p>";
    mbody.innerHTML += "<br>";
    mbody.innerHTML += "<hr>";
    mbody.innerHTML += "<h2>¿Quieres valorar este restaurante?</h2>";
}