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
    timeBlock.append(hourBlock)

    //Creating an input tag to hold whatever the user types
    let inputBlock = document.createElement('input')
    inputBlock.setAttribute('class', 'col-9')
    inputBlock.setAttribute('id', 'input' + i)
    timeBlock.append(inputBlock)

    //Creating a button tag which will allow the user to save their inputs to local storage
    let buttonBlock = document.createElement('button')
    buttonBlock.setAttribute('class', 'col-1 saveBtn')
    buttonBlock.setAttribute('id', 'button' + i)
    buttonBlock.textContent = "Save"
    timeBlock.append(buttonBlock)

    //Appending the timeBlock div to the container div in index.html
    bigBlock.append(timeBlock)
}

$('#input0').attr('value', localStorage.input9am)
$('#input1').attr('value', localStorage.input10am)
$('#input2').attr('value', localStorage.input11am)
$('#input3').attr('value', localStorage.input12pm)
$('#input4').attr('value', localStorage.input1pm)
$('#input5').attr('value', localStorage.input2pm)
$('#input6').attr('value', localStorage.input3pm)
$('#input7').attr('value', localStorage.input4pm)
$('#input8').attr('value', localStorage.input5pm)

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
$('#button0').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input9am', inp0.value)

    inp0.text(localStorage.getItem('input9am'))

})

$('#button1').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input10am', inp1.value)

    inp1.text(localStorage.getItem('input10am'))

})

$('#button2').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input11am', inp2.value)

    inp2.text(localStorage.getItem('input11am'))

})

$('#button3').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input12pm', inp3.value)

    inp3.text(localStorage.getItem('input12pm'))

})

$('#button4').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input1pm', inp4.value)

    inp4.text(localStorage.getItem('input1pm'))

})

$('#button5').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input2pm', inp5.value)

    inp5.text(localStorage.getItem('input2pm'))

})

$('#button6').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input3pm', inp6.value)

    inp6.text(localStorage.getItem('input3pm'))

})

$('#button7').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input4pm', inp7.value)

    inp7.text(localStorage.getItem('input4pm'))

})

$('#button8').on('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input5pm', inp8.value)

    inp8.text(localStorage.getItem('input5pm'))

})

//Checks the time and adds the correct class based on the time
function timeCheck0 (past, present, future) {
    if (past > present) {
        $('#input0').addClass('past')
    } else if (past < present) {
        $('#input0').addClass('future')
    } 
    if (past < future) {
        $('#input0').addClass('present')
    }
}

timeCheck0(now, timeNine, timeTen)

function timeCheck1 (past, present, future) {
    if (past > present) {
        $('#input1').addClass('past')
    } else if (past < present) {
        $('#input1').addClass('future')
    } 
    if (past < future) {
        $('#input1').addClass('present')
    }
}

timeCheck1(now, timeNine, timeTen)

function timeCheck2 (past, present, future) {
    if (past > present) {
        $('#input2').addClass('past')
    } else if (past < present) {
        $('#input2').addClass('future')
    } 
    if (past < future) {
        $('#input2').addClass('present')
    }
}

timeCheck2(now, timeNine, timeTen)

function timeCheck3 (past, present, future) {
    if (past > present) {
        $('#input3').addClass('past')
    } else if (past < present) {
        $('#input3').addClass('future')
    } 
    if (past < future) {
        $('#input3').addClass('present')
    }
}

timeCheck3(now, timeNine, timeTen)

function timeCheck4 (past, present, future) {
    if (past > present) {
        $('#input4').addClass('past')
    } else if (past < present) {
        $('#input4').addClass('future')
    } 
    if (past < future) {
        $('#input4').addClass('present')
    }
}

timeCheck4(now, timeNine, timeTen)

function timeCheck5 (past, present, future) {
    if (past > present) {
        $('#input5').addClass('past')
    } else if (past < present) {
        $('#input5').addClass('future')
    } 
    if (past < future) {
        $('#input5').addClass('present')
    }
}

timeCheck5(now, timeNine, timeTen)

function timeCheck6 (past, present, future) {
    if (past > present) {
        $('#input6').addClass('past')
    } else if (past < present) {
        $('#input6').addClass('future')
    } 
    if (past < future) {
        $('#input6').addClass('present')
    }
}

timeCheck6(now, timeNine, timeTen)

function timeCheck7 (past, present, future) {
    if (past > present) {
        $('#input7').addClass('past')
    } else if (past < present) {
        $('#input7').addClass('future')
    } 
    if (past < future) {
        $('#input7').addClass('present')
    }
}

timeCheck7(now, timeNine, timeTen)

function timeCheck8 (past, present, future) {
    if (past > present) {
        $('#input8').addClass('past')
    } else if (past < present) {
        $('#input8').assClass('future')
    } 
    if (past < future) {
        $('#input8').addClass('present')
    }
}

timeCheck8(now, timeNine, timeTen)
