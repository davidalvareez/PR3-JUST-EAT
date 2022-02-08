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
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
    let error=document.getElementById('error').value;

    
    
    /*Por mucho que intenten quitar la validacion, irá al srv y se validará*/
    if (email == '' || pass == '' || passwordvalidar == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        swal.fire({
            title: "Error",
            text: "Introduce un email correcto",
            icon: "error",
        });
        return false;
    }else if(pass != passwordvalidar){
        swal.fire({
            title: "Error",
            text: "Las contraseñas tienen que coincidir",
            icon: "error",
        });
        return false;
    }else if(pass.length < 8){
        swal.fire({
            title: "Error",
            text: "La contraseña debe tener mas de 8 caracteres",
            icon: "error",
        });
        return false;
    }else if(pass.length > 100){
        swal.fire({
            title: "Error",
            text: "La contraseña debe tener menos de 100 caracteres",
            icon: "error",
        });
        return false;
    }else if (error == 'error') {
        swal.fire({
            title: "Error",
            icon: "error",
            html:
                'Este correo ya ha sido utilizado.'+
                ' Vuelve al <a href="./login">inicio de sesion</a> ',
        });
        return false;
    }else {
        return true;
    }
}

function validarCrear() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let foto = document.getElementById('foto').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let tipo = document.getElementById('tipo').value;

    if (nombre == '' || precio == '' || foto == '' || nacionalidad == '' || tipo == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    }else {
        return true;
    }
}

function validarModificar() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let tipo = document.getElementById('tipo').value;
    
    if (nombre == '' || precio == '' || nacionalidad == '' || tipo == '') {
        swal.fire({
            title: "Error",
            text: "Tienes que rellenar todos los datos",
            icon: "error",
        });
        return false;
    }else {
        return true;
    }
}