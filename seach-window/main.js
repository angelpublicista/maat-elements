const searchWindow = document.getElementById('maat-search-window')

if(searchWindow){
    document.querySelector('.maat-open-search-window').addEventListener('click', (e) => {
        e.preventDefault()
        searchWindow.classList.add('active')
    })

    document.querySelector('.maat-search-window__btn-close').addEventListener('click', (e) => {
        e.preventDefault()
        searchWindow.classList.remove('active')
    })
}