/**

OBJETIVO 01 - QUANDO CLICAR NO BOTÃO VEJA TRAILER, DEVEMOS ABRIR O MODAL COM O VIDEO DO TRAILER.
--PASSO 01 - PEGAR O ELEMENTO DO BOTÃO NA TELA.
--PASSO 02 - IDENTIFICAR QUANDO O USUARIO CLICAR NO BOTAO.
--PASSO 03 - PEGAR O ELEMENTO MODAL NO JS.
--PASSO 04 - ABRI O MODAL NA TELA

OBJETIVO 02 - QUANDO CLICAR NO X DEVEMOS FECHAR O MODAL.
--PASSO 01 - DAR UM JEITO DE PEGAR O ELEMENTO DE FECHAR O MODAL.
--PASSO 02 - IDENTIFICAR QUANDO CLICAR NO X
--PASSO 03 - FECHAR O MODAL

*/

const botaoTrailer = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkDoVideo = video.src;


botaoTrailer.addEventListener('click', () => {
    modal.classList.add('aberto');
    video.setAttribute('src', linkDoVideo);
});

fecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src' , '');
});

