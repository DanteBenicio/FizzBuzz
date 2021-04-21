// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não Divisivel por 3 e 5 => Número
// Não é um número => não é um número

function FizzBuzz() {

    let number = Number(document.getElementById('number').value)
    let res = document.getElementById('res')

    if (typeof number != "number" || number == 0 || number == '') {
        res.style.color = "whitesmoke"
        res.innerText = `Por favor, digite um número.`
    }
    else if (number % 3 == 0 && number % 5 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `O número ${number} é um FizzBuzz.`
    }
    else if (number % 3 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `O número ${number} é Fizz.`
    }
    else if (number % 5 == 0) {
        res.style.color = `rgb(2, 194, 2)`
        res.innerText = `O número ${number} é Buzz.`
    }
    else {
        res.style.color = `rgb(255, 8, 0)`
        res.innerText = `Este número não é Fizz e nem Buzz.`
    }
}

document.getElementById('verificar').addEventListener('click', FizzBuzz)