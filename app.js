let valorTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function Add() {
    //Função para recuperar valores do nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Calcular o preço (subtotal)
    let preco = quantidade * valorUnitario;
    //Adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;
    //Acima abre-se crase para inserir a parte do innerHTML
    //Atualizar o valor total (grande total)
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = ` R$ ${valorTotal}`;
    document.getElementById('quantidade').value = null;
    // Deixei a quantidade null ao invés de 0. Se deixar 0, o usuário precisa apagar o 0 para digitar a quantidade.

}

function Reset() {
    let valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

// Nessa aula, você aprendeu como:
// Utilizar a função split() no JavaScript, para separar trechos de uma String por um determinado delimitador;

// Recuperar valores digitados em campos de um formulário na página, via propriedade value;

// Modificar o código HTML de um elemento na página, via propriedade innerHTML;

// Utilizar o recurso de Template String do JavaScript, para concatenar valores de variáveis em String.