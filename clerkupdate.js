
 var username ="";
 var password ="";

 var btn2 =document.getElementById("delete");
 btn2.addEventListener("click", Del);
 function Del(event) {
   event.preventDefault()
   password=document.getElementById("delid").value;
   console.log(password);
 axios.delete(`http://localhost:3000/api/clerks/${password}`, )
 
   .then(function (response) {   
    console.log(response);
    alert("the clerk was deleted!");
   
   })
   .catch(function (error) {
     console.log(error);
     alert("can not be deleted!");
   });
 }

 
 //var resultElement = document.getElementById('getResult2');
 var btn1 =document.getElementById("update");
 btn1.addEventListener("click", update);
 function update(event) {
   event.preventDefault()
   username=document.getElementById("clup").value;
   password=document.getElementById("clupp").value;
   //alert(username);
 axios.put('http://localhost:3000/api/clerks', {
   username: username,
   password: password
 })
 
   .then(function (response) {   
    console.log(response);
    alert("the clerk was updated!");
   
   })
   .catch(function (error) {
     console.log(error);
     alert("can not be updated!");
   });
 }

var btn =document.getElementById("add");
btn.addEventListener("click", Add);
function Add(event) {
  event.preventDefault()
  username=document.getElementById("userid").value;
  password=document.getElementById("passid").value;
  //alert(username);
axios.post('http://localhost:3000/api/clerks', {
  username: username,
  password: password
})

  .then(function (response) {   
   console.log(response);
   alert("clerk was added!");
  
  })
  .catch(function (error) {
    console.log(error);
    alert("can not be added!");
  });
}




