window.onload = function() {
    leerJS();
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
    var lateral = document.getElementById("lateral");
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var recarga = '';
            var ul = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td25"><img style="width:200px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td25"><h2>' + datos[i].nombre + '</h2><br><br><p>Precio medio: ' + datos[i].precio + ' · ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + '</p></td>';
                if (tipo == 'admin') {
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" id="myBtn">Ver mas información</button>';
                    recarga += '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h1 class="h1_modal" id="nombreRestaurante">Preuba</h1></div>';
                    recarga += '<div class="modal-body"><p id="precio">Preuba</p><p id="tipo">Preuba</p><p id="tipo2">Preuba</p><p id="descripcion">Preuba</p></div></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
        }
    }
    ajax.send(formData);
}

function cocinaJS(numero) {
    var cuadro = document.getElementById("cuadro");
    var tipo = document.getElementById("tipo").textContent;
    var lateral = document.getElementById("lateral");
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
            var datos = respuesta.datos;
            var nacionalidades = respuesta.nacionalidades;
            var recarga = '';
            var ul = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td25"><img style="width:200px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td25"><h2>' + datos[i].nombre + '</h2><br><br><p>Precio medio: ' + datos[i].precio + ' · ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + '</p></td>';
                if (tipo == 'admin') {
                    recarga += '<td class="td25"><form method="GET"><button class= "boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" id="myBtn">Ver mas información</button>';
                    recarga += '<div id="myModal" class="modal"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h1 class="h1_modal" id="nombreRestaurante">Preuba</h1></div>';
                    recarga += '<div class="modal-body"><p id="precio">Preuba</p><p id="tipo">Preuba</p><p id="tipo2">Preuba</p><p id="descripcion">Preuba</p></div></td>';
                }
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="cocinaJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
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

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}