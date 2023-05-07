function message(){
    
    var Name = document.getElementById("name");
    var business = document.getElementById("business");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    const success = document.getElementById("success");
    const danger= document.getElementById("danger");

    if(Name.value===''||business.value===''||email.value===''||number.value===''){
        danger.style.display="block";
    }
    else{
        setTimeout(()=>{
            Name.value='';
            email.value='';
            business.value='';
            number.value='';
        }, 2000);

        success.style.display="block";
    }


    setTimeout(()=>{
        danger.style.display ='none';
        success.style.display='none'
    }, 4000);

}