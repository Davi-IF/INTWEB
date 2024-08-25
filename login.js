document.addEventListener('DOMContentLoaded', () => {
 
    const loginButton = document.querySelector('.ancora');
  
    
    function validateLogin(event) {
        
        event.preventDefault();
    
        
        const username = document.getElementById('User').value;
        const password = document.getElementById('Pass').value;
    
      
        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return false; 
        }
    
        
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
    
        
        let userValid = listaUser.find(user => user.userCad === username && user.senhaCad === password);
    
        if (userValid) {
            alert(`Bem-vindo, ${userValid.nomeCad}!`);
            window.location.href = 'page.html'; 
        } else {
            alert('Usuário ou senha incorretos.');
        }
    }
  
   
    loginButton.addEventListener('click', validateLogin);
  });
  document.getElementById('togglePassword').addEventListener('click', function () {
      const passwordInput = document.getElementById('Pass');
      const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', passwordType);
    
      
      this.textContent = passwordType === 'password' ? '👁️' : '🙈';
    });
    
    function validateLogin() {
     
    }
    