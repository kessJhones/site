document.addEventListener('DOMContentLoaded', () => {
    // Manipulação do formulário
    const formulario = document.getElementById('formulario-contato');
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const formData = new FormData(formulario);
        const dados = Object.fromEntries(formData);
        
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
        console.log('Dados do formulário:', dados);
        
        // Limpa o formulário
        formulario.reset();
        alert('Mensagem enviada com sucesso!');
    });

    // Scroll suave para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 