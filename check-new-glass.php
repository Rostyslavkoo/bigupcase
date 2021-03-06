<?php

$type_good = filter_var($_POST['type_good'],
    FILTER_SANITIZE_STRING);
    $type_good = mb_strtolower($type_good);

$case_type = mb_strtolower($_POST['case_type']);


$case_brand = filter_var($_POST['case_brand'],
    FILTER_SANITIZE_STRING);
    $case_brand = mb_strtolower($case_brand);

$phone_brand = filter_var($_POST['phone_brand'],
    FILTER_SANITIZE_STRING);
    $phone_brand = mb_strtolower($phone_brand);

$phone_model = filter_var($_POST['phone_model'],
    FILTER_SANITIZE_STRING);
    $phone_model = mb_strtolower($phone_model);

$color = filter_var($_POST['color'],
    FILTER_SANITIZE_STRING);
    $color = mb_strtolower($color);

$cod = filter_var($_POST['cod'],
    FILTER_SANITIZE_STRING);


$date = filter_var($_POST['date'],
    FILTER_SANITIZE_STRING);
    $date = mb_strtolower($date);

$first_price = filter_var($_POST['first_price'],
    FILTER_SANITIZE_STRING);
    $first_price = mb_strtolower($first_price);

require "connect.php";

  $mysql->query("INSERT INTO `all_avaible_goods`(`type_good`,`case_type`,`case_brand`,`phone_brand`,`phone_model`,`color`,`cod`,`date`,`first_price`)
  VALUES('$type_good','$case_type','$case_brand','$phone_brand','$phone_model','$color','$cod', '$date','$first_price')"); //  вношу дані в таблицю 'sold'

  $mysql->query("INSERT INTO `all_goods`(`type_good`,`case_type`,`case_brand`,`phone_brand`,`phone_model`,`color`,`cod`,`date`,`first_price`)
  VALUES('$type_good','$case_type','$case_brand','$phone_brand','$phone_model','$color','$cod', '$date','$first_price')"); //  вношу дані в таблицю 'sold'

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
