function sendmsg(event){
    event.preventDefault()
    const nome = document.getElementById('name').value
    const mensagem = document.getElementById('text').value
    const telefone = '5515981524319'
    
    const texto = `Olá me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`
    
    window.open(url, '_blank')
}