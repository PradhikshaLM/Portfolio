
function Message_sent() {
    var n = document.getElementById("n1").value;
    var e = document.getElementById("e1").value;
    var s = document.getElementById("s1").value;
    var m = document.getElementById("m1").value;
     
    var letters = /^[A-Za-z]+$/;
    var email_val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
  
    if (n == '' || e == '' || s == '' || m == '') {
        alert("Enter each details correctly");
    }
    else if (!letters.test(n)) {
        alert('Name is incorrect must contain alphabets only');
    }
    else if (!email_val.test(e)) {
        alert('Invalid email format please enter valid email id');
    }
    else if (s.trim()==='') {
        alert('This field cannot be empty');
    }
    else if (m.trim()==='') {
        alert('This field cannot be empty');
    }
    else {
        alert("Your message has been sent successfully... Redirecting to homepage");
        window.location = "index.html";
    }
}  

