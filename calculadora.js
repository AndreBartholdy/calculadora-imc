function calcular(operacao) {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    let resultado = 0;

    if(numero2 == 0 && operacao == '/'){
        document.getElementById('resultado').innerHTML = 'Impossível dividir por 0';
        return;
    }

    if(!numero1 || !numero2){
        document.getElementById('resultado').innerHTML = 'Por favor, digite o número';
        return;
    }

    switch (operacao) {
        case '+': 
            resultado = numero1 + numero2;
            break;

        case '-':
            resultado = numero1 - numero2;
            break;

        case '*':
            resultado = numero1 * numero2;
            break;

        case '/':
            resultado = numero1 / numero2;
            break;
    
        default:
            break;
    }

    document.getElementById('resultado').innerHTML = resultado;

}