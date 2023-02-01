var co = true;


function hienmk() {
    if (co) {
        document.querySelector('.password').type = 'text';

        co = false;
    } else {
        document.querySelector('.password').type = 'password';

        co = true;
    }
    document.querySelector('.before').classList.toggle('donglao');
}
