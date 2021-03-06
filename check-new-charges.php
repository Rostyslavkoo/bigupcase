<?php

$type_good = filter_var($_POST['type_good'],
    FILTER_SANITIZE_STRING);
    $type_good = LTRIM(RTRIM(mb_strtolower($type_good)));

$charge_type = mb_strtolower($_POST['charge_type']);

$charge_brand = filter_var($_POST['charge_brand'],
    FILTER_SANITIZE_STRING);
    $charge_brand = LTRIM(RTRIM(mb_strtolower($charge_brand)));

$charge_model = filter_var($_POST['charge_model'],
    FILTER_SANITIZE_STRING);
    $charge_model = LTRIM(RTRIM(mb_strtolower($charge_model)));

$charge_input = filter_var($_POST['charge_input'],
    FILTER_SANITIZE_STRING);
    $charge_input = LTRIM(RTRIM(mb_strtolower($charge_input)));

$color = filter_var($_POST['color'],
    FILTER_SANITIZE_STRING);
      $color = LTRIM(RTRIM(mb_strtolower($color)));

$cod = filter_var($_POST['cod'],
    FILTER_SANITIZE_STRING);


$date = filter_var($_POST['date'],
    FILTER_SANITIZE_STRING);
    $date = mb_strtolower($date);

$first_price = filter_var($_POST['first_price'],
    FILTER_SANITIZE_STRING);
    $first_price = mb_strtolower($first_price);

require "connect.php";

  $mysql->query("INSERT INTO `all_avaible_goods`(`type_good`,`charge_type`,`charge_model`,`charge_input`,`charge_brand`,`color`,`cod`,`date`,`first_price`)
  VALUES('$type_good','$charge_type','$charge_model','$charge_input','$charge_brand','$color','$cod', '$date','$first_price')"); //  вношу дані в таблицю 'sold'

  $mysql->query("INSERT INTO `all_goods`(`type_good`,`charge_type`,`charge_model`,`charge_input`,`charge_brand`,`color`,`cod`,`date`,`first_price`)
  VALUES('$type_good','$charge_type','$charge_model','$charge_input','$charge_brand','$color','$cod', '$date','$first_price')"); //  вношу дані в таблицю 'sold'

        // if(isset($_POST['s_cod'])){
        //   require "connect.php";
        //   $scod = mysqli_real_escape_string($mysql, $_POST['s_cod']);
        //
        //   $query ="DELETE FROM `avaible` WHERE `s_cod`  LIKE '$scod' "; // видаляю товар, `s_cod` якого введено у форму
        //   $result = mysqli_query($mysql, $query) or die("Помилка " . mysqli_error($mysql));
//
//   mysqli_close($mysql);
// }
header("Location:buy_charges.php");
