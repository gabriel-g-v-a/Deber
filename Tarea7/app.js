const $btnSignIn= document.querySelector('.sign-in-btn'), /*Boton de inciar sesion del mensaje */
    $btnSignUp = document.querySelector('.sign-up-btn'),  /*Boton de registrar del mensaje */
    $signUp = document.querySelector('.sign-up'),/*Boton de inciar sesion del formulario */
    $signIn  = document.querySelector('.sign-in');/*Boton de registrar del formulario */
document.addEventListener('click', e => {
    /*lo que hace este condicional, sera evaluar si el clic lo inicio el de 
    iniciar sesión o el de registro que estan en los mensajes de bienvenida.
    se asiga a sign-in y a sign-up una clase para activarlos*/
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

