<?php
// interface Animal {
//   public function makeSound();
// }

// class Cat implements Animal {
//   public function makeSound() {
//     echo "Meow";
//   }
// }

// $animal = new Cat();
// $animal->makeSound();


    class Animal {
        public static $name = "ddddd";
        public static function Sound(){
            echo "Meown <br>";
            echo "Welcome";
        }

        public function __construct(){
            self::Sound();
        }
        public function godbye(){
            echo self::$name();
        }
    }

    new Animal();
    echo Animal::$name;
?>
