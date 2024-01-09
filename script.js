const container = document.getElementById('main-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('log-in');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});