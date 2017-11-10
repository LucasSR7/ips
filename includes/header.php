<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?php echo $title; ?></title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="http://fastservices.16mb.com/assets/css/plugins.css">
    <link rel="stylesheet" href="http://fastservices.16mb.com/assets/css/app.css">
    <link rel="shortcut icon" type="image/x-icon" href="http://fastservices.16mb.com/assets/images/favicon.ico">
    <script type="text/javascript">
      
    </script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Fast Services - Quiz</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://fastservices.16mb.com/">
            <img width="30" alt="Brand" src="http://fastservices.16mb.com/assets/images/Logo-min.png">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="ativo"><a href="http://fastservices.16mb.com/">Home</a></li>
            <li><a href="http://fastservices.16mb.com/novos-testes">Novos Testes</a></li>
            <li><a href="http://fastservices.16mb.com/melhores-testes">Melhores Testes</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Pesquisar">
              </div>
              <button id="botao" type="submit" class="btn btn-default"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <li><a href="#">
              <?php 
                date_default_timezone_set('America/Sao_Paulo');
                echo "Data: ".date('d/m/Y');
              ?>
            </a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <?php
      $rand = rand(5, 8);
      if($rand <= 6){
        echo '
        <div class="publicidade">
           <p align="center"><a href="http://mundonick.uol.com.br/programas/vikkirpm/95on3d" target="_blank"><img class="img-responsive" src="http://fastservices.16mb.com/assets/images/715872107248996646.gif"></a></p>
        </div>
        ';
      }else{
        echo '
        <div class="publicidade">
          <p align="center"><a href="https://pt.babbel.com/" target="_blank"><img class="img-responsive" src="http://fastservices.16mb.com/assets/images/4098825727002140897-min.png"></a></p>
        </div>
        ';
      }
    ?>
   