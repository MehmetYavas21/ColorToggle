

let naviStatus= false;

let clickBtnn = function() {
    let getMenuList = document.querySelector('.menu-list');
    let getMenuLiEl = document.querySelector('.menu-list ul');

        if(naviStatus === false) {
            getMenuLiEl.style.display = 'block';
            getMenuLiEl.style.transition= 'll 1s ease';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = true ;

        } else if(naviStatus === true) {
            getMenuLiEl.style.display = 'none';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = false ;
        } 
        
        
};



let clickMeHome = false;
let mainColor = function(){
    let mainColorBtn = document.getElementsByTagName('body');
    if(clickMeHome === false) {
        mainColorBtn[0].style.backgroundColor = 'e0e4e7';
        alert('you will change the webpage color to main color');


        mainColor = true ;

    } else if(clickMeHome === true) {
        mainColorBtn[0].style.backgroundColor = 'e0e4e7';

        mainColor = false ;
    } 
};



let clickMeRed = false;
let redBack = function(){
    let redBackBttn = document.getElementsByTagName('body');
    if(clickMeRed === false) {
        redBackBttn[0].style.backgroundColor = 'red';
        alert('you will change the webpage color to red');

        redBack = true ;

    } else if(clickMe === true) {
        redBackBttn[0].style.backgroundColor = 'e0e4e7';

        redBack = false ;
    } 
};




let clickMeBlue = false;
let blueBack = function(){
    let blueBackBtn = document.getElementsByTagName('body');
    if(clickMeBlue === false) {
        blueBackBtn[0].style.backgroundColor = 'blue';
        alert('you will change the webpage color to blue');

        blueBack = true ;

    } else if(clickMeBlue === true) {
        blueBackBtn[0].style.backgroundColor = '#e0e4e7';

        blueBack = false ;
    } 
};


let clickMePurple = false;
let purpleBack = function(){
    let purpleBackBtn = document.getElementsByTagName('body');
    if(clickMePurple === false) {
        purpleBackBtn[0].style.backgroundColor = 'purple';
        alert('you will change the webpage color to purple');

        purpleBack = true ;

    } else if(clickMePurple === true) {
        purpleBackBtn[0].style.backgroundColor = 'e0e4e7';

        purpleBack = false ;
    } 
};


let clickMeOrange = false;
let orangeBack = function(){
    let orangeBackBtn = document.getElementsByTagName('body');
    if(clickMeOrange === false) {
        orangeBackBtn[0].style.backgroundColor = 'orange';
        alert('you will change the webpage color to orange');

        orangeBack = true ;

    } else if(clickMeOrange === true) {
        orangeBackBtn[0].style.backgroundColor = 'e0e4e7';

        orangeBack = false ;
    } 
};


let clickMe = false;
let greenBack = function(){
    let greenBackBtn = document.getElementsByTagName('body');
    if(clickMe === false) {
        greenBackBtn[0].style.backgroundColor = 'green';
        alert('you will change the webpage color to green');

        greenBack = true ;

    } else if(clickMe === true) {
        greenBackBtn[0].style.backgroundColor = 'e0e4e7';

        greenBack = false ;
    } 
};

