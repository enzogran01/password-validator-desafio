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
        if (this.errors.length > 0) {
            return;
        }
        return true;
    }

    cleanUp() {
        this.senha = this.senha.trim();
    }

    verificarTamanho() {
        if (this.senha.length < 8) {
            this.erros.push("Deve ter pelo menos 8 caracteres");
        }
    }

    verificarNumero() {
        if (!/[0-9]/.test(this.senha)) {
            this.erros.push("Deve conter pelo menos 1 número");
        }
    }

    verificarMaiuscula() {
        if (!/[A-Z]/.test(this.senha)) {
            this.erros.push("Deve conter pelo menos 1 letra maiúscula");
        }
    }

    verificarEspecial() {
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.senha)) {
            this.erros.push("Deve conter pelo menos 1 caractere especial");
        }
    }
}