const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const resultMessage = document.getElementById("resultMessage");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const togglePasswordButton = document.querySelector('.toggle-password');
const eyeIcon = document.getElementById('eyeIcon');

// Função para validar o e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para exibir mensagens de erro
function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
}

// Função para limpar mensagens de erro
function clearErrors() {
    emailError.textContent = "";
    passwordError.textContent = "";
    resultMessage.textContent = "";
}

// Adicionar evento ao formulário
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o envio do formulário

    // Limpar mensagens anteriores
    clearErrors();

    // Obter valores dos campos
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    let isValid = true;

    // Validar e-mail
    if (!isValidEmail(emailValue)) {
        showError(emailError, "Por favor, insira um e-mail válido.");
        isValid = false;
    }

    // Validar senha
    if (passwordValue.length < 6) {
        showError(passwordError, "A senha deve ter pelo menos 6 caracteres.");
        isValid = false;
    }

    // Exibir mensagem de sucesso ou erro
    if (isValid) {
        resultMessage.textContent = "Login realizado com sucesso!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Por favor, corrija os erros acima.";
        resultMessage.style.color = "red";
    }
});

togglePasswordButton.addEventListener('click', () => {
    const isPasswordVisible = passwordInput.getAttribute('type') === 'text';
    
    // Alterna entre "password" e "text"
    passwordInput.setAttribute('type', isPasswordVisible ? 'password' : 'text');

    // Alterna o ícone entre "olho aberto" e "olho fechado"
    eyeIcon.src = isPasswordVisible 
        ? './public/icons/eye-off.svg' 
        : './public/icons/eye.svg';

    // Adiciona uma animação visual
    togglePasswordButton.classList.toggle('active');
});