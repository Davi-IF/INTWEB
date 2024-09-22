function validarEmail(email) {
   
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function cadastrar() {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    let nome = document.querySelector('#nome');
    let labelnome = document.querySelector('#labelnome');

    let email = document.querySelector('#email');
    let labelemail = document.querySelector('#labelemail');
    
    let senha = document.querySelector('#senha');
    let labelsenha = document.querySelector('#labelsenha');
    
    let usuario = document.querySelector('#usuario');
    let labelusuario = document.querySelector('#labelusuario');

    let validnome = false;
    let validemail = false;
    let validsenha = false;  
    let validusuario = false;

    if (nome.value.length <= 2) {
        labelnome.setAttribute('style', 'color: red');
        labelnome.innerHTML = 'Seu nome *Insira no mínimo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validnome = false;
    } else {  
        labelnome.setAttribute('style', 'color: green');
        labelnome.innerHTML = 'Seu nome';
        nome.setAttribute('style', 'border-color: green');
        validnome = true;
    }

    if (!validarEmail(email.value)) {
        labelemail.setAttribute('style', 'color: red');
        labelemail.innerHTML = 'E-mail *Insira um e-mail válido';
        email.setAttribute('style', 'border-color: red');
        validemail = false;
    } else {  
        labelemail.setAttribute('style', 'color: green');
        labelemail.innerHTML = 'E-mail';
        email.setAttribute('style', 'border-color: green');
        validemail = true;
    }

    if (usuario.value.length <= 2) {
        labelusuario.setAttribute('style', 'color: red');
        labelusuario.innerHTML = 'Usuário *Insira no mínimo 3 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validusuario = false;
    } else {  
        labelusuario.setAttribute('style', 'color: green');
        labelusuario.innerHTML = 'Usuário';
        usuario.setAttribute('style', 'border-color: green');
        validusuario = true;
    }

    if (senha.value.length <= 5) {
        labelsenha.setAttribute('style', 'color: red');
        labelsenha.innerHTML = 'Senha *Insira no mínimo 5 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validsenha = false;
    } else {  
        labelsenha.setAttribute('style', 'color: green');
        labelsenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validsenha = true;
    }

    if (validnome && validemail && validsenha && validusuario) {
        alert("Cadastro realizado com sucesso!");
        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value,
            emailCad: email.value
        });

        console.log(listaUser, 'lista');
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        nome.value = '';
        email.value = '';
        usuario.value = '';
        senha.value = '';

        window.location.href = "index.html";
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}
