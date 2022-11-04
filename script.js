
const redColor = document.getElementById('color-red');
redColor.style.backgroundColor='red';
const blueColor = document.getElementById('color-blue');
blueColor.style.backgroundColor='blue';
const purpleColor = document.getElementById('color-purple');
purpleColor.style.backgroundColor='purple';
const orangeColor = document.getElementById('color-orange');
orangeColor.style.backgroundColor='orange';
const greenColor = document.getElementById('color-green');
greenColor.style.backgroundColor='green';

let naviStatus= false;

let clickBtnn = function() {
    let getMenuList = document.querySelector('header .menu-list');
    let getMenuLiEl = document.querySelector('.menu-list #menuLi');

        if(naviStatus === false) {
            getMenuLiEl.style.display = 'flex';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = true ;

        }  else if(naviStatus === true) {
            getMenuLiEl.style.display = 'none';
            getMenuList.style.transition = 'all 1s ease';

            naviStatus = false ;
        }         
};


let bodyElement = document.querySelector('body');
const clickMeHome = false;
const mainColor = function(){
    if(clickMeHome === false) {
        bodyElement.style.backgroundColor = '#e0e4e7';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to main color');

        mainColor = true ;

    } else if(clickMeHome === true) {
        bodyElement.style.backgroundColor = '';

        mainColor = false ;
    } 
};

const clickMeRed = false;
const redBack = function(){
    if(clickMeRed === false) {
        bodyElement.style.backgroundColor = 'red';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to red');

        redBack = true ;

    } else if(clickMeRed === true) {
        bodyElement.style.backgroundColor = '';

        redBack = false ;
    } 
};

const clickMeBlue = false;
const blueBack = function(){
    if(clickMeBlue === false) {
        bodyElement.style.backgroundColor = 'blue';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to blue');

        blueBack = true ;

    } else if(clickMeBlue === true) {
        bodyElement.style.backgroundColor = '#e0e4e7';

        blueBack = false ;
    } 
};

const clickMePurple = false;
const purpleBack = function(){
    if(clickMePurple === false) {
        bodyElement.style.backgroundColor = 'purple';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to purple');

        purpleBack = true ;

    } else if(clickMePurple === true) {
        bodyElement.style.backgroundColor = 'e0e4e7';

        purpleBack = false ;
    } 
};

const clickMeOrange = false;
const orangeBack = function(){
    if(clickMeOrange === false) {
        bodyElement.style.backgroundColor = 'orange';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to orange');

        orangeBack = true ;

    } else if(clickMeOrange === true) {
        bodyElement.style.backgroundColor = 'e0e4e7';

        orangeBack = false ;
    } 
};

const clickMe = false;
const greenBack = function(){
    if(clickMe === false) {
        bodyElement.style.backgroundColor = 'green';
        //uncomment the alert function to get alerted
        //alert('you will change the webpage color to green');

        greenBack = true ;

    } else if(clickMe === true) {
        bodyElement.style.backgroundColor = 'e0e4e7';

        greenBack = false ;
    } 
};
