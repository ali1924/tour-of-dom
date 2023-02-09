console.log("append place list");
// 1. whare to add
const appendPlace=document.getElementById('place-id');
// 2. what to be added
const li=document.getElementById('li');
li.innerText='MDG';
// 3. add the child
appendPlace.appendChild(li);

//
const mainSection=document.getElementById('main-section-id');
const addSection=document.createElement('section');
const addHeading=document.createElement('h1');
addHeading.innerText='New Heading';
addSection.appendChild(addHeading);
mainSection.appendChild(addSection);