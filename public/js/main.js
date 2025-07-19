document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.classList.add('hidden');
        confirmation.classList.remove('hidden');
        form.reset();
    });
});
