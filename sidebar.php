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
    
    <title></title>
</head>
<body>
<div class="page">



<main class="main">

  <aside class="sidebar">
  ds
  </aside>
  
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
</body>
</html>
