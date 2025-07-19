document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#feedbackTable tbody');
    const noData = document.getElementById('noData');

    fetch('/responses')
        .then(res => res.json())
        .then(data => {
            if (!data || data.length === 0) {
                noData.classList.remove('hidden');
                return;
            }
            data.forEach(entry => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${entry.name || ''}</td>
                    <td>${entry.email || ''}</td>
                    <td>${entry.feedback || ''}</td>
                    <td>${entry.date ? new Date(entry.date).toLocaleString() : ''}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(() => {
            noData.textContent = 'Failed to load feedback.';
            noData.classList.remove('hidden');
        });
}); 