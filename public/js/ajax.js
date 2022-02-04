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
            recarga += '<tr><th>Nombre</th><th>Precio</th><th>Nacionalidad</th><th>Categorias</th></tr>';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < respuesta.length; i++) {
                recarga += '<tr>';
                recarga += '<td>' + respuesta[i].nombre + '</td>';
                recarga += '<td>' + respuesta[i].precio + '</td>';
                recarga += '<td>' + respuesta[i].nacionalidad + '</td>';
                recarga += '<td>' + respuesta[i].categorias + '</td>';
                recarga += '</tr>';
            }
            tabla.innerHTML = recarga;
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}