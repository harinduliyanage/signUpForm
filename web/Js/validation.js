
function nextStep(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("pw").value;
    var confirmPassword = document.getElementById("cnfm-pw").value;
    var day = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    var mobile = document.getElementById("mobile").value;
    
    var dayValid=/^([1-9]|[12][0-9]|3[01])$/.test(day); 
    var yearValid=/^\d{4}$/.test(year);
    var validUserName=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(userName);
    var validMobile=/^\d{10}$/.test(mobile);
    
    
    if(mobile===""){
        document.getElementById("mobile").style.borderColor = "red";
    }else{
       document.getElementById("mobile").style.borderColor = "white";
        if (validMobile){
            document.getElementById("mobile").style.borderColor = "white";
        }else{
            document.getElementById("mobile").style.borderColor = "red";
        }
    }
    
    if(userName===""){
        document.getElementById("userName").style.borderColor = "red";
    }else{
       document.getElementById("userName").style.borderColor = "white";
        if (validUserName){
            document.getElementById("userName").style.borderColor = "white";
        }else{
            document.getElementById("userName").style.borderColor = "red";
        }
    }
    
    if(year===""){
        document.getElementById("year").style.borderColor = "red";
    }else{
       document.getElementById("year").style.borderColor = "white";
        if (yearValid){
            document.getElementById("year").style.borderColor = "white";
        }else{
            document.getElementById("year").style.borderColor = "red";
        }
    }
    
    if(day===""){
        document.getElementById("day").style.borderColor = "red";
    }else{
       document.getElementById("day").style.borderColor = "white";
        if (dayValid){
            document.getElementById("day").style.borderColor = "white";
        }else{
            document.getElementById("day").style.borderColor = "red";
        }
    }
    
    
    if(password===""){
        document.getElementById("pw").style.borderColor = "red";
    }else{
       document.getElementById("pw").style.borderColor = "white"; 
    }
    if(confirmPassword===""){
        document.getElementById("cnfm-pw").style.borderColor = "red";
    }else{
        if(confirmPassword === password){
           document.getElementById("cnfm-pw").style.borderColor = "white";  
        }else{
           document.getElementById("cnfm-pw").style.borderColor = "red"; 
        } 
    }
    
}