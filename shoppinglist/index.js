//Create variables for <ul>, <input>, and <button> elements
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => { //Create function to run when button is clicked
  
  const myItem = input.value; //Store the current value of the input element in a variable
  
  input.value = ''; //empty input element by setting vlue to empty string
  //Create new elements for <li>, <span>, and <button> and store in variables
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listButton = document.createElement('button');

  listItem.appendChild(listText); //append span as child of list item
  listText.textContent = myItem; //set text content of span to input.value
  listItem.appendChild(listButton); //append button as child of list item
  listButton.textContent = 'Delete'; //set text content of button to delete
  list.appendChild(listItem); //append list item as a child of the list

  listButton.addEventListener('click', () => { //event handler to delete button to delete list item
    list.removeChild(listItem);
  });

  input.focus(); //focus method to focus input element ready for list entry
});

