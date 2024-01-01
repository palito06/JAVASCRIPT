<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jogo adivinha</title>
    <script type="text/javascript" src="" charset="UTF-8"></script><link rel="stylesheet" crossorigin="anonymous" href=""/></head>
<body>

    <input>
    <button>.</button>

    <script>

        function mostra(frase){
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

                //verificar --------------

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

        function verifica(){

            arrayDigitado.push(parseInt(entrada.value));

            if(arrayDigitado.length == chances){

                var num2 = arrayDigitado;
                var num  = arrayAleatorio(chances);

                alert("top , confira agora numeros e seus acertos.");
                var contador = 0;
                for(var i = 0 ; i < chances ; i++){
                    for ( var j = 0 ; j < chances; j++ ){
                        if (num[i] == num2[j]){
                            contador++;
                        }
                    }
                }

                mostra("vc acertou : "+contador);
                pula();
                mostra("array digitado - ["+num2+"]");
                pula();
                mostra("array pensado  - ["+num+"]");
            }
            entrada.value = " ";
            entrada.focus();
        }

        //------------------------------------------

        var chances = parseInt(prompt("digite o tamanho do array: "));

        //------------------------------------------

        pula();
        mostra("digite os "+chances+" numeros para a adivinhação.");
        var botao   = document.querySelector("button");
        var entrada = document.querySelector("input");
        pula();

        //------------------------------------------

        var arrayDigitado = [];

        botao.onclick = verifica;
        entrada.focus()


    </script>
</body>
</html>
