# PR2-ELLEN-RYPLEY21-INDIVIDUAL.

El proyecto consiste en la creacion de diferentes paginas web para reservar las mesas de nuestro restaurante. Los camareros tendrán que hacer un login, y serán ellos mismos quien asignarán y reservaran la mesa en cuestión a la hora determinada.

##Comenzando## 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

##Pre-requisitos 📋##

Listado de software y como instalarlo:
Xampp:
>1. Entras en https://www.apachefriends.org/es/download.html
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

Si quieres modificar el codigo fuente debes instalarte un editor de texto:
Visual Studio Code:
>1. Entras en https://code.visualstudio.com/download
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

Si quieres una aplicacion para controlar las versiones te puedes instalar git + github(_github via web_):
>1. Entras en https://git-scm.com/downloads
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

##Instalación 🔧##

Comentaremos paso a paso la instalación y como proceder para poder hacer funcional el proyecto en nuestro dispositivo:

SI TIENES GIT + GITHUB: 
>1. Abres Visual Studio Code
>2. Seleccionas Archivo (_localizado arriba a la izquierda_) > Abrir Carpeta > Localizas donde tienes la carpeta htdocs, en mi caso en "C:>xampp>htdocs" y la abres.
>3. Seleccionas la opcion de Terminal (_localizado arriba a la izquierda_).
>4. En mi repositorio de GitHub, te diriges a Code (en verde) y copias la url.
>5. En la terminal escribes "git clone _urlcopiada_".
>6. Ya tienes el proyecto funcional junto con un controlador de versiones.

SI NO TIENES GIT + GITHUB: 
>1. En mi repositorio de GitHub, te diriges a Code (en verde) y seleccionas la opcion de "Download ZIP".
>2. Entramos en Explorador de Archivos y nos situamos *C*: (o donde esté situada la carpeta xampp).
>2. Entramos a la carpeta *xampp*.
>3. Entramos a la carpeta *htdocs*.
>4. Descomprimes el ZIP y se te creará la carpeta del proyecto.


*COSAS IMPORTANTES A TENER EN CUENTA:*
    · Para poder acceder a la pagina y que sea totalmente funcional os muestro los usuarios:
        · Usuario ADMINISTRADOR: admin@admin.com Password: 1234.
        · Usuario CAMARERO: camarero@camarero.com Password: 1234.
    · En caso que dentro de la carpeta SERVICES no haya un archivo llamado config.php, se deberá crear y contener la siguiente información:
        ·<?php
            define("SERVIDOR", "NOMBRE_SERVIDOR");
            define("USUARIO", "NOMBRE_USUARIO");
            define("CONTRASEÑA", "NOMBRECONTRASEÑA");
            define("BD", "NOMBRE_DATABASE");
        ?>

##Construido con 🛠️##

    XAMPP - Compilador 
    Visual Studio Code - Editor de texto
    GIT + GITHUB - Controlador de versiones

##Versionado 📌##

Nuestra version disponible es: _version 0.1.0_.

##Autores ✒️##

Este proyecto ha sido realizado por David Alvarez Rodriguez

##Expresiones de Gratitud 🎁##

    Comenta a tu familia sobre este proyecto o a través de las redes sociales 📢
    Invita una cerveza 🍺 o un café ☕ a alguien del equipo, o me pasas un bizum al 670908765 (preferiblemente BIZUM que no me gusta ni el cafe ni la cerveza).
    Da las gracias públicamente 🤓, o no, me da exactamente igual.
