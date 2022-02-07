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
            var ul = '';
            /* Leerá la respuesta que es devuelta por el controlador: */
            for (let i = 0; i < datos.length; i++) {
                image[i].innerHTML = '<img style="width:200px; height:120px;" src="storage/' + datos[i].foto + '">';
                campos[i].innerHTML = '<h2>' + datos[i].nombre + '</h2><br><br><p>Precio medio: ' + datos[i].precio + ' · ' + datos[i].nacionalidad + ' · ' + datos[i].categorias + '</p>';
            }
            for (let j = 0; j < cocinas.length; j++) {
                ul += '<li>' + cocinas[j].categoria + '</li>';
            }
            lateral.innerHTML = ul;
        }
        /* else if (this.readyState != 4 || this.status != 200) {
                   alert(this.responseText);
               } */
    }
    ajax.send(formData);
}