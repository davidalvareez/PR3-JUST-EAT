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
    var tabla = document.getElementById("tablaproductos");
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
            var cocinas = respuesta.cocinas;
            var recarga = '';
            var ul = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                recarga += '<div class="cartaproductos">';
                recarga += '<table class="tablaproductos">';
                recarga += '<tr>';
                recarga += '<td>' + datos[i].nombre + '</td>';
                recarga += '<td>' + datos[i].precio + '</td>';
                recarga += '<td>' + datos[i].nacionalidad + '</td>';
                recarga += '<td>' + datos[i].categorias + '</td>';
                recarga += '</tr>';
                recarga += '</table>';
                recarga += '</div>';
            }
            for (let j = 0; j < cocinas.length; j++) {
                ul += '<li>' + cocinas[j].categoria + '</li>';
            }
            tabla.innerHTML = recarga;
            lateral.innerHTML = ul;
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}