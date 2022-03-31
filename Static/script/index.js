/* Declaring varibles and arrays*/
const menuBtn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.offcanvas');

const btnprev = document.getElementById('btn-prev');
const btnnext = document.getElementById('btn-next');

const btnprev2 = document.getElementById('btn-prev2');
const btnnext2 = document.getElementById('btn-next2');

const runningCard = document.getElementById('running-card');
const dumbbellCard = document.getElementById('dumbbell-card');
const yogaCard = document.getElementById('yoga-card');

const runningCard2 = document.getElementById('running-card2');
const dumbbellCard2 = document.getElementById('dumbbell-card2');
const yogaCard2 = document.getElementById('yoga-card2');


var num= 0;
var num2=0;
var menuOpen= false;

const cards = [
    runningCard,
    dumbbellCard,
    yogaCard
];

const cards2 = [
    runningCard2,
    dumbbellCard2,
    yogaCard2
];

/* Defining functions*/
const cardChangeNext2 = () => 
{
    cards2[num2].classList.remove('active-card');
    num2++;
    if(num2>=cards2.length)
    {
        num2=0;
    }
    cards2[num2].classList.add('active-card');
}

const cardChangePrev2 = () => 
{
    cards2[num2].classList.remove('active-card');
    num2--;
    if(num2<0)
    {
        num2=cards2.length-1;
    }
    cards2[num2].classList.add('active-card');
}


const cardChangeNext = () => 
{
    cards[num].classList.remove('active-card');
    num++;
    if(num>=cards.length)
    {
        num=0
    }
    cards[num].classList.add('active-card');
}

const cardChangePrev = () => 
{
    cards[num].classList.remove('active-card');
    num--;
    if(num<0)
    {
        num=cards.length-1;
    }
    cards[num].classList.add('active-card');
}

const navbarOpen = () =>
{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

const navbarFocusClose = () =>
{
    if(menuOpen){
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}

/* calling events*/

btnnext2.addEventListener('click', () => {
    cardChangeNext2();
    });    

    btnprev2.addEventListener('click', () => {
        cardChangePrev2();
        });    
    
btnnext.addEventListener('click', () => {
cardChangeNext();
});

btnprev.addEventListener('click', () => {
    cardChangePrev();
});

menuBtn.addEventListener('click', () => {
    navbarOpen();
});

menuBtn.addEventListener('focus', () => {
    navbarFocusClose();
});

