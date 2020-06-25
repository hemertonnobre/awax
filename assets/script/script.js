document.querySelector('.menu-mobile').addEventListener('click',function(){

    if(document.querySelector('nav').className=='ativo'){
    document.querySelector('nav').removeAttribute('class');
    document.querySelector('nav').style.display='none';
    }else{
    document.querySelector('nav').className ='ativo';
    document.querySelector('nav').style.display='block';
    }
    
    })