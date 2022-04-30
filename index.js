let $ = (e) => document.querySelector(e);
let $_ = (e) => document.querySelectorAll(e);
let atualItem = 0;
var items = $_(".item-exposicao").length;
let catalogoExposicao = $('.catalogo-exposicao');
var carouselItems = $('.catalogo-exposicao-carousel');
carouselItems.style.width = `calc(100vw * ${items})`;


function btn_left()
{
    atualItem --;
    if(atualItem < 0)
        atualItem = items - 1;
    
    refresh();
}

function btn_right()
{
    atualItem ++;
    if(atualItem > (items - 1))
        atualItem = 0;
    
    refresh();
}

$('.btn-left').addEventListener('click', function(){
    btn_left();
})

$('.btn-right').addEventListener('click', ()=>{
    btn_right();
})







function refresh()
{
    let carouselLargura = (atualItem * catalogoExposicao.clientWidth);
    carouselItems.style.marginLeft = `-${carouselLargura}px`;
}

// setInterval(btn_left, 2000);