window.onload = function() {
    leerJS();
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
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo +' · '+datos[i].tipo2 +' '+' <p class="valoracion">'+ datos[i].valoracion +'<i class="fas fa-star"></i></p>'+ '</p></td>';
                if (tipo == 'admin') {
                    recarga += '<td class="td25"><form action="./modificar/' + datos[i].id + '" method="GET"><button class="boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" onclick="openmodal(' + datos[i].id + '); return false;">Ver mas información</button></td>';
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
                recarga += '<table class="tablaproductosfiltrados">';
                recarga += '<td class="td10"><img style="width:120px; height:120px;" src="storage/' + datos[i].foto + '"></td>';
                recarga += '<td class="td60"><h2>' + datos[i].nombre + ' (' + datos[i].precio + ')' + '</h2><p> ' + datos[i].nacionalidad + ' · ' + datos[i].tipo +' · '+datos[i].tipo2 +' '+' <p class="valoracion">'+ datos[i].valoracion +'<i class="fas fa-star"></i></p>'+ '</p></td>';
                if (tipo == 'admin') {
                    recarga += '<td class="td25"><form method="GET"><button class= "boton_modificar_restaurante" type="submit" name="Modificar" value="Modificar">Modificar</button></form></td>';
                    recarga += '<td class="td25"><input type="hidden" name="_method" value="delete" id="postDelete"><button class="boton_eliminar_restaurante" onclick="eliminarJS(' + datos[i].id + '); return false;">Eliminar</button></td>';
                } else {
                    recarga += '<td class="td50"><td class="td50"><button class="botonlogin" id="myBtn">Ver mas información</button></td>';
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

function openmodal(id) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var mheader = document.getElementById("mheader");
    var mbody = document.getElementById("mbody");
    mheader.innerHTML = "<h1>Nota #" + id + "</h1>";
}
/* al usar ajax lo que estan dentro del los div mheader y mbody se sobreescribe por el contenido de ajax, todo */