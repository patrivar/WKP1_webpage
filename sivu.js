'use strict'

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logIn1').addEventListener('click', function() {
        document.getElementById('user').showModal();
    });

    document.getElementById('logIn').addEventListener('click', function() {
        let status = document.getElementById('user');
        if (status.open) {
            status.close();
        };
    });

        document.getElementById('cancel').addEventListener('click', function() {
        let status = document.getElementById('user');
        if (status.open) {
            status.close();
        };
    });
});

const formInputs = document.querySelectorAll('#user .form');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const errorSpace = input.nextElementSibling;
        if (!input.checkValidity()) {
            errorSpace.textContent = input.title;
            errorSpace.className = 'input-error-space input-error';
        } else {
            errorSpace.textContent = '';
            errorSpace.className = 'input-error-space';
        }
    });
});