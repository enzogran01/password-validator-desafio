class ValidaSenha {
    constructor(senha) {
        this.senha = senha;
        this.errors = [];
        this.valida();
    }

    valida() {
        this.cleanUp();
        this.verificarTamanho();
        this.verificarNumero();
        this.verificarMaiuscula();
        this.verificarEspecial();
    }

    cleanUp() {
        this.senha = this.senha.trim();
    }

    verificarTamanho() {
        if (this.senha.length < 8)
            this.errors.push("Pelo menos 8 caracteres");
    }

    verificarNumero() {
        if (!/[0-9]/.test(this.senha))
            this.errors.push("Pelo menos 1 número");
    }

    verificarMaiuscula() {
        if (!/[A-Z]/.test(this.senha))
            this.errors.push("Pelo menos 1 letra maiúscula");
    }

    verificarEspecial() {
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.senha))
            this.errors.push("Pelo menos 1 caractere especial");
    }

    ehValida() {
        return this.errors.length === 0;
    }
}

// ===== valida senha do input =====
const input = document.getElementById('password');
const errorBox = document.getElementById('errorBox');
const errorList = document.getElementById('errorList');
const successMsg = document.getElementById('successMsg');

input.addEventListener('input', () => {
    const v = new ValidaSenha(input.value);

    if (input.value.trim() === '') {
        errorBox.classList.remove('visible');
        successMsg.classList.remove('visible');
        return;
    }

    if (v.ehValida()) {
        errorBox.classList.remove('visible');
        successMsg.classList.add('visible');
    } else {
        successMsg.classList.remove('visible');
        errorList.innerHTML = v.errors.map(e => `<li>${e}</li>`).join('');
        errorBox.classList.add('visible');
    }
});

// ===== toggle de visualizar senha =====
const toggleBtn = document.getElementById('toggleBtn');
const eyeOpen   = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');

toggleBtn.addEventListener('click', () => {
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';
    eyeOpen.style.display  = isPassword ? 'none'  : '';
    eyeClosed.style.display = isPassword ? ''     : 'none';
});