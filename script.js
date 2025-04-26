function toggleLoginForm() {
    const form = document.getElementById('loginForm');
    form.classList.toggle('hidden');
}

function showDetails(option) {
    const detailsSection = document.getElementById('details');
    detailsSection.classList.remove('hidden');
    detailsSection.querySelector('h2').textContent = تفاصيل ${option};
}

function showSuggestionForm() {
    alert("تم إرسال اقتراحك بنجاح!"); // يمكنك استبدال هذا بكود لجمع الاقتراحات.
}
