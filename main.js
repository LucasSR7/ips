/*!
* jQuery UI Teste
* * Copyright (c) 2017 Fast Services
https://fastservices.16mb.com
*/

$(document).ready(function(){
	$("#botao").click(function(){
		alert("Erro ao realizar a busca. Tente mais tarde!");
	});

	var pontos = 0;

	var etapa2 = function(){
		$("#etapa").text("Etapa 2 de 10");
		$("#ques").text("Alguém deixou cair muito dinheiro na rua, e só você viu. O que você faz?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Pego o dinheiro pra mim').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Pego o dinheiro pra mim');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Pego o dinheiro e devolvo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Pego o dinheiro e devolvo');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Passo e gasto ali mesmo pra não deixar evidências').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Passo e gasto ali mesmo pra não deixar evidências');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Depende de quanto dinheiro estamos falando').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Depende de quanto dinheiro estamos falando');
	}

	var etapa3 = function(){
		$("#etapa").text("Etapa 3 de 10");
		$("#ques").text("Você está sentado no ônibus e entra uma idosa. Você:");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Exijo que alguém na primeira fila ceda seu lugar').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Exijo que alguém na primeira fila ceda seu lugar');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Dou meu lugar, sem nem pensar').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Dou meu lugar, sem nem pensar');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Finjo que estou dormindo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Finjo que estou dormindo');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Nada').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Nada');
	}

	var etapa4 = function(){
		$("#etapa").text("Etapa 4 de 10");
		$("#ques").text("Como você costuma lutar por coisas que considera injustas?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Gritando e batendo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Gritando e batendo');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Discutindo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Discutindo');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Falando calmamente').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Falando calmamente');
		
		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não é natural pra mim defender injustiças').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Não é natural pra mim defender injustiças');
	}

	var etapa5 = function(){
		$("#etapa").text("Etapa 5 de 10");
		$("#ques").text("Um cachorro de rua começa a latir pra você. O que você faz?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Nada, não demonstro medo, nem nada').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Nada, não demonstro medo, nem nada');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Pego o pau e vou pra cima dele').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Pego o pau e vou pra cima dele');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Nada, Saio correndo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Nada, Saio correndo');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Atravesso a rua, e desvio o caminho').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Atravesso a rua, e desvio o caminho');
	}

	var etapa6 = function(){
		$("#etapa").text("Etapa 6 de 10");
		$("#ques").text("Você já ouviu alguém dizer que você o(a) traiu?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não, traição é para os fracos').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Não, traição é para os fracos');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sim, mas foi um mal entendido').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Sim, mas foi um mal entendido');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Só é traição se ele(a) saber').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Só é traição se ele(a) saber');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Quem nunca!').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Quem nunca!');
	}

	var etapa7 = function(){
		$("#etapa").text("Etapa 7 de 10");
		$("#ques").text("Você vê alguém na rua tropeçando e caindo de cara no chão. Você: ");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Rolo no chão de tanto rir').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Rolo no chão de tanto rir');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Começo a rir disfarçadamente e vou embora').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Começo a rir disfarçadamente e vou embora');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não faço nada, continuo caminhando').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Não faço nada, continuo caminhando');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Corro pra ajudar').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Corro pra ajudar');
	}

	var etapa8 = function(){
		$("#etapa").text("Etapa 8 de 10");
		$("#ques").text("O que você pensa ao ver pessoas que moram na rua?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Sinto pena, mas ignoro').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Sinto pena, mas ignoro');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Tenho vontade de ajudar, muitas vezes ajudo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Tenho vontade de ajudar, muitas vezes ajudo');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Finjo que não existem quando falam comigo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Finjo que não existem quando falam comigo');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Cada macaco no seu galho').slideUp( 200 ).delay( 200 ).fadeIn( 200 );4
		$("#001q4").attr('content', 'Cada macaco no seu galho');
	}

	var etapa9 = function(){
		$("#etapa").text("Etapa 9 de 10");
		$("#ques").text("Você costuma fazer bullying ou piada sobre o físico das pessoas?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Não').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Não');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> As vezes').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'As vezes');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Depende do tipo de questão fisica').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Depende do tipo de questão fisica');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Claro, é demais').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Claro, é demais');
	}

	var etapa10 = function(){
		$("#etapa").text("Etapa 10 de 10");
		$("#ques").text("O que você diria para o criador desse teste?");

		$("#001q1 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Você é o maior idiota do mundo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q1").attr('content', 'Você é o maior idiota do mundo');

		$("#001q2 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Aprecio o esforço, mas perdi meu tempo').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q2").attr('content', 'Aprecio o esforço, mas perdi meu tempo');

		$("#001q3 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Que teste ruim').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q3").attr('content', 'Que teste ruim');

		$("#001q4 h4").html('<i class="fa fa-circle-thin" aria-hidden="true"></i> Adorei').slideUp( 200 ).delay( 200 ).fadeIn( 200 );
		$("#001q4").attr('content', 'Adorei');
	}

	var etapa11 = function(){
		$(".questions").css("display", "none");
		if(pontos <= 40){
			$("#resultado").attr('class', 'container alert alert-success').html("<h2 align='center'>De 0 a 40 pontos</h2><h4 align='center' id='res'><b>PESSOA MUITO BOA</b>. Você sempre está disposto(a) a dar seu melhor aos outros SEMPRE. Você é uma pessoa bondosa que tem como objetivo buscar o bem de tudo e de todos. Parabéns!</h4>");
		}else if(pontos >= 50 && pontos <= 110){
			$("#resultado").attr('class', 'container alert alert-success').html("<h2 align='center'>De 50 a 110 pontos</h2><h4 align='center' id='res'><b>BOA PESSOA</b>. Você é uma boa pessoa, no geral. Em algumas situações você pode agir com um certo desapego e não estar muito aí para os outros, seus problemas e preocupações. Mas no geral, você se preocupa!</h4>");
		}else if(pontos >= 120 && pontos <= 220){
			$("#resultado").attr('class', 'container alert alert-warning').html("<h2 align='center'>De 120 a 220 pontos</h2><h4 align='center' id='res'><b>ALGUÉM COM MALDADE EVENTUAL</b>. Você provavelmente sabe que algumas vezes  toma decições que não são lá as mais solidarias. Dependendo da ocasião, você pode até agir de uma forma um tanto egoista. O bom é que ainda há tempo para resolver isso. Tente agir com mais empatia. Você vai ser uma pessoa melhor e fortelecer seus relacionamentos</h4>");
		}else if(pontos >= 230 && pontos <= 300){
			$("#resultado").attr('class', 'container alert alert-danger').html("<h2 align='center'>De 230 a 300 pontos</h2><h4 align='center' id='res'><b>GERALMENTE MAU/MÁ</b>. Você provavelmente se diverte fazeno bullying nos outros sem se importar muito  com o bem comum, ou como os outros sentem. Pode ser que você seja assim para passar uma imagem de durão/durona, ou por uma falta de empatia. Um conselho seja mais solidario(a) e maduro(a). Se não mundo continuará egoista e decadente!</h4>");
		}
	}

    //----------------------------------------------------------------------------------------------//
	$("#001q1").click(function(){
		if($(this).attr('content') == "Me ofereço pra planejar uma vingança"){
			pontos = 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Pego o dinheiro pra mim"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Exijo que alguém na primeira fila ceda seu lugar"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Gritando e batendo"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Nada, não demonstro medo, nem nada"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa6();
		}
		else if($(this).attr('content') == "Não, traição é para os fracos"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa7();
		}
		else if($(this).attr('content') == "Rolo no chão de tanto rir"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa8();
		}
		else if($(this).attr('content') == "Sinto pena, mas ignoro"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Não"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa10();
		}else if($(this).attr('content') == "Você é o maior idiota do mundo"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa11();
		}
	});
    //----------------------------------------------------------------------------------------------//
	$("#001q2").click(function(){
		if($(this).attr('content') == "Tento dar bons conselhos"){
			pontos = 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Pego o dinheiro e devolvo"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Dou meu lugar, sem nem pensar"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Discutindo"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Pego o pau e vou pra cima dele"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Sim, mas foi um mal entendido"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Começo a rir disfarçadamente e vou embora"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Tenho vontade de ajudar, muitas vezes ajudo"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "As vezes"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa10();
		}else if($(this).attr('content') == "Aprecio o esforço, mas perdi meu tempo"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa11();
		}
	});
	//--------------------------------------------------------------------------------------------//
	$("#001q3").click(function(){
		if($(this).attr('content') == "Levo ele(a) pra sair e se divertir"){
			pontos = 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Passo e gasto ali mesmo pra não deixar evidências"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Finjo que estou dormindo"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Falando calmamente"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa5();
		}else if($(this).attr('content') == "Nada, Saio correndo"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Só é traição se ele(a) saber"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Não faço nada, continuo caminhando"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Finjo que não existem quando falam comigo"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Depende do tipo de questão fisica"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa10();
		}else if($(this).attr('content') == "Que teste ruim"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa11();
		}
	});
	 //--------------------------------------------------------------------------------------------//
	$("#001q4").click(function(){
		if($(this).attr('content') == "Mudo de assunto não quero falar sobre isso"){
			pontos = 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa2();
		}else if($(this).attr('content') == "Depende de quanto dinheiro estamos falando"){
			pontos = pontos + 10;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa3();
		}else if($(this).attr('content') == "Nada"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa4();
		}else if($(this).attr('content') == "Não é natural pra mim defender injustiças"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa5();
		}
		else if($(this).attr('content') == "Atravesso a rua, e desvio o caminho"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa6();
		}else if($(this).attr('content') == "Quem nunca!"){
			pontos = pontos + 20;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa7();
		}else if($(this).attr('content') == "Corro pra ajudar"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa8();
		}else if($(this).attr('content') == "Cada macaco no seu galho"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa9();
		}else if($(this).attr('content') == "Claro, é demais"){
			pontos = pontos + 30;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa10();
		}else if($(this).attr('content') == "Adorei"){
			pontos = pontos + 0;
			$("#pontos").html("<h4>Pontos: <b style='color: red;'>" + pontos + "</b></h4>");
			etapa11();
		}
	});


	
});

