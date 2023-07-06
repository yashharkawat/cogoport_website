
document.querySelectorAll('.items').forEach((item)=>{
  item.addEventListener('click',()=>{
    item.style.color='red';
  })
})
console.log('hello');

function add(num1,num2){
    return num1+num2;
}
console.log("hello");

let item=document.getElementsByClassName('industries_served');

var element=document.createElement('img');

const fs = require(['fs']);

fs.readdir('./industries_images', (err, files) => {
  if (err) throw err;
  console.log(files);
});

