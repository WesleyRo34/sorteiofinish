document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("msg").value;
    alert("Boa Sorte");
});
function redirecionar() {
    window.location.href = "https://www.globo.com";

}

function Imagem() {
    var imagem = document.getElementById('minhaImagem');
    if (imagem.src.endsWith('Titan.png')) {
        imagem.src = 'precotitam.png';
    } else {
        imagem.src = 'Titan.png';
    }
}
function trocar() {
    var imagem = document.getElementById('minha');
    if (imagem.src.endsWith('Twister.png')) {
        imagem.src = 'precotwister.png';
    } else {
        imagem.src = 'Twister.png';
    }
}
function img() {
    var imagem = document.getElementById('imagem');
    if (imagem.src.endsWith('XRE.png')) {
        imagem.src = 'precoxre.png';
    } else {
        imagem.src = 'XRE.png';
    }
}