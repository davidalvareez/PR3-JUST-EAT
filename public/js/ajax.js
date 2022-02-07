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
    var image = document.getElementsByClassName("image");
    var campos = document.getElementsByClassName("campos");
    var lateral = document.getElementById("lateral");
    var filtro = document.getElementById('filtro').value;
    console.log(filtro);
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /* var ul = ''; */
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < respuesta.length; i++) {
                image[i].innerHTML = '<img style="width:200px; height:120px;" src="storage/' + respuesta[i].foto + '">';
                campos[i].innerHTML = '<h2>' + respuesta[i].nombre + '</h2><br><br><p>Precio medio: ' + respuesta[i].precio + ' · ' + respuesta[i].nacionalidad + ' · ' + respuesta[i].tipo + '</p>';
            }
            /* for (let j = 0; j < cocinas.length; j++) {
                ul += '<li>' + cocinas[j].categoria + '</li>';
            }
            lateral.innerHTML = ul; */
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}

function leerDiegoJS() {
    var cuadro = document.getElementById("cuadro");
    /* var lateral = document.getElementById("lateral"); */
    var filtro = document.getElementById('filtro').value;
    var formData = new FormData();
    formData.append('_token', document.getElementById('token').getAttribute("content"));
    formData.append('filtro', document.getElementById('filtro').value);

    /* Inicializar un objeto AJAX */
    var ajax = objetoAjax();

    ajax.open("POST", "leer", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            var recarga = '';
            /* var ul = ''; */
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < respuesta.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<td class="td25"><img style="width:200px; height:120px;" src="storage/' + respuesta[i].foto + '"></td>';
                recarga += '<td class="td25"><h2>' + respuesta[i].nombre + '</h2><br><br><p>Precio medio: ' + respuesta[i].precio + ' · ' + respuesta[i].nacionalidad + ' · ' + respuesta[i].tipo + '</p></td>';
                recarga += '</table>';
                recarga += '</div>';
            }
            cuadro.innerHTML = recarga;
            /* for (let j = 0; j < cocinas.length; j++) {
                ul += '<li>' + cocinas[j].categoria + '</li>';
            }
            lateral.innerHTML = ul; */
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}