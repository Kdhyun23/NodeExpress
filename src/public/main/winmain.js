const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    if(confirm('로그아웃 하시겠습니까?')) {
        fetch('/logout', {
            method: 'POST',
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                sessionStorage.clear();
                window.location.href = '/login';
            } else {
                alert("로그아웃에 실패했습니다.");
            }
        })
        .catch(err => {
            console.error("로그아웃 요청 중 오류:", err);
        });
    }
});