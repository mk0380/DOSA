document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('.input-data input');

    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            const label = this.parentNode.querySelector('label');
            if (this.value.trim() !== '') {
                label.classList.add('focused');
            } else {
                label.classList.remove('focused');
            }
        });
    });
});

