<?php
  $title = "Fast Services - Quiz";
  require_once('functions/Capture.class.php');
  require_once('includes/header.php');
  $log = new Capture($_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT'], $_SERVER['REQUEST_URI']);
  echo $log->SendInfo();
?>
    <div class="container">
      <div class="content">
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/pessoa-ma-min.jpg" alt="Você é uma pessoa má?">
            <div class="caption">
              <h3>Você é uma pessoa má?</h3>
              <p>09/02/2016</p>
              <p><a href="http://fastservices.16mb.com/quiz/voce-e-uma-pessoa-ma.html" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/60999-mulher-magnetica-conheca-o-poder-dessa-postura-1000x641-min.png" alt="Você sofre de ansiedade?">
            <div class="caption">
              <h3>Você sofre de ansiedade?</h3>
              <p>14/02/2016</p>
              <p><a href="" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/screen-shot-2015-09-28-at-9-06-09-pm-min-min.png" alt="Qual vilão de filme de terror você é?">
            <div class="caption">
              <h3>Qual vilão de filme de terror você é?</h3>
              <p>17/02/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/olho-a-olho-min.png" alt="O que a cor dos seus olhos diz sobre você?">
            <div class="caption">
              <h3>O que a cor dos seus olhos diz sobre você?</h3>
              <p>25/02/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/autoestima-min.png" alt="Você Tem Autoestima Alta ou Baixa?">
            <div class="caption">
              <h3>Você Tem Autoestima Alta ou Baixa?</h3>
              <p>27/02/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/581126f30a07b5-min.png" alt="Você sabe controlar bem a sua raiva?">
            <div class="caption">
              <h3>Você sabe controlar bem a sua raiva?</h3>
              <p>02/03/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/mulher-min.png" alt="Que Tipo de Mulher Você É?">
            <div class="caption">
              <h3>Que Tipo de Mulher Você É?</h3>
              <p>06/03/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/57abd0968ad5f9-min.png" alt="O Que Te Torna Atraente?">
            <div class="caption">
              <h3>O Que Te Torna Atraente?</h3>
              <p>10/03/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/171237-wagner-moura-e-mais-um-representando-fam-950x0-1-min.png" alt="Quais são as chances de você ficar famoso?">
            <div class="caption">
              <h3>Quais são as chances de você ficar famoso?</h3>
              <p>15/03/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/realizacao-pessoal-1-759x417-min.png" alt="Quão feliz você é?">
            <div class="caption">
              <h3>Quão feliz você é?</h3>
              <p>20/03/2016</p>
              <p><a href="http://fastservices.16mb.com/quiz/quao-feliz-voce-e.html" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
        <div class="block-tests">
          <div class="thumbnail">
            <img src="http://fastservices.16mb.com/assets/images/como-ser-mais-simpatica-min.png" alt="Você é Simpático(a)?">
            <div class="caption">
              <h3>Você é Simpático(a)?</h3>
              <p>25/03/2016</p>
              <p><a href="#" class="btn" role="button">Comece</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

<?php
  require_once('includes/footer.php');
?>