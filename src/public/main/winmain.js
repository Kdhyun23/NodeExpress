const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    if(confirm('로그아웃 하시겠습니까?')){
        window.location.href = '/login';
    }
});