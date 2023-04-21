
let formStatus = false;

const form = document.getElementById('form-validacao');
console.log(form);


    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    
    const notifMsgOK = document.querySelector('.success-message');

function validarNum() {
    const A = numeroA.value
    const B = numeroB.value

    return B > A
}

numeroA.addEventListener('change', function (e) {
    console.log(e.target.value);
    notifMsgOK.style.display = 'none';

})


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemOK = `<b>Validação feita</b>! O valor <b>${numeroA.value}</b> é maior que o número <b>${numeroB.value}</b>.`


    formStatus = validarNum();
    if (formStatus) {
        
        notifMsgOK.innerHTML = mensagemOK;
        notifMsgOK.style.display = 'block';

        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';



    } else {

        if (!formStatus) {
            numeroB.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        }
    }

})





