// Define um valor padrão para o nome do médico no localStorage
localStorage.setItem("nomeMedico", "Nome do Médico");

function validarLogin(event) {
    event.preventDefault();
    
    // Obter os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // Verificar se os campos estão preenchidos
    if (nome.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificar a senha
    if (senha === "12345") {
        // Armazena o nome do médico no localStorage
        localStorage.setItem("nomeMedico", nome);
        // Redireciona para a página "RealizarConsulta.html"
        window.location.href = "RealizarConsulta.html";
    } else {
        // Exibe um alerta se o nome ou a senha estiverem incorretos
        alert("Senha incorreta! Tente novamente.");
    }
}

// Adicionar feedback visual para campos inválidos
document.getElementById("nome").addEventListener("input", function() {
    this.style.border = '';  // Resetar a borda
});

document.getElementById("senha").addEventListener("input", function() {
    this.style.border = '';  // Resetar a borda
});

// Exibir feedback visual para campos inválidos ao tentar enviar o formulário
function exibirFeedbackCamposInvalidos() {
    const nomeInput = document.getElementById("nome");
    const senhaInput = document.getElementById("senha");

    if (nomeInput.value.trim() === '') {
        nomeInput.style.border = '2px solid red';
    }

    if (senhaInput.value.trim() === '') {
        senhaInput.style.border = '2px solid red';
    }
}
