

let naviStatus= false;

let clickBtnn = function() {
    let getMenuList = document.querySelector('.menu-list');
    let getMenuLiEl = document.querySelector('.menu-list ul');

        if(naviStatus === false) {
            getMenuLiEl.style.display = 'block';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = true ;

        } else if(naviStatus === true) {
            getMenuLiEl.style.display = 'none';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = false ;
        } 
        
        
};


let redBtnn = document.getElementById('color-red');
let mainBackColor = document.getElementsByTagName('body[0]');

redBtnn.addEventListener('click' , function(){
    mainBackColor.style.backgroundColor= 'red'

})

let clickMe = false;
let blueBack = function(){
    let blueBackBtn = document.getElementsByTagName('body');
    if(clickMe === false) {
        blueBackBtn.style.backgroundColor = 'blue';

        blueBack = true ;

    } else if(clickMe === true) {
        blueBackBtn.style.backgroundColor = '';

        blueBack = false ;
    } 
};

