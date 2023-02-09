function imc(){
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let resultado = document.querySelector("#resultado")

    if(nome !== '' && altura !== '' && peso !== ''){
        // toFixed para casas decimais
        valorImc = (peso / (altura * altura)).toFixed(1)
        let tipoIMC
        
        if(valorImc < 18.5){
           tipoIMC = 'abaixo do peso'
        } else if(valorImc > 18.5 && valorImc < 25){
            tipoIMC = 'peso ideal'
        }else if(valorImc < 30){
            tipoIMC = 'acima do peso'
        } else if(valorImc < 35){
            tipoIMC = 'obesidade grau 1'
        }else if(valorImc < 40){
            tipoIMC = 'obesidade grau 2'
        }else{
            tipoIMC = 'obesidade grau 3'
        }
        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está no ${tipoIMC}`
    } else{
        resultado.textContent = `Preencha todos os campos!`
    }
}
