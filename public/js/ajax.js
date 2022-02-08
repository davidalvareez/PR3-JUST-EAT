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
                    recarga += '<td class="td75" id="cuadro"><td class="td25"><form method="GET">';
                    recarga += '<button class= "" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    recarga += '<td class="td25"><form action="" method="POST"><button class= "" type="submit" name="Eliminar" value="Eliminar">Eliminar</button></form></td></td>';
                } else {
                    recarga += '<td class="td75" id="cuadro"><td class="td50"><td class="td50"><form>';
                    recarga += '<span>Valora este restaurante! EXTRA</span><input type="number" name="" id=""></form></td></td></td>';
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
    /* var tipo = document.getElementById("tipo"); */
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
            /* console.log(respuesta.nacion); */
            var recarga = '';
            var ul = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td25"><img style="width:200px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td25"><h2>' + datos[i].nombre + '</h2><br><br><p>Precio medio: ' + datos[i].precio + ' · ' + datos[i].nacionalidad + ' · ' + datos[i].tipo + '</p></td>';
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