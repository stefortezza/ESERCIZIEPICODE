document.addEventListener('click', function(event) {
    var accountMenu = document.querySelector('.avatar-icon .dropdown-menu');
    var avatarButton = document.getElementById('avatarButton');
    if (!accountMenu.contains(event.target) && event.target !== avatarButton) {

        if (accountMenu.classList.contains('show')) {
            accountMenu.classList.remove('show');
        }
    }
});

document.getElementById('avatarButton').addEventListener('click', function () {
    var accountMenu = document.querySelector('.avatar-icon .dropdown-menu');
    accountMenu.classList.toggle('show');
});