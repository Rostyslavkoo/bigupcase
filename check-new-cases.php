<?php

$type_good = filter_var($_POST['type_good'],
    FILTER_SANITIZE_STRING);
    $type_good = mb_strtolower($type_good);

$type_cases = mb_strtolower($_POST['type_cases']);


$brand = filter_var($_POST['brand'],
    FILTER_SANITIZE_STRING);
    $brand = mb_strtolower($brand);

$phone_brand = filter_var($_POST['phone_brand'],
    FILTER_SANITIZE_STRING);
    $phone_brand = mb_strtolower($phone_brand);

$phone_model = filter_var($_POST['phone_model'],
    FILTER_SANITIZE_STRING);
    $phone_model = mb_strtolower($phone_model);

$color = filter_var($_POST['color'],
    FILTER_SANITIZE_STRING);
    $color = mb_strtolower($color);

$date = filter_var($_POST['date'],
    FILTER_SANITIZE_STRING);
    $date = mb_strtolower($date);

$price = filter_var($_POST['price'],
    FILTER_SANITIZE_STRING);
    $price = mb_strtolower($price);

require "connect.php";

  $mysql->query("INSERT INTO `cases`(`type_good`,`type_case`,`case_brand`,`phone_brand`,`phone_model`,`color`,`date`,`price`)
  VALUES('$type_good','$type_cases','$brand','$phone_brand','$phone_model','$color', '$date','$price')"); //  вношу дані в таблицю 'sold'

        // if(isset($_POST['s_cod'])){
        //   require "connect.php";
        //   $scod = mysqli_real_escape_string($mysql, $_POST['s_cod']);
        //
        //   $query ="DELETE FROM `avaible` WHERE `s_cod`  LIKE '$scod' "; // видаляю товар, `s_cod` якого введено у форму
        //   $result = mysqli_query($mysql, $query) or die("Помилка " . mysqli_error($mysql));
//
//   mysqli_close($mysql);
// }
header("Location:/");
