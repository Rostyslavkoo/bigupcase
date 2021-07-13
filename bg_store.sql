-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Бер 11 2021 р., 22:18
-- Версія сервера: 8.0.19
-- Версія PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `bg_store`
--

-- --------------------------------------------------------

--
-- Структура таблиці `all_avaible_goods`
--

CREATE TABLE `all_avaible_goods` (
  `id` int NOT NULL,
  `type_good` varchar(30) NOT NULL,
  `case_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `case_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_model` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_type` varchar(30) DEFAULT NULL,
  `charge_model` varchar(30) DEFAULT NULL,
  `charge_input` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `glass_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(30) NOT NULL,
  `cod` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `first_price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `all_avaible_goods`
--

INSERT INTO `all_avaible_goods` (`id`, `type_good`, `case_type`, `case_brand`, `phone_brand`, `phone_model`, `charge_type`, `charge_model`, `charge_input`, `charge_brand`, `glass_type`, `color`, `cod`, `date`, `first_price`) VALUES
(3, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0002', '2021-03-06', 60),
(12, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0003', '2021-03-06', 50);

-- --------------------------------------------------------

--
-- Структура таблиці `all_goods`
--

CREATE TABLE `all_goods` (
  `id` int NOT NULL,
  `type_good` varchar(30) NOT NULL,
  `case_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `case_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_model` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_type` varchar(30) DEFAULT NULL,
  `charge_model` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_input` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `glass_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(30) NOT NULL,
  `cod` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `first_price` int DEFAULT NULL,
  `sold` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `all_goods`
--

INSERT INTO `all_goods` (`id`, `type_good`, `case_type`, `case_brand`, `phone_brand`, `phone_model`, `charge_type`, `charge_model`, `charge_input`, `charge_brand`, `glass_type`, `color`, `cod`, `date`, `first_price`, `sold`) VALUES
(1, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0001', '2021-03-06', 150, 1),
(2, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0001', '2021-03-06', 50, 1),
(3, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0002', '2021-03-06', 60, 0),
(4, 'зарядка', NULL, NULL, NULL, NULL, 'силікон', 'rc-08', 'micro-usb', 'remax', NULL, 'чорний', 'CH0003', '2021-03-06', 70, 1),
(5, 'зарядка', NULL, NULL, NULL, NULL, 'тканина ', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0004', '2021-03-06', 50, 1),
(6, 'зарядка', NULL, NULL, NULL, NULL, 'тканина ', 'rc-a4', 'micro-usb', 'remax', NULL, 'чорний', 'CH0005', '2021-03-06', 10, 1),
(7, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'micro-usb', 'remax', NULL, 'чорний', 'CH0006', '2021-03-06', 20, 1),
(8, 'зарядка', NULL, NULL, NULL, NULL, 'тканина ', 'rc-a4', 'type-c', 'remax', NULL, 'чорний', 'CH0007', '2021-03-06', 50, 1),
(9, 'зарядка', NULL, NULL, NULL, NULL, 'пластик', 'model', 'блок живлення', 'wk design', NULL, 'білий', 'CH0008', '2021-03-06', 100, 1),
(10, 'зарядка', NULL, NULL, NULL, NULL, 'силікон', 'none', 'інше', 'none', NULL, 'зелений', 'CH0009', '2021-03-06', 50, 1),
(11, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0002', '2021-03-06', 50, 1),
(12, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0003', '2021-03-06', 50, 0),
(13, 'захисне скло', NULL, NULL, 'iphone', '11pro max', NULL, NULL, NULL, NULL, '3d', 'чорний', 'GL0001', '2021-03-06', 40, 1),
(14, 'захисне скло', NULL, NULL, 'xiaomi', 'redmi 9', NULL, NULL, NULL, NULL, 'clear glass', 'прозорий', 'GL0002', '2021-03-06', 10, 1),
(16, 'захисне скло', NULL, NULL, 'iphone', '11pro max', NULL, NULL, NULL, NULL, '3d', 'прозорий', 'GL0003', '2021-03-06', 20, 1),
(17, 'захисне скло', NULL, NULL, 'інше', 'універсал', NULL, NULL, NULL, NULL, 'clear glass', 'прозорий', 'GL0004', '2021-03-07', 5, 1),
(18, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0004', '2021-03-10', 50, 1);

-- --------------------------------------------------------

--
-- Структура таблиці `all_sold_goods`
--

CREATE TABLE `all_sold_goods` (
  `id` int NOT NULL,
  `type_good` varchar(30) NOT NULL,
  `case_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `case_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone_model` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_type` varchar(30) DEFAULT NULL,
  `charge_model` varchar(30) DEFAULT NULL,
  `charge_input` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `charge_brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `glass_type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(30) NOT NULL,
  `cod` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `last_price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `all_sold_goods`
--

INSERT INTO `all_sold_goods` (`id`, `type_good`, `case_type`, `case_brand`, `phone_brand`, `phone_model`, `charge_type`, `charge_model`, `charge_input`, `charge_brand`, `glass_type`, `color`, `cod`, `date`, `last_price`) VALUES
(1, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0001', '2021-03-06', 100),
(2, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0001', '2021-03-06', 150),
(3, 'зарядка', NULL, NULL, NULL, NULL, 'силікон', 'rc-08', 'micro-usb', 'remax', NULL, 'чорний', 'CH0003', '2021-03-06', 170),
(4, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'lightning', 'remax', NULL, 'білий', 'CH0004', '2021-03-06', 100),
(5, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'micro-usb', 'remax', NULL, 'чорний', 'CH0005', '2021-03-06', 150),
(6, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'type-c', 'remax', NULL, 'білий', 'CH0007', '2021-03-06', 100),
(7, 'зарядка', NULL, NULL, NULL, NULL, 'пластик', 'model', 'блок живлення', 'wk design', NULL, 'білий', 'CH0008', '2021-03-06', 160),
(8, 'зарядка', NULL, NULL, NULL, NULL, 'силікон', 'none', 'інше', 'none', NULL, 'білий', 'CH0009', '2021-03-06', 100),
(9, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0002', '2021-03-06', 200),
(10, 'захисне скло', NULL, NULL, 'iphone', '11pro max', NULL, NULL, NULL, NULL, '3d', 'чорний', 'GL0001', '2021-03-07', 100),
(11, 'захисне скло', NULL, NULL, 'iphone', '11pro max', NULL, NULL, NULL, NULL, 'clear glass', 'прозорий', 'GL0003', '2021-03-07', 150),
(12, 'захисне скло', NULL, NULL, 'xiaomi', 'redmi 9', NULL, NULL, NULL, NULL, 'clear glass', 'прозорий', 'GL0002', '2021-03-07', 100),
(13, 'захисне скло', NULL, NULL, 'інше', 'універсал', NULL, NULL, NULL, NULL, 'clear glass', 'прозорий', 'GL0004', '2021-03-07', 50),
(14, 'зарядка', NULL, NULL, NULL, NULL, 'тканина', 'rc-a4', 'micro-usb', 'remax', NULL, 'білий', 'CH0006', '2021-03-07', 150),
(15, 'чохол', 'задній бампер', 'silcone 1:1', 'iphone', '7/8', NULL, NULL, NULL, NULL, NULL, 'черовний', 'CA0004', '2021-03-10', 300);

-- --------------------------------------------------------

--
-- Дублююча структура для представлення `search_view`
-- (Див. нижче для фактичного подання)
--
CREATE TABLE `search_view` (
`cod` varchar(6)
,`color` varchar(30)
,`content` varchar(154)
,`date` date
,`id` int
,`last_price` int
);

-- --------------------------------------------------------

--
-- Структура для представлення `search_view`
--
DROP TABLE IF EXISTS `search_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`127.0.0.1` SQL SECURITY DEFINER VIEW `search_view`  AS SELECT `all_sold_goods`.`id` AS `id`, concat(`all_sold_goods`.`type_good`,' ',`all_sold_goods`.`phone_brand`,' ',`all_sold_goods`.`phone_model`,' ',`all_sold_goods`.`glass_type`) AS `content`, `all_sold_goods`.`color` AS `color`, `all_sold_goods`.`cod` AS `cod`, `all_sold_goods`.`date` AS `date`, `all_sold_goods`.`last_price` AS `last_price` FROM `all_sold_goods` WHERE (`all_sold_goods`.`type_good` like 'захисне скло') ;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `all_avaible_goods`
--
ALTER TABLE `all_avaible_goods`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `all_goods`
--
ALTER TABLE `all_goods`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `all_sold_goods`
--
ALTER TABLE `all_sold_goods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `all_avaible_goods`
--
ALTER TABLE `all_avaible_goods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблиці `all_goods`
--
ALTER TABLE `all_goods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблиці `all_sold_goods`
--
ALTER TABLE `all_sold_goods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
