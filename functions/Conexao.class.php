<?php
    class Conexao{
        public static $instance;

        public static function getInstance(){
            if (!isset(self::$instance)) {
                self::$instance = new PDO('mysql:host=localhost;port=3306;dbname=lench_perfumaria', "root", "", array(PDO::ATTR_PERSISTENT => true, PDO::ATTR_CASE => PDO::CASE_LOWER));
                self::$instance->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
            }
        return self::$instance;
        }
    }
