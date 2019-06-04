var sel_from = " ";
var current_date = " ";
var current_time = " ";
var t = " ";
var d = " ";
var sel_class = " ";
var sel_to = " ";

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = yyyy  + '-' + mm + '-' + dd;

var d = new Date(); // for now
var h =d.getHours(); // => 9
var min =d.getMinutes(); // =>  30
//var sec = d.getSeconds(); // => 51
tim = h + ":" +min;

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 


var btn_click =document.getElementById("click_book");
btn_click.addEventListener("click",book_btn);
function book_btn(event){
    event.preventDefault();
    sel_from = document.getElementById("select_from").value;//from
    sel_to = document.getElementById("select_to").value;
    t=document.getElementById("timee").value;//time
    d=document.getElementById("datee").value; //date
    sel_class =document.getElementById("select_class").value; //class
    current_date = today;
    current_time =tim;
    //console.log(current_time);
    //console.log(current_date);
    //console.log(d);
    //console.log(t);
axios.post('http://localhost:3000/api/booking', {
    fromstat: sel_from,
    tostat :sel_to,
    traveldate :d,
    traveltime: t,
    class: sel_class,
    bookdate:current_date,
    booktime: current_time
 
   })
    
  .then(function (response) {   
   console.log(response);
   //window.location.href = './passenger.html'
   alert("you have booked!");
   console.log(traveldate);
  })
  .catch(function (error) {
    console.log(error);
    alert("you caan not book!");
  });
}



