/* DISCLAIMER : THIS IS ME PRACTICING AND LEARNING VANILLA JAVA SCRIPT DOM. 
IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES */

// EXAMINE THE DOCUMENT OBJECT // 
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


// GET ELEMENT BY ID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBlock = 'solid 3px green';

// GET ELEMENT BY CLASS NAME // 
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


// GET ELEMENT BY TAG NAME // 
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


// QUERY SELECTOR // 
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


// QUERY SELECTOR ALL //
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
