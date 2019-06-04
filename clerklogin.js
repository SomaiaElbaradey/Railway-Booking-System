
 var username ="";
 var password ="";

 //var resultElement = document.getElementById('getResult2');

var btn =document.getElementById("click");
btn.addEventListener("click", Data);
function Data(event) {
  event.preventDefault()
  username=document.getElementById("clid").value;
  password=document.getElementById("passid").value;
  //console.log(username);
  //alert(username);
axios.post('http://localhost:3000/api/clerklogin', {
  username: username,
  password: password
})
  .then(function (response) {   
   console.log(response);
  //  window.location = location.protocol + "//" + location.hostname + "/NewPath";
   window.location.href = './booking.html' 
  // we are opening passenger in the railway_booking_system folder to get to a new file in the same folder just access it by ./ then type file name
  })
  .catch(function (error) {
    console.log(error);
    alert("make sure you enterd your right information!")
  });
}



