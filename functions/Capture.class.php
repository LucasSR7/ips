<?php
	require_once('Conexao.class.php');

	class Capture {
		private $ip;
		private $sistema;
		private $resolucao;

		public function __construct($ip, $sistema, $resolucao){
			$this->ip = $ip;
			$this->sistema = $sistema;
			$this->resolucao = $resolucao;
		}

		public function ip(){
			return $this->ip;
		}

		public function sistema(){
			return $this->sistema;
		}

		public function resolucao(){
			return $this->resolucao;
		}

		public function SendInfo(){
			try {
				  date_default_timezone_set('America/Sao_Paulo');
				  $dis = null;
				  $iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
				  $ipad = strpos($_SERVER['HTTP_USER_AGENT'],"iPad");
				  $android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
				  $palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
				  $berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
				  $ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
				  $symbian =  strpos($_SERVER['HTTP_USER_AGENT'],"Symbian");

				  if ($iphone || $ipad || $android || $palmpre || $ipod || $berry || $symbian == true) {
				      $dis = "Mobile";
				  } else {
				      $dis = "Computador";
				  }

				  echo "";

				if(!empty($this->ip) || isset($this->ip) AND !empty($this->sistema) || isset($this->sistema)){
					$query_s = Conexao::getInstance()->prepare("SELECT * FROM info WHERE ip = :ipv");
					$query_s->bindValue(":ipv", $this->ip, PDO::PARAM_STR);
					if($query_s->execute()){
						if($query_s->rowCount() > 0){
							//echo "IP já cadastrado!";
						}else{
							$query = Conexao::getInstance()->prepare("INSERT INTO info (ip, sistema, hora) VALUES (:ip, :sistema, :hora)");
							$query->bindValue(":ip", $this->ip, PDO::PARAM_STR);
							$query->bindValue(":sistema", $this->sistema." - ". $dis. " - ".$this->resolucao, PDO::PARAM_STR);
							$query->bindValue(":hora", date('H:i'), PDO::PARAM_STR);
							if($query->execute()){
								//echo "IP cadastrado com sucesso!";
							}else{
								//echo 'erro';
							}
						}
					}
				}
			} catch (PDOException $e) {
				return "Erro: ". $e->getMessage();
			}
		}
		public function select(){
			$query = Conexao::getInstance()->prepare("SELECT * FROM info");
			$query->execute();
			while ($dados_ldu = $query->fetch(PDO::FETCH_OBJ)) {
				echo '
					<table class="table table-striped">
						<tr>
							<td><b>IP: </b>'.$dados_ldu->ip.'
						</tr>
						<tr>
							<td><b>Sistema: </b>'.$dados_ldu->sistema.'
						</tr>
						<tr>
							<td><b>Hora: </b>'.$dados_ldu->hora.'<hr />
						</tr>
					</table>
				';
			}
		}
	}