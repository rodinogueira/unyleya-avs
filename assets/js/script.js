// script.js

// Função para exibir uma mensagem de boas-vindas
function displayWelcomeMessage() {
    const welcomeMessage = "Bem-vindo ao nosso projeto!";
    alert(welcomeMessage);
}

// Função para processar o login do usuário
function login(username, password) {
    if (username && password) {
        alert(`Usuário ${username} logado com sucesso!`);
    } else {
        alert("Por favor, forneça um nome de usuário e uma senha.");
    }
}

// Manipulação do botão de realizar login
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão do botão
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
});

// Exibir mensagem de boas-vindas ao carregar a página
displayWelcomeMessage();
