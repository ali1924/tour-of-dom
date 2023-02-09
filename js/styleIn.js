const sections=document.querySelectorAll('section');
console.log("Setion Query");
console.log(sections);
for(const section of sections){
    console.log(section);
    //section style
    section.style.border='2px solid blue';
    section.style.borderRadius='50px';
}
//add class
const addClass=document.getElementById('pl-id');
addClass.classList.add('pl-new-class');
//remove class
// addClass.classList.remove('pl-new-class');
// addClass.classList.replace('pl-new','pl-old');