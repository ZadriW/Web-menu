let entradaSelecionada;
let pratoPrincipalSelecionado;
let sobremesaSelecionada;

function selecionarEntrada(opcao) {
    entradaSelecionada = opcao.value;
}

function selecionarPratoPrincipal(opcao) {
    pratoPrincipalSelecionado = opcao.value;
}

function selecionarSobremesa(opcao) {
    sobremesaSelecionada = opcao.value;
}

function exibirMenuFinal() {
    const menuFinal = document.getElementById('menu-final');
    menuFinal.innerHTML = `
        <h2>Seu Pedido:</h2>
        <p>Entrada: ${entradaSelecionada}</p>
        <p>Prato Principal: ${pratoPrincipalSelecionado}</p>
        <p>Sobremesa: ${sobremesaSelecionada}</p>
        <div id="imagens">
            <img src="${document.querySelector('input[name="entrada"]:checked').getAttribute('data-img')}" alt="Entrada" class="imagem-prato">
            <img src="${document.querySelector('input[name="prato-principal"]:checked').getAttribute('data-img')}" alt="Prato Principal" class="imagem-prato">
            <img src="${document.querySelector('input[name="sobremesa"]:checked').getAttribute('data-img')}" alt="Sobremesa" class="imagem-prato">
        </div>
    `;

    // Aplicar estilo para diminuir o tamanho das imagens
    const imagens = document.querySelectorAll('.imagem-prato');
    imagens.forEach((imagem) => {
        imagem.style.maxWidth = '300px'; // Defina a largura máxima desejada
        imagem.style.maxHeight = '300px'; // Defina a altura máxima desejada
    });
}


