function validar_user() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    mensaje = document.getElementById('mensaje')

    if (email == '' && password == '') {
        mensaje.innerHTML = 'Introduce el email y la contraseña'
        return false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mensaje.innerHTML = 'Introduce un email correcto'
        return false
    } else if (email == '') {
        mensaje.innerHTML = 'Introduce el email'
    } else if (password == '') {
        mensaje.innerHTML = 'Introduce la contraseña'
        return false
    } else {
        return true
    }
} >>>
>>>
> devlaura