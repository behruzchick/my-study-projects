<?php
    class Fruit {
        public $name;
        public $color;

        function __construct($name,$color){
            $this->name = $name; 
            $this->color = $color; 
        }
        function get_name(){
            return $this->name;
        }

        function set_fruit(){

        }
        function get_fruit(){
            return $this->color;
        }
        
    };


    class StreetFruit extends Fruit{
        public $bannana;

        public function __construct($bannana){
            $this->bannana = $bannana;
        }

        public function get_fruit(){
            return $this->bannana;
            return $this->color;
        }
        
    };

    // $apple = new Fruit("Apple","red");
    $mango = new StreetFruit("Yellow","Bannana");

    // var_dump($apple)."<br>";
    echo $mango->get_fruit()."<br>";

?>