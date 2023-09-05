let navbar = document.querySelector('.header .flex .nqavbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll

const register = async (name, email, password) => {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            alert('Data not added');
            return;
        }

        const data = await response.json();
        console.log(data);
        alert('Data added');
    } catch (error) {
        console.error('Fetch error:', error);
    }
}




async function getValue() {
    var NameElement = document.getElementById("name");
    var name = NameElement.value;
    var EmailElement = document.getElementById("email");
    var email = EmailElement.value;
    var PasswordElement = document.getElementById("password");
    var password = PasswordElement.value;
    await register(name, email, password)
}


const login = async (email, password) => {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
            alert('Login failed');
            return;
        }

        const data = await response.json();
        console.log(data);
        alert('user logged in');
    } catch (error) {

    }
}



document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('input[name="name"]');
    const passwordInput = document.querySelector('input[name="pass"]');
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

        await login(emailValue, passwordValue).then(() => {
            window.location.href = "home.html";
        })
    });

});

