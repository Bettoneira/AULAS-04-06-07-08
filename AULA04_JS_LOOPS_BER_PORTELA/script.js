//laço while = enquanto 
var x = 0;
document.write("<br> testando loop com while")
while (x <= 10) {
    document.write("<br> o valor de x é: " + x);
    x = x + 1;
}

//laço for = para
var controle = 10;
document.write("<br> testando loop com for")
for (a = 0; a < controle; a++) {
    document.write("<br> o valor de a é: " + a);

}

//laço switch = escolha
//criar a função pedir()
function pedir() {
    //alert("A casa caiu mano!!")
    var valor = prompt("Digite a opção de 1 a 4");
    // console.log(valor);
    // console.log(typeof(valor));
    // console.log(Number(valor));
    // console.log(typeof(Number(valor)));

    switch (Number(valor)) {
        case 1:
            alert("Você escolheu suco");
            break;
        case 2:
            alert("Você escolheu água gelada")
            break;
        case 3:
            alert("Você escolheu sorvete")
            break;
        case 4:
            alert("Você escolheu chamar o garçom")
            break;
        default:
            alert("Digite entre 1 a 4");
            break;



    }

}