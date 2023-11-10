document.getElementById('linkCopy').addEventListener('click', function(event) {
    event.preventDefault(); 

    var linkParaCopiar = this.getAttribute('href'); 

    var textarea = document.createElement('textarea');
    textarea.value = linkParaCopiar;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    alert('Link copiado para a área de transferência!');
});