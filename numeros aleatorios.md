<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>array aleatorio</title>
</head>
<body>

	<script type="text/javascript">

		function mostra (frase){

			document.write(frase);

		}

		function pula(){

			document.write("<br>");

		}

		function numAleatorio(){

			return num = Math.round(Math.random()*10);

		}

		function arrayAleatorio(n){

			var array = [];

			var numero = 0;

			while(numero < n){

				var achou = false;
				var num = numAleatorio();

				//verificar --------
				for ( var i = 0 ; i < array.length ; i++){

					if (array[i] == num){
						achou = true;
						break;
					}
				}
				if(achou == false){
					array.push(num);
					numero++;
				}

			}

			return array;
		}


		mostra(arrayAleatorio(5));

		


	</script>

</body>
</html>
