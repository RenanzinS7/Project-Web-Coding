const descOriginal =
    "Site para denunciar problemas envolvendo água e saneamento básico em Recife";

const descDetalhada =
    "O Aquacife é uma plataforma completa que permite ao cidadão registrar denúncias detalhadas sobre problemas de abastecimento de água, esgoto, saneamento básico, vazamentos, desperdício e muito mais, facilitando o encaminhamento para análise e solução pelas autoridades competentes.";

const description = document.getElementById("description");

document.getElementById("btnDetalhado").onclick = () => {
    description.textContent = descDetalhada;
};

document.getElementById("btnSimplificado").onclick = () => {
    description.textContent = descOriginal;
};

/* FORMULÁRIOS LOGIN / CADASTRO */

const formContainer = document.getElementById("formContainer");
const dynamicForm = document.getElementById("dynamicForm");
const formTitle = document.getElementById("formTitle");
const closeForm = document.getElementById("closeForm");

function abrirFormulario(tipo) {
    dynamicForm.innerHTML = "";

    if (tipo === "login") {
        formTitle.textContent = "Login";
        dynamicForm.innerHTML = `
            <input type="email" placeholder="E-mail" required>
            <input type="password" placeholder="Senha" required>
        `;
    } else {
        formTitle.textContent = "Cadastro";
        dynamicForm.innerHTML = `
            <input type="text" placeholder="Nome completo" required>
            <input type="date" required>
            <input type="email" placeholder="E-mail" required>
            <input type="password" placeholder="Senha" required>
        `;
    }

    formContainer.classList.remove("hidden");
}

document.getElementById("btnLogin").onclick = () => abrirFormulario("login");
document.getElementById("btnCadastro").onclick = () => abrirFormulario("cadastro");

closeForm.onclick = () => {
    formContainer.classList.add("hidden");
};

/* ENTRAR SEM LOGIN */

document.getElementById("btnSemLogin").onclick = () => {
    window.location.href = "src/js/pages/menu.html";
 
};
