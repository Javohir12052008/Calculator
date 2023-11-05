// Calculator
// Buttons
const buttons = document.querySelectorAll('.button');
// display
const display = document.querySelector('.display');
display.value = 0
str = ""   


buttons?.forEach(button => {
   button.addEventListener('click',(e)=>{
      if(e.target.textContent === "="){
        str = eval(str)
        display.value = str
      }else if(e.target.textContent === "C"){
        str = ""
        display.value = str
      }else if(e.target.textContent === "DE"){
        str = str.slice(0,str.length - 1)
        display.value = str
      }else{
        str += e.target.textContent
        display.value = str
      }
   });
});



