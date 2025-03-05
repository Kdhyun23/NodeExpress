const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');
const member = document.querySelector('#member');

member.addEventListener('click', () => {
    //alert('회원가입 페이지로 이동합니다.');
    document.querySelector('#modal').style.display = "flex";
});

button.addEventListener('click', () => {
    if (email.value === '' || password.value === '') {
        alert('이메일 또는 비밀번호를 입력해주세요.');
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
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            console.log(data.user);
            alert('로그인 성공');
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error("로그인 요청 중 오류 발생:", error);
    });
});