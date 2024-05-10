// baitap3
document.getElementById("registerForm").addEventListener("submit",function (event){
    event.preventDefault();
    var user = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    

    var userInfo = {
        name : user,
        age : age ,
        email : email,
    }
    console.log (userInfo)
    localStorage.setItem('userInfo',JSON.stringify(userInfo));

 
    window.location.href = "show.html";

   

});
