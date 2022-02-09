-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2022 a las 20:56:34
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_justeat`
--
CREATE DATABASE IF NOT EXISTS `bd_justeat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_justeat`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_restaurante`
--

CREATE TABLE `tbl_restaurante` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` float(5,2) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `tipo2` varchar(100) DEFAULT NULL,
  `valoracion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_restaurante`
--

INSERT INTO `tbl_restaurante` (`id`, `nombre`, `precio`, `foto`, `nacionalidad`, `descripcion`, `tipo`, `tipo2`, `valoracion`) VALUES
(1, 'Nonos', 5.00, 'uploads/JCirHu8peZ81u0v3AgykCI5VlAES7Od2sxASjDu3.png', 'Japonesa', 'Este restaurante japonés pone a tu disposición una completa carta de productos que harán las delicias de los amantes de sushi y comida japonesa. Sumérgete en la cultura oriental y deja que la combinación de cada uno de sus platos te conquiste.', 'Sushi', '', '1'),
(2, 'Kzen', 5.00, 'uploads/MhwvE7Vt6pQfVQXTy9s3SCXcL1atbg3uq1cVA7Gt.jpg', 'China', 'Este restaurante chino pone a tu disposición una completa carta de productos que harán las delicias de los amantes de sushi y comida japonesa. Sumérgete en la cultura oriental y deja que la combinación de cada uno de sus platos te conquiste. ', 'Oriental', '', '1'),
(3, 'Doña Tortilla', 9.00, 'uploads/VV8gVXQpPUUZGHUXTSwe0l26KIzlp53DMfhQDuOE.jpg', 'Española', 'Si te apetece comer la comida que comerías a diario en casa, pero de una manera rápida y cómoda, Doña Tortilla te lo pone fácil. Cocinan con ingredientes de la tierra, con el tipo de cocina al más puro estilo mediterráneo tan arraigado en España. ', 'Tapas', '', '2'),
(4, 'Mamá Teresa Burguer', 7.00, 'uploads/sph8c5TVlY2WmuPe9apGBO1FJKC2EN1huZvUlld8.png', 'Americana', 'Consulta la carta de Mamá Teresa Hot Dog y comprueba el interesante surtido de con comida mediterránea, ensaladas, hamburguesas, perritos y más que tienes para elegir. Desde unos calamares a una ensalada capresse, una american burger o unas croquetas.', 'Hamburguesas', '', '2'),
(5, 'El Trébol 24h', 9.00, 'uploads/BUD1WpM9oGIhX8l9Z2gMqSDRemachxe19Ig4sCU2.jpg', 'Italiana', 'En el restaurante El Trébol puedes encontrar la tradicional ‘pizza media masa al molde’ original de Argentina. Puedes elegir entre 21 variedades de pizza, con extra de mozzarella y abundancia de ingredientes seleccionados.', 'Pasta', '', '3'),
(6, 'Rocky Asador', 9.00, 'uploads/gmXpmq077IK2RYMLaseH6xv94C1nXPMaCyPmF7Tn.png', 'Peruana', '¿Sabías que la comida peruana es patrimonio cultural? Pues así es y ahora ya no hace falta que te vayas hasta Perú a probarla ya que gracias a Rocky Asador puedes disfrutar de lo mejor de la gastronomía peruana en Madrid sin tener que moverte de casa.', 'Carnes', 'Platos combinados', '3'),
(7, 'Taco Bell', 11.00, 'uploads/RPjGBqKYJaqCwBn6AapREo2qpQGykZ52J2AJ4kZq.png', 'Mexicana', 'Taco Bell nos deleita con una carta de productos inspirada en la comida mexicana, con ingredientes de alta calidad que aportan una gran variedad de sabores, aromas y texturas. ¿Qué tiene de especial? pues que no es el típico restaurante mexicano, ya que Taco Bell da un giro a la comida mexicana tradicional y ¡realmente te sorprenderá!', 'Tex-Mex', 'Picante', '4'),
(8, 'Sabor de India', 11.00, 'uploads/LdJEaFrUqJZLJrxWyXi8jRvL4njEQnsDJbXrdxxy.png', 'India', 'Dicen que todo en La India es intensidad elevada al cubo, sus aromas, sus colores y sus sabores. Si lo que buscas es esa intensidad, el restaurante Sabor de la India te ofrece comida al más puro estilo indio. Sus sabores se te quedaran pegados a la lengua y guardados en la memoria. Prueba el verdadero curry indio en Sabor de la India. ', 'Medio Oriental', 'Healthy', '4'),
(9, 'Habesha', 13.00, 'uploads/JPLWCigkuZOpGDiST9Li0Y1vllSCOdpIRSIAN6Zi.png', 'Etíope', 'En Habesha encontrarás gran variedad de platos elaborados con los mejores ingredientes y de la mejor calidad. Prueba cada una de las delicias que te ofrece su variada carta y, lo mejor de todo, a muy buen precio.', 'Healthy', 'Vegana', '5'),
(10, 'Anamuc', 13.00, 'uploads/wO13RXeMopGRzxVGBpRFW9GDE7uAj7avQWtZCEQk.gif', 'Venelozana', 'Si lo que buscas es una opción muy sana y de producción 100% nuestra, beneficiosa para la salud y mediterránea, con los mejores ingredientes, como el aceite de oliva, los cereales, las hortalizas o las legumbres. No lo dudes más, Anamuc te permite seguir esa dieta equilibrada que tanto nos gusta.', 'Carnes', 'Buffet Libre', '5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `passwordvalidar` varchar(250) NOT NULL,
  `tipo` enum('admin','estandar') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id`, `email`, `password`, `passwordvalidar`, `tipo`) VALUES
(1, 'david@david.com', '81dc9bdb52d04dc20036dbd8313ed055', '81dc9bdb52d04dc20036dbd8313ed055', 'estandar'),
(2, 'admin@admin.com', '1fa3356b1eb65f144a367ff8560cb406', '1fa3356b1eb65f144a367ff8560cb406', 'admin'),
(6, 'laura@gmail.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', 'estandar'),
(7, 'laura2@gmail.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', 'estandar'),
(8, 'diegojavi2026@gmail.com', 'd6d8fcdb21dc2807c0fdfdc0f8f248ae', 'd6d8fcdb21dc2807c0fdfdc0f8f248ae', 'estandar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_restaurante`
--
ALTER TABLE `tbl_restaurante`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_restaurante`
--
ALTER TABLE `tbl_restaurante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
