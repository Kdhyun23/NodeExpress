const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    if (email.value === '' || password.value === '') {
        alert('Please enter your ID and password.');
        return;
    }

    if (checkbox.checked) {
        // Save ID and password
    } else {
        // Delete ID and password
    }

    const req = {
        email: email.value,
        password: password.value
    };
    
    fetch('/login', {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }).then(res => {
        if (res.success) {
            alert('로그인 성공');
        } else {
            alert(res.msg);
        }
    })
});