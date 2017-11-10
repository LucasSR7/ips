<?php
	$title = "Fast Services - Quão feliz você é?";
	require_once('../functions/Capture.class.php');
	require_once('../includes/header.php');
	$log = new Capture($_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT'], $_SERVER['REQUEST_URI']);
	$log->SendInfo();
?>
	<div class="container" id="cont">
		<div class="content">
			<div class="test-init">
				<h1>Quão feliz você é?</h1>
				<hr />
				<p>Em 20/03/2016</p>
				<a id="facebook" class="btn btn-sm" href="https://twitter.com/fastservices-testes" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
				<a id="twitter" class="btn btn-sm" href="https://www.facebook.com/fastservices-testes/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
				<a id="google" class="btn btn-sm" href="https://plus.google.com/fastservices-testes%C%Oficial" target="_blank"><i class="fa fa-google" aria-hidden="true"></i> Google+</a>
				
				<div class="container questions">
					<h3 id="ques" align="center">Como as pessoas te descreveriam?</h3>
					<hr />
					<h4 id="etapa" align="center">Etapa 1 de 10</h4>
					<div class="quest-padrao" id="002q1" content="Legal/Sonhador(a)">
						<h4 align="center"> <i class="fa fa-circle-thin" aria-hidden="true"></i> Legal/Sonhador(a)</h4>
					</div>
					<div class="quest-padrao" id="002q2" content="Sombrio(a)/Depressivo(a)">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Sombrio(a)/Depressivo(a)</h4>
					</div>
					<div class="quest-padrao" id="002q3" content="Feliz/animado(a)">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Feliz/animado(a)</h4>
					</div>
					<div class="quest-padrao" id="002q4" content="Normal/Pacífico(a)">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Normal/Pacífico(a)</h4>
					</div>
					<div class="quest-padrao" id="002q5" content="Estressado(a)/Pessimista">
						<h4 align="center"><i class="fa fa-circle-thin" aria-hidden="true"></i> Estressado(a)/Pessimista</h4>
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