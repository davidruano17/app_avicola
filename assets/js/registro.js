document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const passField = document.getElementById('pass-field');
    const reqList = document.querySelectorAll('#req-list li');

    // 1. EL OJO (Mostrar/Ocultar)
    const eye = document.createElement('button');
    eye.type = 'button';
    eye.innerHTML = '👁';
    // Posicionamiento preciso sobre el input azul
    eye.className = 'absolute right-4 top-[48px] -translate-y-1/2 text-gray-400 text-xl hover:text-green-600 transition-all';
    passField.appendChild(eye);

    eye.addEventListener('click', () => {
        const isPass = passwordInput.type === 'password';
        passwordInput.type = isPass ? 'text' : 'password';
        eye.style.color = isPass ? '#22c55e' : '#9ca3af';
    });

    // 2. VALIDACIÓN VISUAL (Cambia a verde como en tu imagen)
    passwordInput.addEventListener('input', () => {
        const val = passwordInput.value;

        const rules = [
            val.length >= 10,
            /[A-Z]/.test(val),
            (val.match(/\d/g) || []).length >= 5,
            /[!@#$%^&*(),.?":{}|<>]/.test(val)
        ];

        rules.forEach((isValid, index) => {
            if (isValid) {
                reqList[index].classList.remove('text-gray-400');
                reqList[index].classList.add('text-[#16a34a]'); // Verde de la imagen
            } else {
                reqList[index].classList.remove('text-[#16a34a]');
                reqList[index].classList.add('text-gray-400');
            }
        });
    });
});