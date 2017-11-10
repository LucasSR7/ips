<?php
	$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
	echo $hostname;
	echo "<br />". $_SERVER['HTTP_USER_AGENT'];
?>
<html>
<head>
	<title></title>
	<!--
	<script type="text/javascript">
	
	//pega a largura da resolução da tela
	var width = screen.width;
	//pega a altura da resolução da tela
	var height = screen.height;
	
	//verifica se a resolução dará uma boa visão do site
	if (width <= 800 || height <= 600)
		alert("A resolução da tela do seu monitor é " + width + "x" + height + ". Para visualizar o site é recomendado uma resolução de no mínimo 1024x768.");
	else
		alert("A resolução da tela do seu monitor é " + width + "x" + height + ".");
	
</script>
-->
<script type='text/javascript'> 
var largura = screen.width; document.write(largura);
var altura = screen.height; document.write(altura);
alert(largura+''+altura);
</script>
</head>
<body>
</body>
</html>