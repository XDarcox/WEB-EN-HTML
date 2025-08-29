var img=document.getElementById('image'),
    prev=document.getElementById('prev'),
    next=document.getElementById('next');

var urlbase="../Imagenes/carrusel";
var can=4,
    pos=1;

prev.addEventListener('click',function(){
    pos--;
    if (pos<1)
        pos=4;
        img.src=urlbase+pos+".jpg";
})

next.addEventListener('click',function(){
    pos++;
    if (pos>4)
        pos=1;
        img.src=urlbase+pos+".jpg";
})

setInterval(function(){
    next.click();
},1000)