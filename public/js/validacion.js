function validarLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

    if (email == '' || pass == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        swal.fire({
            title: "Error",
            text: "Introduce un email correcto",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}

function validarRegistro() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let passwordvalidar = document.getElementById('passwordvalidar').value;

    /*Por mucho que intenten quitar la validacion, irá al srv y se validará*/
    if (email == '' || pass == '' || passwordvalidar == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        swal.fire({
            title: "Error",
            text: "Introduce un email correcto",
            icon: "error",
        });
        return false;
    } else if (pass != passwordvalidar) {
        swal.fire({
            title: "Error",
            text: "Las contraseñas tienen que coincidir",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}

function validarCrear() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let foto = document.getElementById('foto').value;
    let descripcion = document.getElementById('descripcion').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let tipo = document.getElementById('tipo').value;

    if (nombre == '' || precio == '' || foto == '' || descripcion == '' || nacionalidad == '' || tipo == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}

function validarModificar() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let descripcion = document.getElementById('descripcion').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let tipo = document.getElementById('tipo').value;

    if (nombre == '' || precio == '' || descripcion == '' || nacionalidad == '' || tipo == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    } else {
        return true;
    }
}