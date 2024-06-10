document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.form-select');
    const codigosSections = document.querySelectorAll('.codigos-explicao');

    codigosSections.forEach(section => {
        section.style.display = 'none';
    });
    selectElement.addEventListener('change', function () {
        const selectedOption = selectElement.value;
        
        // Oculta todas as seções de códigos
        codigosSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostra a seção correspondente à opção selecionada
        const selectedSection = document.getElementById(selectedOption);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    });
});