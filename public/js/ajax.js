window.onload = function() {
    leerJS();
    isOn = false;
    /* var nacionalidad = []; */
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
    /* var tipo = document.getElementById("tipo"); */
    /* var lateral = document.getElementById("lateral"); */
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
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            for (let j = 0; j < nacionalidades.length; j++) {
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="botonesJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}
var nacionalidad = [];

function botonesJS(numero) {
    var nacion = document.getElementsByClassName('nacionalidad')[numero];
    console.log(nacion);
    if (!isOn) {
        isOn = true;
        nacionalidad.push(nacion.value);
        console.log(nacionalidad);
    } else {
        isOn = false;
        nacionalidad.pop();
        console.log(nacionalidad);
    }
}

function cocinaJS() {
    var cuadro = document.getElementById("cuadro");
    /* var tipo = document.getElementById("tipo"); */
    var lateral = document.getElementById("lateral");
    var nacionalidad = '';
    nacionalidad += document.getElementById('nacionalidad').value;
    console.log(nacionalidad);
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
            console.log(respuesta.resultado);
            console.log(respuesta.nacion);
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
                ul += '<li><button type="button" class="nacionalidad" value="' + nacionalidades[j].nacionalidad + '" onclick="botonesJS(' + j + ')">' + nacionalidades[j].nacionalidad + '</button></li>';
            }
            lateral.innerHTML = ul;
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}