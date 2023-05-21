// ADD CLASS
let addBtn = document.querySelector('.add-btn');

let addClass = () => {
    document.querySelector("#body").classList.add('bg-dark');
    document.querySelector("#add").classList.add('orange', 'text-white');
    document.querySelector("#add-class").innerHTML = document.querySelector("#add").classList;
};

addBtn.addEventListener('click', addClass);

// REMOVE CLASS

let removeBtn = document.querySelector('.remove-btn');

let removeClass = () => {
    document.querySelector("#body").classList.remove('bg-dark');
    document.querySelector("#add").classList.remove('orange','text-white','blue');
    document.querySelector("#add-class").innerHTML = document.querySelector("#add").classList, document.querySelector("#body").classList;
};

removeBtn.addEventListener('click', removeClass);

// REPLACE CLASS

let replaceBtn = document.querySelector('.replace-btn');

let replaceClass = () => {
    document.querySelector("#add").classList.replace('orange', 'blue');
    document.querySelector("#add-class").innerHTML = document.querySelector("#add").classList;
    document.querySelector("#replace-class").innerHTML = "Replaced";
    document.querySelector("#replace-class").classList.toggle('text-white');
};

replaceBtn.addEventListener('click', replaceClass);

// ITEM CLASS

let itemBtn = document.querySelector('.item-btn');

let itemClass = () => {
    document.querySelector("#item-class").innerHTML = document.querySelector("#add").classList.item(0);
};

itemBtn.addEventListener('click', itemClass);

// CONTAINS CLASS

let containsBtn = document.querySelector('.contains-btn');

let containsClass = () => {
    document.querySelector("#contains-class").innerHTML = document.querySelector("#add").classList.contains('blue');
};

containsBtn.addEventListener('click', containsClass);

// TOGGLE CLASS

let toggleBtn = document.querySelector('.toggle-btn');

let toggleClass = () => {
    document.querySelector("#body").classList.toggle('bg-dark');
    document.querySelector("#toggle-class").innerHTML = document.querySelector("#body").classList, document.querySelector("#toggle-class").classList.toggle('text-white');
};

toggleBtn.addEventListener('click', toggleClass);
