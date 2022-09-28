// Tabs
const mt_list_items = document.querySelectorAll('.mt-tabs__list .mt-tabs__list__item')

if(mt_list_items){
    // Cajas de contenido
    const mt_tab_content_items = document.querySelectorAll('.mt-tabs__content__item')
    
    // Recorremos los tabs
    mt_list_items.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault()

            // Capturamos el selector del contenido para cada tab
            const target = document.querySelector(this.dataset.target)
            
            // Quitamos la clase activa para todos los elementos actuales
            mt_list_items.forEach(element => {
                element.classList.remove('active')
            });

            mt_tab_content_items.forEach(element => {
                element.classList.remove('active')
            });

            // Agregamos la clase activa al tab y al contenido correspondientes
            this.classList.add('active')
            target.classList.add('active')
        })
    });
}