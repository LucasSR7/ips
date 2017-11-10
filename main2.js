/*!
* jQuery UI Teste
* * Copyright (c) 2017 Fast Services
https://fastservices.16mb.com
*/

$(document).ready(function(){
	var TotalPontos = 0;

	var etapa1 = function(){
		$("#etapa").text("Etapa 2 de 10");
		$("#ques").text("Como você está se sentindo nesse exato momento?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Confuso(a)/Preocupado(a)').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Confuso(a)/Preocupado(a)');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Muito bem/Animado(a)').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Muito bem/Animado(a)');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Preguiçoso(a)/Entediado(a)').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Preguiçoso(a)/Entediado(a)');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Bravo(a)/Triste/Doente').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Bravo(a)/Triste/Doente');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Bem/Normal, só cansado').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Bem/Normal, só cansado');
	};

	var etapa2 = function(){
		$("#etapa").text("Etapa 3 de 10");
		$("#ques").text("Se fosse possível, você gostaria de sair com você mesmo?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Seria um pesadelo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Seria um pesadelo');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Claro eu tentaria!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Claro eu tentaria!');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não, tenho muitas questões').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Não, tenho muitas questões');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não sei, isso é muito estranho').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Não sei, isso é muito estranho');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Porque não? Eu me acho demais!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Porque não? Eu me acho demais!');
	};

	var etapa3 = function(){
		$("#etapa").text("Etapa 4 de 10");
		$("#ques").text("Como você descreveria sua família em uma palavra?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Paraíso, tenho sorte de ter uma família maravilhosa').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Paraíso, tenho sorte de ter uma família maravilhosa');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Decente, mas nada demais').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Decente, mas nada demais');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Deficiente. Ninguém me entende/Não tenho família').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Deficiente. Ninguém me entende/Não tenho família');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Legal, a gente briga, ri, e nos amamos').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Legal, a gente briga, ri, e nos amamos');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Inferno, gostaria de fugir').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Inferno, gostaria de fugir');
	}

	var etapa4 = function(){
		$("#etapa").text("Etapa 5 de 10");
		$("#ques").text("Você tem amigos?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> O que são essas coisas chamadas amigos?').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'O que são essas coisas chamadas amigos?');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sim, eles são irritantes').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Sim, eles são irritantes');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Inimigos talvez, mas não amigos de verdade').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Inimigos talvez, mas não amigos de verdade');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sim e são demais. Tenho sorte de tê-los comigo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Sim e são demais. Tenho sorte de tê-los comigo');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Um(a) bom(a) amigo(a)/Amigos normais').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Um(a) bom(a) amigo(a)/Amigos normais');
	};

	var etapa5 = function(){
		$("#etapa").text("Etapa 6 de 10");
		$("#ques").text("Você está apaixonado(a)?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sim, a vida é bela!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Sim, a vida é bela!');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não, não estou!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Não, não estou!');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sim, mas ele(a) não me retribuiu o amor').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Sim, mas ele(a) não me retribuiu o amor');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não sei muito bem o que é isso ai').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Não sei muito bem o que é isso ai');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não mais, estou muito ferido(a)').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Não mais, estou muito ferido(a)');
	};

	var etapa6 = function(){
		$("#etapa").text("Etapa 7 de 10");
		$("#ques").text("Com que frequência você sorri de verdade?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Eu nunca paro de contar').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Eu nunca paro de contar');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> De vez em quando, mas preciso de um bom motivo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'De vez em quando, mas preciso de um bom motivo');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Muitas vezes por dia').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Muitas vezes por dia');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Pelo menos uma vez por dia').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Pelo menos uma vez por dia');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Eu não me lembro quando foi a última vez que sorri').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Eu não me lembro quando foi a última vez que sorri');
	};

	var etapa7 = function(){
		$("#etapa").text("Etapa 8 de 10");
		$("#ques").text("'Não deixe a felicidade acontecer com você!' O que você acha dessa frase?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Errada! Todo mundo deve ser feliz').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Errada! Todo mundo deve ser feliz');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> É meu lema de vida').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'É meu lema de vida');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não faz sentido, não entendi').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Não faz sentido, não entendi');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Pode ser verdade').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Pode ser verdade');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Haha, é engraçada').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Haha, é engraçada');
	};

	var etapa8 = function(){
		$("#etapa").text("Etapa 9 de 10");
		$("#ques").text("'Maria foi pra praia. Ela estava nadando tranquila, quando de repente...");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> O tubarão a comeu').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'O tubarão a comeu');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Um tsunami atingiu a praia e todos morreram').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Um tsunami atingiu a praia e todos morreram');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Ela viu uma água viva dormindo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Ela viu uma água viva dormindo');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Os golfinhos passaram a acompanhá-la').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Os golfinhos passaram a acompanhá-la');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Termina a frase, por favor!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Termina a frase, por favor!');
	};

	var etapa9 = function(){
		$("#etapa").text("Etapa 10 de 10");
		$("#ques").text("Quão feliz você acha que é?");

		$("#002q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Estou mal, me ajuda!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q1").attr('content', 'Estou mal, me ajuda!');

		$("#002q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Nem feliz, nem infeliz').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q2").attr('content', 'Nem feliz, nem infeliz');

		$("#002q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Um tanto feliz. Mas nada perfeito').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q3").attr('content', 'Um tanto feliz. Mas nada perfeito');

		$("#002q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Muito feliz, obrigado').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q4").attr('content', 'Muito feliz, obrigado');

		$("#002q5 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Nem um pouco, mas é assim que as coisas são').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#002q5").attr('content', 'Nem um pouco, mas é assim que as coisas são');
	};

	var etapa10 = function(){
		$(".questions").css("display", "none");
		if(TotalPontos <= 60){
			$("#resultado").attr('class', 'container alert alert-danger').html("<h2 align='center'>De 0 a 40 pontos</h2><h4 align='center' id='res'><b>TRISTE</b>. Nada vai dar certo se a gente não se amar em primeiro lugar. Se você não conseguir fazer isso sozinho(a), talvez você precise buscar ajuda com especialistas para resolver seus problemas. De qualquer forma, antes que você pense em se machucar, saia do computador e vá fazer algum exercício: Exercício libera endorfina. Endorfinas te deixam feliz!</h4>");
		}else if(TotalPontos >= 70 && TotalPontos <= 150){
			$("#resultado").attr('class', 'container alert alert-warning').html("<h2 align='center'>De 50 a 110 pontos</h2><h4 align='center' id='res'><b>INFELIZ</b>. Você normalmente se sente só o pó da rabiola. Fique firme e tente ver o lado bom das coisas. Quando mais otimista você for, mais coisas boas vão vir ao seu encontro. Seja paciente e saia e interaja com pessoas felizes por um tempo. É contagiante! 'Você tem muitas opções na vida, nunca deixe que desistir seja uma delas'</h4>");
		}else if(TotalPontos >= 160 && TotalPontos <= 240){
			$("#resultado").attr('class', 'container alert alert-info').html("<h2 align='center'>De 50 a 110 pontos</h2><h4 align='center' id='res'><b>NEUTRO(A)</b>. Você só tem algumas faíscas de esperança de vez em quando, mas você não tem motivos para ser infeliz. Quem sabe? Talvez você tenha sofrido algo recentemente, ou talvez você nunca tenha se sentido feliz DE VERDADE. Desencana um pouco e tente ver o mundo como um lugar feliz. 'A felicidade não é algo que vem pronto. Ela surge das nossas próprias ações!'</h4>");
		}else if(TotalPontos > 250){
			$("#resultado").attr('class', 'container alert alert-success').html("<h2 align='center'>De 50 a 110 pontos</h2><h4 align='center' id='res'><b>FELIZ</b>. Quase tudo o que você faz e não importa onde vá, pode ser uma experiência feliz. Nada mal. Você sabe que pode ficar pra baixo ás vezes, mas a vida segue. 'Cada minuto que você fica irritado(a) você perde sessenta segundos de felicidade!'</h4>");
		}
	}

	/* 
	A - 0
	B - 20
	C - 30
	D - 40
	E - 10
	*/

	$("#002q1").click(function(){
		if($(this).attr('content') == "Legal/Sonhador(a)"){
			TotalPontos = 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa1();
		}else if($(this).attr('content') == "Confuso(a)/Preocupado(a)"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Seria um pesadelo"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Paraíso, tenho sorte de ter uma família maravilhosa"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "O que são essas coisas chamadas amigos?"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Sim, a vida é bela!"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Eu nunca paro de contar"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Errada! Todo mundo deve ser feliz"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "O tubarão a comeu"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Estou mal, me ajuda!"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa10();
		}
	});
	//2----------------------------------------------------------------------------------------------//
	$("#002q2").click(function(){
		if($(this).attr('content') == "Sombrio(a)/Depressivo(a)"){
			TotalPontos = 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa1();
		}else if($(this).attr('content') == "Muito bem/Animado(a)"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Claro eu tentaria!"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Decente, mas nada demais"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Sim, eles são irritantes"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Não, não estou!"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "De vez em quando, mas preciso de um bom motivo"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "É meu lema de vida"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Um tsunami atingiu a praia e todos morreram"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Nem feliz, nem infeliz"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa10();
		}
	});
	//3----------------------------------------------------------------------------------------------//
	$("#002q3").click(function(){
		if($(this).attr('content') == "Feliz/animado(a)"){
			TotalPontos = 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa1();
		}else if($(this).attr('content') == "Preguiçoso(a)/Entediado(a)"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Não, tenho muitas questões"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Deficiente. Ninguém me entende/Não tenho família"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Inimigos talvez, mas não amigos de verdade"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Sim, mas ele(a) não me retribuiu o amor"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Muitas vezes por dia"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Não faz sentido, não entendi"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Ela viu uma água viva dormindo"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Um tanto feliz. Mas nada perfeito"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa10();
		}
	});
	//4----------------------------------------------------------------------------------------------//
	$("#002q4").click(function(){
		if($(this).attr('content') == "Normal/Pacífico(a)"){
			TotalPontos = 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa1();
		}else if($(this).attr('content') == "Bravo(a)/Triste/Doente"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Não sei, isso é muito estranho"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Legal, a gente briga, ri, e nos amamos"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Sim e são demais. Tenho sorte de tê-los comigo"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Não sei muito bem o que é isso ai"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Pelo menos uma vez por dia"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Pode ser verdade"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Os golfinhos passaram a acompanhá-la"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Muito feliz, obrigado"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa10();
		}
	});
	//5----------------------------------------------------------------------------------------------//
	$("#002q5").click(function(){
		if($(this).attr('content') == "Estressado(a)/Pessimista"){
			TotalPontos = 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa1();
		}else if($(this).attr('content') == "Bem/Normal, só cansado"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Porque não? Eu me acho demais!"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Inferno, gostaria de fugir"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Um(a) bom(a) amigo(a)/Amigos normais"){
			TotalPontos = TotalPontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Não mais, estou muito ferido(a)"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Eu não me lembro quando foi a última vez que sorri"){
			TotalPontos = TotalPontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Haha, é engraçada"){
			TotalPontos = TotalPontos + 40;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Termina a frase, por favor!"){
			TotalPontos = TotalPontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Nem um pouco, mas é assim que as coisas são"){
			TotalPontos = TotalPontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + TotalPontos + "</b></h4>");
			etapa10();
		}
	});
});

