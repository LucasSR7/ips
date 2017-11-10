<?php
	require_once('functions/Capture.class.php');
	$log = new Capture(NULL, NULL, NULL);
?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?php echo $title; ?></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://localhost/projeto/assets/css/plugins.css">
    <link rel="stylesheet" href="http://localhost/projeto/assets/css/app.css">
    <link rel="shortcut icon" type="image/x-icon" href="http://localhost/projeto/assets/images/favicon.ico">
    <script src="http://localhost/projeto/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="http://localhost/projeto/bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
    <script src="http://localhost/projeto/assets/js/main.js"></script>
    <script src="http://localhost/projeto/assets/js/main2.js"></script>

    <script>
      $(document).ready(function(){
        var largura = screen.width;
        var lucas = document.getElementById("lol").value = largura;
        alert("dasdasd");
      });
    </script>
  </head>
  <body>
  	<?php
  		echo $log->select();
  	?>
    <form action="">
        <input type="text" class="form-control" id="lol" value="">
    </form>
  </body>
</html>