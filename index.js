function calcular() {
    let tAltura = document.getElementById('altura');
    let tPeso = document.getElementById('peso');
    let resultado = document.getElementById('resultado');

    let a = Number(tAltura.value);
    let p = Number(tPeso.value);

    let imc = Math.round( ( p / ( a * a ) ) );

    if (imc < 17) {

        resultado.innerHTML = `Você está muito abaixo do peso. Seu imc: ${imc} `;

    } 
    
    else if (imc >= 17 && imc <= 18.49) {

        resultado.innerHTML = `Você está abaixo do peso. Seu imc: ${imc} `;
    }

    else if (imc >= 18.5 && imc <= 24.99) {

        resultado.innerHTML = `Você está com seu peso normal. Seu imc: ${imc} `;
    
    }

    else if (imc >= 25 && imc <= 29.99) {

        resultado.innerHTML = `Você está acima do peso. Seu imc: ${imc} `;

    }
    
    else if (imc >= 30 && imc <= 34.99) {

        resultado.innerHTML = `Obesidade I. Seu imc: ${imc} `;

    }

    else if (imc >= 35 && imc <= 39.99) {

        resultado.innerHTML = `Obesidade II severa. Seu imc:${imc}`;
        
    }
    
    else {

        resultado.innerHTML = `Obesidade III mórbida. Seu imc:${imc}`;
    
    }
}   