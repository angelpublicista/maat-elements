
function rotateImage(logo, deg){
    logo.style.transform = `rotate(${deg}deg)`
}

const logoMaat = document.getElementById('mt-logo-rotate')

if(logoMaat){
    const petalos = document.querySelectorAll('.mt-petalo')
    const boxInfo = document.querySelector('.mt-info-wrap')

    if(petalos){
        petalos.forEach(function(item){
            item.addEventListener('click', function(e){
            const idItem = this.getAttribute('id')
            const info = JSON.parse(this.dataset.info)

            console.log(info.title)

            boxInfo.querySelector('.mt-info-wrap__cap__title').innerText = info.title
            boxInfo.querySelector('.mt-info-wrap__bg').setAttribute('src', info.image)
            boxInfo.querySelector('.mt-info-wrap__cap__link').setAttribute('href', info.buttonLink)
            boxInfo.querySelector('.mt-info-wrap__cap__link').innerText = info.buttonText

            if(idItem == "gris") rotateImage(logoMaat, '95')
            if(idItem == "verde") rotateImage(logoMaat, '175')
            if(idItem == "azul") rotateImage(logoMaat, '270')
            if(idItem == "rojo") rotateImage(logoMaat, '0')
            
            })
        })
        
    }

}
