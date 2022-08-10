
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

            logoMaat.querySelectorAll('text').forEach(function(el){
                el.style.visibility = "visible  "
            })
            this.querySelector('text').style.visibility = "hidden"

            boxInfo.querySelector('.mt-info-wrap__cap__title').innerText = info.title
            boxInfo.querySelector('.mt-info-wrap__bg').setAttribute('src', info.image)
            boxInfo.querySelector('.mt-info-wrap__cap__link').setAttribute('href', info.buttonLink)
            boxInfo.querySelector('.mt-info-wrap__cap__link').innerText = info.buttonText

            // Rotación Gris
            if(idItem == "gris"){
                rotateImage(logoMaat, '95')
            }

            /* ==== 
                ROTACION PETALOS 
                ===*/

                // Petalo azul
                document.querySelector('svg .mt-petalo#azul text').setAttribute('transform', 'rotate(-94, 150, 270)')

                // Petalo rojo
                document.querySelector('svg .mt-petalo#rojo text').setAttribute('transform', 'rotate(-94, 230, 320)')

                // Petalo verde
                document.querySelector('svg .mt-petalo#verde text').setAttribute('transform', 'rotate(-94, 30, -30)')

            
            // Rotación verde
            if(idItem == "verde"){
                rotateImage(logoMaat, '175')

                /* ==== 
                ROTACION PETALOS 
                ===*/

                // Petalo gris
                document.querySelector('svg .mt-petalo#gris text').setAttribute('transform', 'rotate(185, 550, 170)')

                // Petalo azul
                document.querySelector('svg .mt-petalo#azul text').setAttribute('transform', 'rotate(185, -10, 260)')

                // Petalo rojo
                document.querySelector('svg .mt-petalo#rojo text').setAttribute('transform', 'rotate(185, 270, 350)')
                
            }

            // Rotación Azul
            if(idItem == "azul"){
                rotateImage(logoMaat, '270')

                /* ==== 
                ROTACION PETALOS 
                ===*/

                // Petalo gris
                document.querySelector('svg .mt-petalo#gris text').setAttribute('transform', 'rotate(90, 530, 10)')

                // Petalo verde
                document.querySelector('svg .mt-petalo#verde text').setAttribute('transform', 'rotate(90, 210, 140)')

                // Petalo rojo
                document.querySelector('svg .mt-petalo#rojo text').setAttribute('transform', 'rotate(90, 70, 560)')
            }



            // Rotación rojo
            if(idItem == "rojo"){
                rotateImage(logoMaat, '0')
                logoMaat.querySelectorAll('text').forEach(function(el){
                    el.removeAttribute('transform')
                })
            }  
            })
        })
        
    }

}
