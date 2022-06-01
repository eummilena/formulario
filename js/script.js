(
    function () {
        'use strict';

        let form = document.querySelector('form');
        let inputForm = document.getElementById('formGroupExampleInput');
        let txt = document.getElementById('exampleFormControlTextarea1');
        let quantCaracter = document.getElementById('quant');
        let maxima = txt.maxLength;




        form.addEventListener('submit', function (e) {
            if (!inputForm.value) {
                alert('Preencha todos os campos');
                e.preventDefault();//impede que o formulário seja enviado
            }
        });

        txt.addEventListener('input', checkLength);// evento que chama a função
        //restaCaracter(maxima);


        //começa aqui
        function checkLength(_e) {
            let numlet = this.value.length;
            let caracterRestante = parseInt(maxima) - parseInt(numlet);
            restaCaracter(caracterRestante);
        }

        //vem pra cá
        function restaCaracter(n) {
            quantCaracter.textContent = n;
        }



    }
)();