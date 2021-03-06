<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/style.min.css">

    <!-- Useful meta tags -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="robots" content="index, follow">
    <meta name="google" content="notranslate">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/perfect-scrollbar.min.js"></script>

    <title>AddCharge | Home</title>
</head>
<body>
<div class="page" id='page'>

<div class="hed-mobile">
  <button class="burger"type="button" id="sidebarToggle">
    <span></span>
</div>

</button>
<aside class="sidebar" id='sidebar'>
  <h1 class="menu-t-t">Home</h1>
  <hr class="hr">
  <h1 class="menu-m-t">Наявність</h1>
  <ul class="ul">
    <li class="menu-li" onclick="document.location='index.php'">Чохли</li>
    <li class="menu-li"onclick="document.location='buy_charges.php'">Зарядки</li>
    <li class="menu-li"onclick="document.location='buy_glass.php'">Скло</li>
  </ul>
    <hr class="hr">
  <h1 class="menu-m-t">Продані</h1>
  <ul class="ul">
    <li class="menu-li" onclick="document.location='sold_cases.php'">Чохли</li>
    <li class="menu-li"onclick="document.location='sold_charges.php'">Зарядки</li>
    <li class="menu-li">Скло</li>
  </ul>

</aside>

<main class="main">


  <div class="left-side">
    <h1 class="top-avaible-text">Таблиця наявних зарядок</h1>

    <div class="search-box">
      <input type="text" id="search" placeholder="Search..." onkeyup="tableSearch()" /><span></span>
    </div>

<div class="limiter">
  <div class="container-table100">
    <div class="wrap-table100">
      <div class="table100 ver1 m-b-110">
        <div class="table100-head">
          <table>
            <thead>
              <tr class="row100 head">
                <th class="cell100 column1">#</th>
                <th class="cell100 column2">Тип та назва зарядки</th>
                <th class="cell100 column3">Колір</th>
                <th class="cell100 column4">Код</th>
                <th class="cell100 column4">Дата</th>
                <th class="cell100 column5">₴Ціна</th>
              </tr>
            </thead>
          </table>
        </div>

<div class="table100-body js-pscroll">
          <?php

//<input type="text" checked="checked" class="form-control" id="search" placeholder="Search..." onkeyup="tableSearch()">
require "connect.php";

echo '<table class="table table-hover table-sm" , id="info-table", width="500">  <tr>';
echo "<tbody>";

$query = "SELECT `id`, concat(`type_good`,' ',`charge_type`,' ',`charge_brand`,' ',`charge_model`,' ',`charge_input`)as'content',`color`,`cod`,`date`,`first_price`
FROM `all_avaible_goods` WHERE `type_good` like 'зарядка' order by id desc";
$i=0;

//$numrows = mysqli_num_rows( $query);
if ($result = mysqli_query($mysql, $query)) {

  while ($row = mysqli_fetch_assoc($result)) { // вибираю дані з ас масиву
      echo  '<tr class="row100 body">'.
      '<td class="cell100 column1">'.
      $row["id"].'<td class="cell100 column2">'.
      $row["content"].'<td class="cell100 column3">'.
      $row["color"].'<td class="cell100 column4">'.
      $row["cod"].'<td class="cell100 column4">'.
      $row["date"].'<td class="cell100 column5">'.'₴ '.
      $row["first_price"].

      '</tr> ';
  }

  mysqli_free_result($result); // видалення
}
echo"</tbody>";
echo "</table>";
echo "</div>";
mysqli_close($mysql);
?>

</div>



  </div>
  </div>
  </div>
  </div>


<div class="right-side">
  <div class="right-form">
    <h1 class="selector-case-existing" id="t_switch">Існуючий</h1>
      <div class="div-checkbox">

<nav>
  <input type="checkbox"  id="switch" onclick="myFunction()" /><label for="switch">Toggle</label>
</nav>
  </div>
    <div id="first-page">
      <h1 class="top-text-new-r-case" id='text1'>Додати Нову Зарядку </h1>
        <form class="input-right-form" action="check-new-charges.php" method="post">
          <input class="from-input" required type="text" name ="type_good" placeholder=" Тип товару">
          <input class="from-input" required type="text" name ="charge_brand" placeholder=" Бренд зарядки">
          <input class="from-input" required type="text" name ="charge_type" placeholder=" Матеріал зарядки">
          <input class="from-input" required type="text" name ="charge_model" placeholder=" Модель">
          <input class="from-input" required type="text" name ="charge_input" placeholder=" Порт">
          <input class="from-input" required type="text" name ="color" placeholder=" Колір ">
          <input class="from-input" required type="text" name ="cod" placeholder="Код">
          <input class="from-input-date" required type="date" name ="date" placeholder="">
          <input class="from-input" required type="text" name ="first_price" placeholder=" ₴Ціна">
          <input class="from-input-submit" type="submit" placeholder="">
        </form>
    </div>
    <div id="second-page">
      <h1 class="top-text-new-r-case">Додати Існуючу зарядку </h1>
      <form class="input-right-form" action="check-new-charges.php" method="post">
