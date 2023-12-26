document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('links');

    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var linkAddress = this.href;

            navigator.clipboard.writeText(linkAddress)
                .then(function() {
                    alert('Endereço do link copiado para a área de transferência!');
                })
                .catch(function(err) {
                    console.error('Erro ao copiar endereço do link para a área de transferência: ', err);
                });
        });
    }
});
