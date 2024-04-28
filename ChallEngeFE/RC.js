const nomeMedico = localStorage.getItem("nomeMedico");

if (!nomeMedico) {   
    window.location.href = "login.html"; 
} else {
    document.getElementById("nomeMedico").textContent = nomeMedico;
}

function abrirAba(evt, nomeAba) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(nomeAba).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function validarForm() {
    const queixas = document.getElementById("txtQueixas").value;
    const analise = document.getElementById("txtAnalise").value;
    const nomePaciente = document.getElementById("nomePaciente").value;

    if (!queixas || !analise || !nomePaciente) {
        alert("Por favor, preencha todos os campos antes de encerrar a consulta.");
        return;
    }

    // Adicionar sexo e idade do paciente ao localStorage
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const idade = document.getElementById("idade").value;
    localStorage.setItem("sexoPaciente", sexo);
    localStorage.setItem("idadePaciente", idade);

    // Obter a data atual
    const dataConsulta = new Date().toLocaleDateString();

    // Adicionar dados da consulta ao histórico
    encerrarConsulta(dataConsulta);
}

function encerrarConsulta(dataConsulta) {
    // Exibir tela de loading
    document.getElementById("loading").style.display = "block";

    adicionarAoHistorico(dataConsulta);

    // Simular um atraso antes de redirecionar para a página de sucesso
    setTimeout(function() {
        window.location.href = "sucesso.html";
    }, 2000); // 2 segundos de atraso
}

function adicionarAoHistorico(dataConsulta) {
    let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    const nomePaciente = document.getElementById("nomePaciente").value;
    const sexoPaciente = localStorage.getItem("sexoPaciente");
    const idadePaciente = localStorage.getItem("idadePaciente");
    const queixas = document.getElementById("txtQueixas").value;
    const analise = document.getElementById("txtAnalise").value;

    pacientes.push({ 
        nome: nomePaciente, 
        sexo: sexoPaciente,
        idade: idadePaciente,
        queixas: queixas,
        analise: analise,
        dataConsulta: dataConsulta // Adiciona a data da consulta ao objeto do paciente
    });

    localStorage.setItem("pacientes", JSON.stringify(pacientes));
}
