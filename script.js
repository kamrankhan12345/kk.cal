let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button'); 
 
 let string = "";
 let arr = Array.from(buttons);
 arr.forEach(button => {
button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
       string = "";
       input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    else{
        string = string+e.target.innerHTML;
        input.value = string;
    }
})
 });
 let a;
 let time ;
 let date;
 setInterval(()=>{
  a = new Date();
  time = a.getHours() + ":" + a.getMinutes()+ ":"+ a.getSeconds();
  date = a.toLocaleDateString();
  document.getElementById('time').innerHTML = "Time" +   time  +"and Date"+ date;
  
 }, 1000)
 
