
//get references
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('todo')

//function to add todo list
const liMaker = (text, index) => {
    
    const li = document.createElement('li')
    li.id = index
    
    const span = document.createElement('span')
    span.className += "badge badge-danger float-right"
    span.textContent = "Remove"
    span.style.cursor = "pointer"

    //bind the remove badge click button
    span.onclick = function () {
        parent = this.parentElement;
        parent.parentElement.removeChild(parent)
        parent.removeChild(this) 
        itemsArray[index] = null
        localStorage.setItem('items', JSON.stringify(itemsArray.filter(function(item) {
            return item !== null
        })))

    };

    li.textContent = text
    ul.appendChild(li)
    li.appendChild(span)

}

// Get the items from local storage and show in the dom
let items = localStorage.getItem("items")

let itemsArray = []
if (items) {
    itemsArray = JSON.parse(items)
    itemsArray.forEach((element, index) => {
        liMaker(element, index)
    });
}

// On submit add li from input value
form.addEventListener('submit', function (e) {
    e.preventDefault()

    liMaker(input.value)
    itemsArray.push(input.value)
    console.log(itemsArray)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    input.value = ''

})

  //Remove all li's 
  button.addEventListener('click', function(){

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
        localStorage.clear()
    }

  })