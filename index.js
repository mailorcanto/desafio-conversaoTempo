//1. Conversão de tempo

//Leia um valor inteiro, que é tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:
//horas:minutos:segundos
//ENTRADA: A entrada contém um valor inteiro N
//SAÍDA: Imprima o tempo lido de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
//exemplo: 556 retorna 0:9:16
//exemplo: 1 retorna 0:0:1
//exemplo: 140153 retorna 38:55:53

var n = 10000;
  
    var horas = n / 3600; //pegando os segundos e dividindo por 3600 (segundos em uma hora)
    var minutos = (n % 3600) / 60; //pegando o resto das horas (os minutos) e dividindo por 60 (segundos em um minuto)
    var segundos = n % 60; //pegando o resto dos minutos

    var horaConvertida = Math.floor(horas); //arredondamento para baixo
    var minutosConvertidos = Math.floor(minutos);
    var segundosConvertidos = Math.floor(segundos);

console.log(`${horaConvertida}:${minutosConvertidos}:${segundosConvertidos}`);


//forma simplificada
var segundos = 10000;

function toTime(seconds) {
    var date = new Date(null); //criando variável data
    date.setSeconds(seconds); //modifica segundos recebidos na variável data para tempo local
    return date.toISOString().slice(11, 19); //retornando a data para uma string no formato ISO8601 (ISO extendido, de 24 ou 27 caracteres) e 
    //cortando com a função slice, para exibir apenas as informações desejadas (hh:mm:ss)
 }
 console.log(toTime(segundos));
