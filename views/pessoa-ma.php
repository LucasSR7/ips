<?php
	$title = "Fast Services - Você é uma pessoa má?";
	$largura = "<script type=text/javascript> var largura = screen.width; document.write(largura);</script>";
  	$altura = "<script type=text/javascript> var altura = screen.height; document.write(altura);</script>";
	require_once('../functions/Capture.class.php');
	require_once('../includes/header.php');
	$log = new Capture($_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT'], $largura."x".$altura);
	$log->SendInfo();
?>
	<div class="container" id="cont">
		<div class="content">
			<div class="test-init">
				<h1>Você é uma pessoa má?</h1>
				<hr />
				<p>Em 09/02/2016</p>
				<a id="facebook" class="btn btn-sm" href="https://twitter.com/fastservices-testes" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
				<a id="twitter" class="btn btn-sm" href="https://www.facebook.com/fastservices-testes/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
				<a id="google" class="btn btn-sm" href="https://plus.google.com/fastservices-testes%C%Oficial" target="_blank"><i class="fa fa-google" aria-hidden="true"></i> Google+</a>
				
				<div class="container questions">
					<h3 id="ques" align="center">Seu amigo(a) te contou que acabou de terminar um relacionamento. Você: </h3>
					<hr />
					<h4 id="etapa" align="center">Etapa 1 de 10</h4>
					<div class="quest-padrao" id="001q1" content="Me ofereço pra planejar uma vingança">
						<h4 align="center"> <i class="fa fa-circle-thin" aria-hidden="true"></i> Me ofereço pra planejar uma vingança</h4>
					</div>
					<div class="quest-padrao" id="001q2" content="Tento dar bons conselhos">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Tento dar bons conselhos</h4>
					</div>
					<div class="quest-padrao" id="001q3" content="Levo ele(a) pra sair e se divertir">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Levo ele(a) pra sair e se divertir</h4>
					</div>
					<div class="quest-padrao" id="001q4" content="Mudo de assunto não quero falar sobre isso">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Mudo de assunto não quero falar sobre isso</h4>
					</div>
				</div>
				<div class="container" id="resultado"></div>
				<div style="text-align: center;" id="pontos"><h4>Pontos: </h4></div>
			</div>
		</div>
	</div>
<?php
	require_once('../includes/footer.php');
?>