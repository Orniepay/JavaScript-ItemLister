/* DISCLAIMER : THIS IS ME PRACTICING AND LEARNING VANILLA JAVA SCRIPT DOM. 
IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES */

/* EXAMINE THE DOCUMENT OBJECT */ 
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


/* GET ELEMENT BY ID */
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBlock = 'solid 3px green';

/* GET ELEMENT BY CLASS NAME */ 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// // Gives error : 
// // items.style.fontWeight = 'bold';
// // items.style.backgroundColor = '#f4f4f4';
// // How to fix : (by loop through items object)
// for(var i = 0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = '#f4f4f4';
// }


/* GET ELEMENT BY TAG NAME */ 
// var li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';

// // Gives error : 
// // li.style.fontWeight = 'bold';
// // li.style.backgroundColor = '#f4f4f4';
// // How to fix : (by loop through items object)
// for(var i = 0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor = '#f4f4f4';
// }


/* QUERY SELECTOR */ 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'purple';


/* QUERY SELECTOR ALL */
// var titles = document.querySelectorAll(".title")
// console.log(titles);
// console.log(titles[0]);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)') 
// var even = document.querySelectorAll('li:nth-child(even')

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

//==================================================================================================================================================================//

/* TRAVERSING THE DOM */

// // parentNode :
// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// // parentNode of parentNode : 
// console.log(itemList.parentNode.parentNode);

// // parentElement :
// var itemList = document.querySelector("#items"); 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNodes : 
// var itemList = document.querySelector("#items");
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';


// firstChild :
// var itemList = document.querySelector("#items");
// console.log(itemList.firstChild);
// // firstElementChild :
// // var itemList = document.querySelector("#items");
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild : 
// var itemList = document.querySelector("#items");
// console.log(itemList.lastChild);
// lastElementChild : 
// var itemList = document.querySelector("#items");
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 2';


// nextSibling : 
// var itemList = document.querySelector("#items");
// console.log(itemList.nextSibling);
// nextElementSibling : 
// var itemList = document.querySelector("#items");
// console.log(itemList.nextElementSibling);


// previousSibling :
// var itemList = document.querySelector("#items");
// console.log(itemList.previousSibling);
// previousElementSibling : 
// var itemList = document.querySelector("#items");
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement : 

    // // Create a div : 
    // var newDiv = document.createElement('div');

    // // Add class to div : 
    // newDiv.className = 'Hello'; 

    // // Add id to div : 
    // newDiv.id = 'Hello1';

    // // Add attribute to div : 
    // newDiv.setAttribute('title', 'Hello Div');

    // // Create text node for content in div : 
    // var newDivText = document.createTextNode('Hello World');

    // // Add text to div : 
    // newDiv.appendChild(newDivText);

    // // insert into DOM : 
    // var container = document.querySelector('header .container');
    // var h1 = document.querySelector('header h1');
    // newDiv.style.fontSize = '30px';
    // // ... //
    // container.insertBefore(newDiv, h1);


    // console.log(newDiv);

//------------------------------------------------------------------------------------------------------//

/* EVENTS */ 

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123);
// });

// function buttonClick(){
//     // console.log('Button clicked');
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }

// Experimenting :
// function buttonClick(e){
//     console.log(e);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     var output = document.getElementById('output');
//     output.innerHTML = '<h3> +e.target.id+ </h3>';

//     console.log(e.clientX);
//     console.log(e.clientY);

//     console.log(e.offsetX);
//     console.log(e.offsetY);

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// var button = document.getElementById('button').addEventListener('click', runEvent);
// var box = document.getElementById('box').addEventListener('click', runEvent);

// Same thing as above. But, disconnected. 
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: ' +e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' +e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

    // document.body.style.backgroundColor = 'rgb('+e.offset+','+e.offsetY+',40)';
// }

//----------------------------------------------------------------------------------------------------------//

/* FINAL PROJECT : */

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}