<?php
require "connect.php";
      echo '<select class="select"  name="type_good">';
      echo '<option  class="option" selected disabled>Тип товару</option>';
      $query = "SELECT DISTINCT `type_good` AS 'type_good' FROM `all_goods`WHERE `type_good` like 'зарядка' ";
          if($result = mysqli_query($mysql,$query)){
              while($row = mysqli_fetch_assoc($result)){
                  echo '<option class="option">'.$row["type_good"].'</option>';
              }
              mysqli_free_result($result); // видалення
  }
    echo '</select>';

    echo '<select class="select"  name="charge_brand">';
    echo '<option  class="option" selected disabled>Бренд зарядки </option>';
    $query = "SELECT DISTINCT `charge_brand` AS 'charge_brand' FROM `all_goods`WHERE `type_good` like 'зарядка'  ";
    if($result = mysqli_query($mysql,$query)){
      while($row = mysqli_fetch_assoc($result)){
        echo '<option class="option">'.$row["charge_brand"].'</option>';
      }
      mysqli_free_result($result); // видалення
    }
    echo '</select>';

      echo '<select class="select"  name="charge_type">';
      echo '<option  class="option" selected disabled>Матеріал зарядки</option>';
      $query = "SELECT DISTINCT `charge_type` AS 'charge_type' FROM `all_goods`WHERE `type_good` like 'зарядка'";
          if($result = mysqli_query($mysql,$query)){
              while($row = mysqli_fetch_assoc($result)){
                  echo '<option class="option">'.$row["charge_type"].'</option>';
              }
              mysqli_free_result($result); // видалення
  }
    echo '</select>';


      echo '<select class="select"  name="charge_model">';
      echo '<option  class="option" selected disabled>Модель</option>';
      $query = "SELECT DISTINCT `charge_model` AS 'charge_model' FROM `all_goods`WHERE `type_good` like 'зарядка'";
          if($result = mysqli_query($mysql,$query)){
              while($row = mysqli_fetch_assoc($result)){
                  echo '<option class="option">'.$row["charge_model"].'</option>';
              }
              mysqli_free_result($result); // видалення
  }
    echo '</select>';
      echo '<select class="select"  name="charge_input">';
      echo '<option  class="option" selected disabled>Порт</option>';
      $query = "SELECT DISTINCT `charge_input` AS 'charge_input' FROM `all_goods`WHERE `type_good` like 'зарядка'";
          if($result = mysqli_query($mysql,$query)){
              while($row = mysqli_fetch_assoc($result)){
                  echo '<option class="option">'.$row["charge_input"].'</option>';
              }
              mysqli_free_result($result); // видалення
  }
    echo '</select>';


      echo '<select class="select"  name="color">';
      echo '<option  class="option" selected disabled>Колір</option>';
      $query = "SELECT DISTINCT `color` AS 'color' FROM `all_goods`WHERE `type_good` like 'зарядка' ";
          if($result = mysqli_query($mysql,$query)){
              while($row = mysqli_fetch_assoc($result)){
                  echo '<option class="option">'.$row["color"].'</option>';
              }
              mysqli_free_result($result); // видалення
  }
    echo '</select>';
  echo '<input class="from-input" required type="text" name ="cod" placeholder="Код">';


echo'<input class="from-input-date" name="date" type="date" placeholder="">';



echo'<input class="from-input" name="first_price" type="text" placeholder="₴Ціна">';

?>
      <input class="from-input-submit" type="submit" placeholder="">
    </form>

    </div>
      </div>

    </div>

</main>
</div>



    <script src="assets/js/app.js"></script>
    <script>
    function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("switch");

    // Get the output text
  var block_case_new = document.getElementById("first-page");
  var block_case_exsiting = document.getElementById("second-page");


    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      block_case_new.style.display = "none";
          block_case_exsiting.style.display = "block";
    } else {
      block_case_new.style.display = "block";
      block_case_exsiting.style.display = "none";
    }
    }
    </script>
    <script>
    const mediaQuery = window.matchMedia('(min-width: 1100px)')

    // Check if the media query is true
    if (mediaQuery.matches) {
      $('.js-pscroll').each(function(){
        var ps = new PerfectScrollbar(this);

        $(window).on('resize', function(){
          ps.update();
        })
      });
    }else{
console.log('nema')



}


    </script>
    <script>
function tableSearch() {
  var phrase = document.getElementById('search');
  var table = document.getElementById('info-table');
  var regPhrase = new RegExp(phrase.value, 'i');
  var flag = false;
  for (var i = 1; i < table.rows.length; i++) {
    flag = false;
    for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
      if (flag) break;
    }
    if (flag) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }

  }
}
</script>
</body>
</html>
