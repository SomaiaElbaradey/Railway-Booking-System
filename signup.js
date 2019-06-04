
 var username ="";
 var password ="";
 var email ="";
 var age ="";
 var card ="";
 var gender = " ";

 var resultElement = document.getElementById('getResult2');

var btn =document.getElementById("click");
btn.addEventListener("click", Data);
function Data(event) {
  event.preventDefault()
    username=document.getElementById("userid").value;
    password=document.getElementById("passid").value;
    email = document.getElementById("emailid").value;
    age = document.getElementById("ageid").value;
    card =document.getElementById("cardid").value;
    gender = document.getElementById("genderid").value;
  //alert(username);
  //console.log(gender);
axios.post('http://localhost:3000/api/signup', {
    username: username,
    password: password,
    email:email,
    age:age,
    card:card,
    gender:gender
  })
    
  .then(function (response) {   
   console.log(response);
   window.location.href = './passenger.html'
   console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });
}



