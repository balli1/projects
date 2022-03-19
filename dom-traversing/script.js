/* (1) 
- Make this file run when the html is loaded by adding the appropriate tag. 
- Be sure the script.js execution occurs after the elements are created.
- Log a message in your chrome dev tools to confirm the file is running.
*/

console.log("hello")

/* (2)
- Select the component with Id of 'container' and save it to a variable
- console.log your variable and view in console 
      - this will sometimes appear as an element and sometimes as an HTML object
-console.dir your variable and view it's properties
      - this will always appear as an HTML Object with properties
*/
const containerElm = document.getElementById('container')

console.log(containerElm)
console.dir(containerElm)


/* (3) 
- Create a div element using Javascript and save it to a variable.
- assign it a class of 'box-container'
- put it in the container element you selected above
(view your results in the elements tab of your chrome dev tools)
*/

const boxContainerEl = document.createElement('div')
boxContainerEl.className = 'box-container'
containerElm.appendChild(boxContainerEl)

/* (4)
- using a for loop:
    - create 10 elements with class of 'box box[index]' 
    - append the elements to the box-container div you created above
    - add a data attribute called 'number' (data-number) equal to the index + 1
       - if index + 1 is greater then 10 set value to 0
*/
for (let i = 0; i < 10; i++) {
    const element = document.createElement('div');
    const number = i + 1 >= 10 ? 0 : i + 1
    element.className = 'box box' + (i + 1)
    element.setAttribute('data-number', number)
    boxContainerEl.appendChild(element)
}

/* (5)
- using the selected box-container element saved above:
    - select the children of this element
    - iterate over the children and set the internal HTML to the value found in it's data-number attribute
*/

const boxes = boxContainerEl.children
for (element of boxes) {
    element.innerHTML = element.dataset['number']
}

/* (6)
- using the box-container element from above:
    - create a div with the Id of number-area 
    - add this div as a sibling before the box-container element
*/

const parent = boxContainerEl.parentElement
const numberAreaEl = document.createElement('div')
numberAreaEl.id = 'number-area'
parent.prepend(numberAreaEl)

/* BONUS!!!
- set an event listener on every box element where clicking to run a function
- this function should update the inner value of the #number element with the data-number of the element
*/

for (element of boxes) {
    element.addEventListener('click', updateNumberArea)
}

function updateNumberArea(e) {
    numberAreaEl.innerHTML = e.target.dataset['number']
}


