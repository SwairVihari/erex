function sendMail(){
            
    var tempParams  = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value
    }

    console.log(tempParams)
    emailjs.send('service_kb82124','template_xhmg50a',tempParams)
    .then((res)=>{
        console.log("Success", res.status)
    })
    
}

function contactform(){
            
    var tempParams1  = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value
    }

    console.log(tempParams1)
    emailjs.send('service_kb82124','template_xm1m1uc',tempParams1)
    .then((res)=>{
        console.log("Success", res.status);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value= "";
        document.getElementById("response-id").classList.remove("display-none")   
     })
    
}