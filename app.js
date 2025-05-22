var email_address=document.querySelector("input");
var Password=document.getElementById("input2");
var login=document.getElementById("Login");

var email="olaoluwadehinde24@gmail.com";

var Password_bucket=[
    "delulu56",
    "genzee34+"
];



login.addEventListener('click',()=>{
      if (Password.value=="" && email_address.value==""){
        alert("your papa!!!")
      }else
      if(Password.value==Password_bucket[0] || Password.value==Password_bucket[1] && email_address.value==email){
        window.location.href ="http://127.0.0.1:5501/home.html";
      }else
      if (Password.value!=Password_bucket[0] || Password.value!=Password_bucket[1] && email_address.value!=email){
        alert("invalid data")
        
      }
     

});