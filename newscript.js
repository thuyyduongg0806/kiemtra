var userInfo = JSON.parse(localStorage.getItem("userInfo"));

console.log(userInfo)

document.getElementById("name").innerHTML=userInfo.name;