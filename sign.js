function data(event) {
    event.preventDefault();
    var a=document.getElementById("email").value;
    var b=document.getElementById("checkbox").checked;
    var c=document.getElementById("pass").value;
    if(a==="" || c===""){
        alert("All fields are mandatory.");
    }
    if (!a.includes("@")) { 
        alert("Email must contain '@'.");
    }
    if (!b) {
        alert("Please check 'Keep me logged in'.");
    }
    else{
        window.location.href = "linkedin.html";
    }
}
document.getElementById("but").addEventListener("click", data);