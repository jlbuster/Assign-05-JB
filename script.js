let bigBlock = document.getElementById('container')
let justDay = document.getElementById('currentDay')
let hours = [9,10,11,12,1,2,3,4,5]
let now = moment()
let timeNine = moment('9:00AM', 'h:mmA')
let timeTen = moment('10:00AM', 'h:mmA')

//Setting the the current day under the title of the page
justDay.textContent = moment().format('dddd, MMMM Do')

//Creating the timeblocks
for (i = 0; i < 9; i++) {
    //Creating a div to hold one timeblock
    let timeBlock = document.createElement('div')
    timeBlock.setAttribute('id', 'timeBlock')
    timeBlock.setAttribute('class', 'row')

    //Creating a p tag to hold the time of day (in hours) on the left side of the div
    let hourBlock = document.createElement('p')
    hourBlock.setAttribute('class', 'col-2 hour')
    if (i < 3) {
        hourBlock.textContent = hours[i] + 'AM'
    } else {
        hourBlock.textContent = hours[i] + 'PM'
    }
    timeBlock.appendChild(hourBlock)

    //Creating an input tag to hold whatever the user types
    let inputBlock = document.createElement('input')
    inputBlock.setAttribute('class', 'col-9')
    inputBlock.setAttribute('id', 'input' + i)
    timeBlock.appendChild(inputBlock)

    //Creating a button tag which will allow the user to save their inputs to local storage
    let buttonBlock = document.createElement('button')
    buttonBlock.setAttribute('class', 'col-1 saveBtn')
    buttonBlock.setAttribute('id', 'button' + i)
    buttonBlock.textContent = "Save"
    timeBlock.appendChild(buttonBlock)

    //Appending the timeBlock div to the container div in index.html
    bigBlock.appendChild(timeBlock)
}

document.getElementById('input0').setAttribute('value', localStorage.input9am)
document.getElementById('input1').setAttribute('value', localStorage.input10am)
document.getElementById('input2').setAttribute('value', localStorage.input11am)
document.getElementById('input3').setAttribute('value', localStorage.input12pm)
document.getElementById('input4').setAttribute('value', localStorage.input1pm)
document.getElementById('input5').setAttribute('value', localStorage.input2pm)
document.getElementById('input6').setAttribute('value', localStorage.input3pm)
document.getElementById('input7').setAttribute('value', localStorage.input4pm)
document.getElementById('input8').setAttribute('value', localStorage.input5pm)

//Creating variables for the on local storage stuff
let inp0 = document.getElementById('input0')
let inp1 = document.getElementById('input1')
let inp2 = document.getElementById('input2')
let inp3 = document.getElementById('input3')
let inp4 = document.getElementById('input4')
let inp5 = document.getElementById('input5')
let inp6 = document.getElementById('input6')
let inp7 = document.getElementById('input7')
let inp8 = document.getElementById('input8')


//Creating on click function so that buttons will save inputs to local storage
document.getElementById('button0').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input9am', inp0.value)

    inp0.textContent = localStorage.getItem('input9am')

})

document.getElementById('button1').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input10am', inp1.value)

    inp1.textContent = localStorage.getItem('input10am')

})

document.getElementById('button2').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input11am', inp2.value)

    inp2.textContent = localStorage.getItem('input11am')

})

document.getElementById('button3').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input12pm', inp3.value)

    inp3.textContent = localStorage.getItem('input12pm')

})

document.getElementById('button4').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input1pm', inp4.value)

    inp4.textContent = localStorage.getItem('input1pm')

})

document.getElementById('button5').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input2pm', inp5.value)

    inp5.textContent = localStorage.getItem('input2pm')

})

document.getElementById('button6').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input3pm', inp6.value)

    inp6.textContent = localStorage.getItem('input3pm')

})

document.getElementById('button7').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input4pm', inp7.value)

    inp7.textContent = localStorage.getItem('input4pm')

})

document.getElementById('button8').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input5pm', inp8.value)

    inp8.textContent = localStorage.getItem('input5pm')

})

//Checks the time and adds the correct class based on the time
function timeCheck0 (past, present, future) {
    if (past > present) {
        document.getElementById('input0').classList.add('past')
    } else if (past < present) {
        document.getElementById('input0').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input0').classList.add('present')
    }
}

timeCheck0(now, timeNine, timeTen)

function timeCheck1 (past, present, future) {
    if (past > present) {
        document.getElementById('input1').classList.add('past')
    } else if (past < present) {
        document.getElementById('input1').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input1').classList.add('present')
    }
}

timeCheck1(now, timeNine, timeTen)

function timeCheck2 (past, present, future) {
    if (past > present) {
        document.getElementById('input2').classList.add('past')
    } else if (past < present) {
        document.getElementById('input2').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input2').classList.add('present')
    }
}

timeCheck2(now, timeNine, timeTen)

function timeCheck3 (past, present, future) {
    if (past > present) {
        document.getElementById('input3').classList.add('past')
    } else if (past < present) {
        document.getElementById('input3').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input3').classList.add('present')
    }
}

timeCheck3(now, timeNine, timeTen)

function timeCheck4 (past, present, future) {
    if (past > present) {
        document.getElementById('input4').classList.add('past')
    } else if (past < present) {
        document.getElementById('input4').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input4').classList.add('present')
    }
}

timeCheck4(now, timeNine, timeTen)

function timeCheck5 (past, present, future) {
    if (past > present) {
        document.getElementById('input5').classList.add('past')
    } else if (past < present) {
        document.getElementById('input5').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input5').classList.add('present')
    }
}

timeCheck5(now, timeNine, timeTen)

function timeCheck6 (past, present, future) {
    if (past > present) {
        document.getElementById('input6').classList.add('past')
    } else if (past < present) {
        document.getElementById('input6').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input6').classList.add('present')
    }
}

timeCheck6(now, timeNine, timeTen)

function timeCheck7 (past, present, future) {
    if (past > present) {
        document.getElementById('input7').classList.add('past')
    } else if (past < present) {
        document.getElementById('input7').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input7').classList.add('present')
    }
}

timeCheck7(now, timeNine, timeTen)

function timeCheck8 (past, present, future) {
    if (past > present) {
        document.getElementById('input8').classList.add('past')
    } else if (past < present) {
        document.getElementById('input8').classList.add('future')
    } 
    if (past < future) {
        document.getElementById('input8').classList.add('present')
    }
}

timeCheck8(now, timeNine, timeTen)
