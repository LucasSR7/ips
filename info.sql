
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 16/09/2017 às 05:46:26
-- Versão do Servidor: 10.1.24-MariaDB
-- Versão do PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `u779311139_luc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `info`
--

CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(21) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sistema` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hora` varchar(7) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

--
-- Extraindo dados da tabela `info`
--

INSERT INTO `info` (`id`, `ip`, `sistema`, `hora`) VALUES
(4, '191.33.89.14', 'Mozilla/5.0 (Windows NT 6.1; rv:55.0) Gecko/20100101 Firefox/55.0 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:29'),
(5, '187.22.110.44', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:31'),
(3, '179.125.183.94', 'Mozilla/5.0 (Windows NT 6.1; rv:55.0) Gecko/20100101 Firefox/55.0 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '20:27'),
(6, '179.241.202.67', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:32'),
(7, '187.7.26.51', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 YaBrowser/17.7.1.791 Yowser/2.5 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:37'),
(8, '186.195.118.8', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:42'),
(9, '177.45.131.157', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:45'),
(10, '177.188.253.96', 'Mozilla/5.0 (Linux; Android 5.1.1; SM-J120H Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Mobile Safari/537.36 - Mobile - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:47'),
(11, '213.180.203.30', 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots) - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '22:48'),
(12, '187.6.129.55', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36 OPR/47.0.2631.80 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:05'),
(13, '131.161.108.132', 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J500M Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Mobile Safari/537.36 - Mobile - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:07'),
(14, '66.249.85.26', 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J500M Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Mobile Safari/537.36 - Mobile - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:07'),
(15, '66.249.85.25', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:12'),
(16, '186.247.20.21', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:47'),
(17, '45.65.156.166', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '23:54'),
(18, '177.10.53.137', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:55.0) Gecko/20100101 Firefox/55.0 - Computador - <script type=text/javascript> var largura = screen.width; document.write(largura);</script>x<script type=text/javascript> var altura = screen.height; document.write(altura);</script>', '00:51');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

https://mundinhovirtual.000webhostapp.com/users-gloove-data

01 03 05 
11 13 15
20 23 25