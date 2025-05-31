let text = document.getElementById('text');
let startbtn = document.getElementById('start');
let newbtn = document.getElementById('newCard');
let cardlist = document.getElementById('cardlist');
let sumtext = document.getElementById('sum');
let cardvalue = 0;
let sumvalue = 0;
let startbool = false;

function start()
{
    startbool = true;
    text.style.color = "gold";
    text.innerText = "Lets Go!";
    startbtn.innerText = "RESTART";
    cardvalue = 0;
    sumvalue = 0;
    cardlist.textContent = "";
    sumtext.textContent = "Sum: ";
    console.log("started");
}

function newcard()
{
    if(startbool)
    {
        cardvalue = Math.ceil(Math.random() * 11);
        sumvalue += cardvalue
        sumtext.innerText = "Sum: " + sumvalue;
        cardlist.innerText += " " + cardvalue;
        if(sumvalue < 21)
        {
            text.style.color = "orange";
            text.innerText = "Get a new card!";
        }
        else if(sumvalue === 21)
        {
            text.style.color = "#0f0";
            text.innerText = "Congratz!!! You got Blackjack!";
            startbool = false;
        }
        else
        {
            text.style.color = "red";
            text.innerText = "Oops! You are out of the game...";
            startbool = false;
        }
    }
}

function restart()
{
    cardvalue = 0;
    sumvalue = 0;
    cardlist.innerText = "";
}

startbtn.onclick = start;
newbtn.onclick = newcard;