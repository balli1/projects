/* (1) 
- Make this file run when the html is loaded by adding the appropriate tag. 
- Be sure the script.js execution occurs after the elements are created.
- Log a message in your chrome dev tools to confirm the file is running.
*/
console.log("hello world");



/* (2)
- Select the component with Id of 'container' and save it to a variable
- console.log your variable and view in console 
      - this will sometimes appear as an element and sometimes as an HTML object
-console.dir your variable and view it's properties
      - this will always appear as an HTML Object with properties
*/
const varA = document.getElementById('container');
console.log(varA);
console.dir(varA);



/* (3) 
- Create a div element using Javascript and save it to a variable.
- assign it a class of 'box-container'
- put it in the container element you selected above
(view your results in the elements tab of your chrome dev tools)
*/
const varB = document.createElement('div');
varB.className = 'box-container';
varA.appendChild(varB);
console.log(varA);



/* (4)
- using a for loop:
    - create 10 elements with class of 'box box[index]' 
    - append the elements to the box-container div you created above
    - add a data attribute called 'number' (data-number) equal to the index + 1
       - if index + 1 is greater then 10 set value to 0
*/






/* (5)
- using the selected box-container element saved above:
    - select the children of this element
    - iterate over the children and set the internal HTML to the value found in it's data-number attribute
*/






/* (6)
- using the box-container element from above:
    - create a div with the Id of number-area 
    - add this div as a sibling before the box-container element
*/






/* BONUS!!!
- set an event listener on every box element where clicking to run a function
- this function should update the inner value of the #number element with the data-number of the element
*/





