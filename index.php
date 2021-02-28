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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/perfect-scrollbar.min.js



    "></script>

    <title>AddCase | Home</title>
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
    <li class="menu-li">Чохли</li>
    <li class="menu-li">Зарядки</li>
    <li class="menu-li">Скло</li>
  </ul>
    <hr class="hr">
  <h1 class="menu-m-t">Продані</h1>
  <ul class="ul">
    <li class="menu-li">Чохли</li>
    <li class="menu-li">Зарядки</li>
    <li class="menu-li">Скло</li>
  </ul>

</aside>

<main class="main">


  <div class="left-side">
    <h1 class="top-avaible-text">Таблиця наявних чохлів</h1>

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
                <th class="cell100 column2">Тип та назва чохла</th>
                <th class="cell100 column3">Колір</th>
                <th class="cell100 column4">Дата</th>
                <th class="cell100 column5">₴ Ціна</th>
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

$query = "SELECT * , concat(`type_case`,' ',`case_brand`,' ', `phone_brand`,' ', `phone_model`) as 'concat-name' FROM `cases` ORDER by id DESC ";
$i=0;

//$numrows = mysqli_num_rows( $query);
if ($result = mysqli_query($mysql, $query)) {

  while ($row = mysqli_fetch_assoc($result)) { // вибираю дані з ас масиву
      echo  '<tr class="row100 body">'.
      '<td class="cell100 column1">'.
      $row["id"].'<td class="cell100 column2">'.
      $row["concat-name"].'<td class="cell100 column3">'.
      $row["color"].'<td class="cell100 column4">'.
      $row["date"].'<td class="cell100 column5">'.
      $row["price"].' ₴'.

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
    <div id="new-case">
    <h1 class="top-text-new-r-case" id='text1'>Додати Новий чохол </h1>
    <form class="input-right-form" action="check-new-cases.php" method="post">

      <input class="from-input" required type="text" name ="type_good" placeholder=" Тип товару">
      <input class="from-input" required type="text" name ="type_cases" placeholder=" Тип Чохла">
      <input class="from-input" required type="text" name ="brand" placeholder=" Бренд Чохла">
      <input class="from-input" required type="text" name ="phone_brand" placeholder=" Марка телефона ">
      <input class="from-input" required type="text" name ="phone_model" placeholder=" Модель">
      <input class="from-input" required type="text" name ="color" placeholder=" Колір ">
      <input class="from-input-date" required type="date" name ="date" placeholder="">
      <input class="from-input" required type="text" name ="price" placeholder=" ₴Ціна">


      <input class="from-input-submit" type="submit" placeholder=" Тип товару">
    </form>

    </div>
    <div id="existing-case">

    <h1 class="top-text-new-r-case">Додати Існуючий чохол </h1>
    <form class="input-right-form" action="check-new-cases.php" method="post">
  <?php
        require "connect.php";
              echo '<select class="select"  name="type_good">';
              echo '<option  class="option" selected disabled>Тип товару</option>';
              $query = "SELECT DISTINCT `type_good` AS 'type-good' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["type-good"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>
  <?php
        require "connect.php";
              echo '<select class="select"  name="type_cases">';
              echo '<option  class="option" selected disabled>Тип чохла</option>';
              $query = "SELECT DISTINCT `type_case` AS 'type-case' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["type-case"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>

  <?php
        require "connect.php";
              echo '<select class="select"  name="brand">';
              echo '<option  class="option" selected disabled>Бренд Чохла </option>';
              $query = "SELECT DISTINCT `case_brand` AS 'case_brand' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["case_brand"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>
  <?php
        require "connect.php";
              echo '<select class="select"  name="phone_brand">';
              echo '<option  class="option" selected disabled>Марка телефона</option>';
              $query = "SELECT DISTINCT `phone_brand` AS 'phone_brand' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["phone_brand"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>
  <?php
        require "connect.php";
              echo '<select class="select"  name="phone_model">';
              echo '<option  class="option" selected disabled>Модель</option>';
              $query = "SELECT DISTINCT `phone_model` AS 'phone_model' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["phone_model"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>
  <?php
        require "connect.php";
              echo '<select class="select"  name="color">';
              echo '<option  class="option" selected disabled>Колір</option>';
              $query = "SELECT DISTINCT `color` AS 'color' FROM `cases` ";
                  if($result = mysqli_query($mysql,$query)){
                      while($row = mysqli_fetch_assoc($result)){
                          echo '<option class="option">'.$row["color"].'</option>';
                      }
                      mysqli_free_result($result); // видалення
          }
            echo '</select>';
  ?>

    <input class="from-input-date" name="date" type="date" placeholder="">


    <?php
          require "connect.php";
                echo '<select class="select"  name="price">';
                echo '<option  class="option" selected disabled>₴Ціна</option>';
                $query = "SELECT DISTINCT `price` AS 'price' FROM `cases` ";
                    if($result = mysqli_query($mysql,$query)){
                        while($row = mysqli_fetch_assoc($result)){
                            echo '<option class="option">'.$row["price"].'</option>';
                        }
                        mysqli_free_result($result); // видалення
            }
              echo '</select>';
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
  var block_case_new = document.getElementById("new-case");
  var block_case_exsiting = document.getElementById("existing-case");


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

    $('.js-pscroll').each(function(){
      var ps = new PerfectScrollbar(this);

      $(window).on('resize', function(){
        ps.update();
      })
    });


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
