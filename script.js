let bigBlock = document.getElementById('container')
let justDay = document.getElementById('currentDay')
let hours = [9,10,11,12,1,2,3,4,5]

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

//Creating on click function so that buttons will save inputs to local storage
let inp0 = document.getElementById('input0')

document.getElementById('button0').addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.setItem('input', inp0.value)

    localStorage.getItem('input', inp0.value)

    inp0.value = localStorage.inp0.value



})
