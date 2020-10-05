
/* to do list*/

let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener ("submit", (e)=>{
    e.preventDefault()   
    createItem(ourField.value)
})

function createItem(x){
    let ourHTML = `<li>${x}<button onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend",ourHTML)
    ourField.value = ""
    ourField.focus()
    }

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}


/* end to do list*/

/* show menu*/
const neuburger = document.querySelector('.menu-btn')
const changelings = document.querySelectorAll('.line:not(:nth-child(2n))')

neuburger.addEventListener('click', () => {
	changelings.forEach(s => {
		if (s.classList.contains('closed')) {
			s.classList.toggle('closed')
			setTimeout(() => s.classList.toggle('disappear'), 500)
		} else {
			s.classList.toggle('closed')
			s.classList.toggle('disappear')
		}
	})
})

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');

    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

/* end show menu*/

/* cursor*/

    var cursor = document.getElementById("cursor")
    document.addEventListener("mousemove", 
        function(e) {
            var x = e.clientX
            var y = e.clientY
            cursor.style.left = x + "px"
            cursor.style.top = y + "px"
        })

/* end cursor*/

/* clock */

    /* define variables */

    const timerDisplay = document.querySelector("#timerDisplay")
    const startTimer = document.querySelector("#startTimer")
    const resetTimer = document.querySelector ("#resetTimer")
    const workMinutes = document.querySelector ("#workMinutes")
    const breakMinutes = document.querySelector("#breakMinutes")
    const condition = document.querySelector("#condition")

    const workPlus = document.querySelector("#workPlus")
    const workMinus = document.querySelector("#workMinus")
    const breakPlus = document.querySelector("#breakPlus")
    const breakMinus = document.querySelector("#breakMinus")

    let isBreak = true
    let isPaused = true
    let toReset = false
    let seconds = 0
    let remaining = 0
    let countdown = 0

     /* start and reset button */

     startTimer.addEventListener("click", () => {
        clearInterval(countdown)
        if (isPaused) {
            startCountdown()
            startTimer.textContent = "Pause"
            condition.textContent ="lets go"
            isPaused = false
        } else {
            remaining = seconds
            startTimer.textContent = "Continue"
            condition.textContent ="keep on going"
            isPaused = true
        }
 })


    resetTimer.addEventListener ("click", ()=> {
        clearInterval(countdown)
        seconds = workMinutes.textContent * 60
        countdown = 0
        remaining = 0
        isPaused = true
        isBreak = true
        condition.textContent ="you are doing great"
        startTimer.textContent = "start"
        
        displayTimeLeft(seconds)
    })

    function timer() {
        seconds--
        if (seconds <0) {
            clearInterval(countdown)
            alarm.currentTime = 0;
            alarm.play();
        
            if (isBreak) {
                seconds = breakMinutes.textContent * 60
                condition.textContent ="have a break"
                isBreak = false
            } else {
                seconds = workMinutes.textContent * 60
                condition.textContent ="keep on going"
                isBreak = true
            }
            countdown= setInterval (timer, 1000)
            return
        }
        displayTimeLeft(seconds)
    } 

    function startCountdown() {
        if (remaining != 0) {
        seconds = remaining
        } else {
            seconds = workMinutes.textContent * 60
            condition.textContent="lets go"
        }
        countdown = setInterval (timer, 1000)
    }

    function displayTimeLeft(seconds) {
        const minutes =  Math.floor(seconds / 60)
        const moreSeconds = seconds % 60
        timerDisplay.textContent = `${minutes}:${moreSeconds < 10 ? '0' : ''}${moreSeconds}`
    }


    workPlus.addEventListener("click", ()=> {
        let x = parseInt(workMinutes.textContent)
        if (x < 60) {
            workMinutes.textContent = x+5
        }
    })


    workMinus.addEventListener('click', () => {
        let x = parseInt(workMinutes.textContent)         
        if (x > 5) {
            workMinutes.textContent = x-5
        }                       
    })

    breakPlus.addEventListener('click', () => {
        let x = parseInt(breakMinutes.textContent)          
        if (x < 60) {
            breakMinutes.textContent = x+1
    }                       
    })

    breakMinus.addEventListener('click', () => {
        let x = parseInt(breakMinutes.textContent);          
        if (x > 1) {
            breakMinutes.innerHTML = x-1
   }                       
 }) 

/* end clock */

/* random generator */

    let chills = [
        {chill: "Step Outside"},
        {chill: "Take 10 Deep Breaths"},
        {chill: "Eat an Apple S-L-O-W-L-Y"},
        {chill: "Make Animals of the Clouds"},
        {chill: "Laugh off the Tension"},
        {chill: "Dance Party!"},
        {chill: "Re-Waterize Yourself"}
        ]

        let chill = document.getElementById("chill")
        let symbol = document.getElementById("symbol")
        let button = document.getElementById("button")

        button.addEventListener("click",()=> {
            let random = Math.floor(Math.random() * chills.length)

            chill.innerHTML = chills[random].chill
            //symbol.innerHTML = chills[random].symbol
    })

/* end random generator */



const pages = document.querySelector('.pages');
const locale = window.navigator.language || 'en-us'

let date = new Date();
let dayNum = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(locale, { weekday: 'long' });
let monthName = date.toLocaleString(locale, { month: 'long' });
let year = date.getFullYear();

function daysInMonth (month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function getNewDate () {
  if (dayNum < daysInMonth(month, year)) {
    dayNum++;
  } else {
    dayNum = 1;
  } 
  if (dayNum === 1 && month < 11) {
    month++;
  } else if (dayNum === 1 && month === 11) {
    month = 0;
  }
  if (dayNum ===1 && month === 0) {
    year++;
  }
  const newDate = new Date(year, month, dayNum);
  dayName = newDate.toLocaleString('en-us', { weekday: 'long' });
  monthName = newDate.toLocaleString('en-us', { month: 'long' });
}

function handleClick (e) {
  getNewDate();
  updateCalendar(e.target);
}

function updateCalendar (target) {
  if (target && target.classList.contains('page')) {
    target.classList.add('tear');
    setTimeout(() => {
      pages.removeChild(target);
    }, 800);
  } else {
    return;
  }
  renderPage();
}

function renderPage () {
  const newPage = document.createElement('div');
  newPage.classList.add('page');
  newPage.innerHTML = `
    <p class="month">${monthName}</p>
    <p class="day">${dayNum}</p>
    <p class="day-name">${dayName}</p>
    <p class="year">${year}</p>
  `;
  pages.appendChild(newPage);
}

renderPage();

pages.addEventListener('click', handleClick);

