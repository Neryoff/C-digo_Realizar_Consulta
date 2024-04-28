document.addEventListener("DOMContentLoaded", function() {
    console.log("Página de histórico carregada");
    carregarHistorico();
});

function carregarHistorico() {
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    let listaPacientes = document.getElementById("listaPacientes");

    if (!listaPacientes) {
        console.error("Elemento 'listaPacientes' não encontrado");
        return;
    }

    listaPacientes.innerHTML = "";

    pacientes.forEach((paciente, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${paciente.nome} - Data da consulta: ${paciente.dataConsulta}`; // Adiciona a data da consulta ao texto do item
        item.addEventListener("click", function() {
            exibirDetalhesPaciente(paciente);
        });
        listaPacientes.appendChild(item);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("btn-excluir");
        botaoExcluir.addEventListener("click", function() {
            excluirPaciente(index);
        });
        
        item.appendChild(botaoExcluir);
    });

    let botaoVoltar = document.createElement("button");
    botaoVoltar.textContent = "Voltar para Realizar Consulta";
    botaoVoltar.classList.add("btn-voltar");
    botaoVoltar.addEventListener("click", function() {
    // Redirecionar para a página de realização de consulta
        window.location.href = "RealizarConsulta.html";
    });

    listaPacientes.appendChild(botaoVoltar);

    // Incluir o nome do médico do localStorage
    let nomeMedico = localStorage.getItem("nomeMedico");
    if (nomeMedico) {
        let nomeMedicoP = document.createElement("p");
        nomeMedicoP.textContent = `Médico: ${nomeMedico}`;
        listaPacientes.appendChild(nomeMedicoP);
    }
}

function excluirPaciente(index) {
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientes.splice(index, 1);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    carregarHistorico(); // Atualiza a visualização após a exclusão
}

function exibirDetalhesPaciente(paciente) {
    alert(`Detalhes do paciente:
Nome: ${paciente.nome}
Sexo: ${paciente.sexo}
Idade: ${paciente.idade}
Queixas: ${paciente.queixas}
Análise: ${paciente.analise}
Data da consulta: ${paciente.dataConsulta}`); // Exibe a data da consulta junto com as outras informações
}
