// 로그인 화면
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');
const member = document.querySelector('#member');

// 회원가입 모달
const m_email = document.querySelector('#m_email');
const m_name = document.querySelector('#m_name');
const m_password = document.querySelector('#m_password');
const m_password_confirm = document.querySelector('#m_password_confirm');
const m_submit = document.querySelector('#m_submit');

member.addEventListener('click', () => {
    m_email.value = '';
    m_name.value = '';  
    m_password.value = '';
    m_password_confirm.value = '';
    document.querySelector('#modal').style.display = "flex";
});

// 로그인 버튼 클릭
button.addEventListener('click', () => {
    if (email.value === ''){
        alert('이메일을 입력해주세요.');
        return;
    }
    if (password.value === '') {
        alert('비밀번호를 입력해주세요.');
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

// 회원가입 버튼 클릭
m_submit.addEventListener('click', () => {
    if (m_email.value === ''){
        alert('이메일을 입력해주세요.');
        return;
    }
    if (m_name.value === '') {
        alert('이름을 입력해주세요.');
        return;
    }
    if (m_password.value === '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    if (m_password_confirm.value === '') {
        alert('비밀번호를 입력해주세요.');
        return;
    }
    if (m_password.value !== m_password_confirm.value) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    const req = {
        email: m_email.value,
        name: m_name.value,
        password: m_password.value
    };
    
    fetch('/member', {   
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
            alert('회원가입 성공');
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error("회원가입 요청 중 오류 발생:", error);
    });
});