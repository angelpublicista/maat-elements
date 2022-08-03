jQuery(function ($) {


    // $('.mt-cont-menu__btn-toggle').on('click', function (e) {
    //     e.preventDefault()
    //     $('.mt-cont-menu__items').addClass('show')
    // })

    $('.mt-cont-menu__btn-toggle').on('click', function (e){ 
        e.preventDefault(); 
        e.stopPropagation(); 
        $('.mt-cont-menu__items').toggleClass('show'); 
        $(document).one('click', function (e) {
             if ($('.mt-cont-menu__items').has(e.target).length === 0) { $('.mt-cont-menu__items').removeClass('show'); } 
        }); 
    });

});



//la funcion que oculta y muestra
// function showHide(e){
//     e.preventDefault();
//     e.stopPropagation();
//     if(div.style.display == "none"){
//     div.style.display = "block";
//     } else if(div.style.display == "block"){
//     div.style.display = "none";
//     }
// }
// //al hacer click en el boton
// but.addEventListener("click", showHide, false);

// //funcion para cualquier clic en el documento
// document.addEventListener("click", function(e){
//     console.log('clic');
//     //obtiendo informacion del DOM para
//     var clic = e.target;
//     console.log(clic);
//     if(div.style.display == "block" && clic != div){
//         div.style.display = "none";
//     }
// }, false);