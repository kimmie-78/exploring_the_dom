//console.log(document)
//const myMessage = document.querySelector('.myMessage');
//myMessage.innerText ='This is a message in the DOM!'
//console.log(myMessage);

//const myMessage = document.querySelector('.myMessage');
//setTimeout(function(){
  //  myMessage.innerText = 'This is a message in the DOM!'
//}, 3000 )


//const theMessageButton = document.querySelector('.theMessageButton');
//theMessageButton.addEventListener('click', function() {
  //  alert("button clicked!")
//});
const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton =document.querySelector('.clearMessageButton')


theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'This is a message in the DOM!';

});
clearMessageButton.addEventListener('click',function(){

    myMessage.innerText= ' ';
});

const inputBox = document.querySelector('.theInputValue');
//theMessageButton.addEventListener('click', function() {
  //  myMessage.innerText = inputBox.value
//});

theMessageButton.addEventListener('click', function() {
    
       myMessage.innerText = inputBox.value;

}); 
myMessage.addEventListener('click', function() {
    //myMessage.classList.toggle('darkmode')
    myMessage.classList.add('darkmode')
})
 
const fruitList = document.querySelector(".fruits");
const fruitInput = document.querySelector('.inputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
} 
addFruitButton.addEventListener('click',function(){
  const li = document.createElement('li');
  li.innerText = fruitInput.value;
  fruitList.appendChild(li)
})