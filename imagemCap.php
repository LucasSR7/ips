<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script>
      $(document).ready(function(){
        var largura = screen.width;
        var altura = screen.height;
        $("#resolucao").val(largura+ "x"+ altura);
        /*
          window.onload = function(){
            document.getElementById("teste").submit();
          }
        */
      });

    </script>
    <style>
      input{display: block;}
    </style>
  </head>
  <body>
    <form action="" method="" name="" id="" style="width: 400px;">
      <input type="text" id="ip" name="ip" value="<?php echo $_SERVER['REMOTE_ADDR']; ?>">
      <input type="text" id="sistema" name="sistema" value="<?php echo $_SERVER['HTTP_USER_AGENT']; ?>">
      <input type="text" id="resolucao" name="resolucao">
    </form>
  </body>
</html>