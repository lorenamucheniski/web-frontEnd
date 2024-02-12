const formulario = document.querySelector('.form');
const dadosEnviados = document.querySelector('.dados_enviados');
const enviar = document.querySelector('.enviar');

const dadosFormulario = [];

enviar.addEventListener('click', function(){
    console.log('o botao foi clicado')
    const nomeCompleto = formulario.querySelector('.nome-completo');
    const nascimento = formulario.querySelector('.nascimento');
    const email = formulario.querySelector('.email');

    dadosFormulario.push({
        nomeCompleto: nomeCompleto.value,
        nascimento: nascimento.value,
        email: email.value
    });

    dadosEnviados.innerHTML += `<p>${nomeCompleto.value}</p>`
    dadosEnviados.innerHTML += `<p>${nascimento.value}</p>`
    dadosEnviados.innerHTML += `<p>${email.value}</p>`
})




