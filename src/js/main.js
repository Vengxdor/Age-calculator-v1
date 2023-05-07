//single
const button = document.querySelector(".img-container img")
const check = document.querySelector("#switch")
const container = document.querySelector(".container")

//ALL
const error = document.querySelectorAll(".date-error")
const results = document.querySelectorAll(".results span")
const info = document.querySelectorAll(".results")
const numbers = document.querySelectorAll(".date-number")
const dateText = document.querySelectorAll(".date-text")
const dateInput = document.querySelectorAll(".date-text input")

//ID
const year = document.getElementById("year")
const month = document.getElementById("month")
const day = document.getElementById("day")



let currentDate = new Date();

const year2023 = {
   '1': 31,
   '2': 28,
   '3': 31,
   '4': 30,
   '5': 31,
   '6': 30,
   '7': 31,
   '8': 31,
   '9': 30,
   '10': 31,
   '11': 30,
   '12': 31
 };

let currentYear = parseInt(currentDate.getFullYear());
let currentMonth = parseInt(currentDate.getMonth()) + 1;
let currentMonthDays = parseInt(year2023[currentMonth])
let currentDay = parseInt(currentDate.getDay());


/*
   dias
*/

button.addEventListener("click", e =>{

   //dia dependiendo del mes
   if(day.value > year2023[month.value]  ){
      error[0].style.display = "block";
      return error[0].textContent = "must be a valid day"
   }else{
      error[0].style.display = "none";
   }

   if(day.value > 31 ){
      error[0].style.display = "block";
      return error[0].textContent = "must be a valid day"
   }else{
      error[0].style.display = "none";
   }

   if(month.value > 12   ){
      error[1].style.display = "block";
      return error[1].textContent = "must be a valid day"
   }else{
      error[1].style.display = "none";
   }

   if(year.value > 2023 || year.value < 1910  ){
      error[2].style.display = "block";
      return error[2].textContent = "must be a valid day"
   }else{
      error[2].style.display = "none";
   }

   


   /*
      Fecha Actual  
   */

   let getYear =  ((currentYear - parseInt(year.value)));
   let getMonth = parseInt(month.value);
   let getDay =  parseInt(day.value);

  

   if (getMonth === currentMonth && currentDay === getDay) {
      getMonth = 0;
      getDay = 0;
   } else {
    
      const startDate = new Date(currentYear, getMonth - 1, getDay);
      const endDate = new Date(currentYear, currentMonth - 1, currentDay);
    
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
      const months = Math.floor(diffDays / 30);
      const days = diffDays % 30;
    
      getMonth = months;
      getDay = days;
   }

   
/*
   Limites 
*/


         
numbers.forEach(item =>{
            
            
   const parent = item.parentElement 
   const span = parent.querySelector("span")   
   const p = parent.querySelector("p")        

   
   if(numbers[0].value > 31  || numbers[1].value > 12){
      p.style.color =  "var(--errorColor)"
       span.classList.remove("empty")
       span.textContent = "Must be in the past "
       console.log("a");
    }else{
       span.classList.add("empty")
       p.style.color =  "var(--colorGray)"       
       console.log("b");
    }

 })  

   
   
   
   /*
   Vacio
   */
  numbers.forEach(item =>{
     // si el valor es nada...
     if(item.value === ""){
         const parent = item.parentElement 
         const span = parent.querySelector("span")   
         const p = parent.querySelector("p")        
         p.style.color =  "var(--errorColor)"
         
         span.classList.remove("empty")
         span.textContent = "this field is required"
         console.log(parent);
         
      }else{
         const parent = item.parentElement 
         const span = parent.querySelector("span")   
         span.classList.add("empty")
         const p = parent.querySelector("p")        
         p.style.color =  "#000"       
      }
   })     
   
   
   
   


   numbers.forEach((item, index) =>{
      results[index].textContent = [getYear, getMonth, getDay][index]
   })
   
})




/*
   CHECKBOX
// */

check.addEventListener('change', function() {
   if(this.checked) {
       document.body.style.backgroundColor = '#1a1c1e';
       numbers.forEach(item => item.style.border = 'solid 1px #fff')
       numbers.forEach(item => item.style.backgroundColor = '#3b3b3b')
       container.style.backgroundColor = '#131516'
       numbers.forEach(item => item.style.color = '#fff')  
       dateText.forEach(item => item.style.color = '#fff')
       dateInput.forEach(item => {
         item.classList.toggle("")
        })  
        info.forEach(item => item.style.color = "#fff")
   }else{
      document.body.style.backgroundColor = '';
       numbers.forEach(item => item.style.border = '')
       numbers.forEach(item => item.style.backgroundColor = '')
       container.style.backgroundColor = ''
       numbers.forEach(item => item.style.color = '')  
       dateText.forEach(item => item.style.color = '')  
       info.forEach(item => item.style.color = '')
   }
     
});