let form=document.getElementById("form");
let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let password=document.getElementById("password");
let password2=document.getElementById("check2");
let email=document.getElementById("email");
let phonenumber=document.getElementById("phonenumber");
let dob=document.getElementById("dob");
let dobValue=dob.value;
form.addEventListener("submit",(e)=> {
    e.preventDefault();
    checkInputs();

});
function checkInputs () {
    let firstnameValue=firstname.value.trim();
    let lastnameValue=lastname.value.trim();
    let passwordValue=password.value.trim();
    let password2Value=password2.value.trim();
    let emailValue=email.value.trim();
    let phonenumberValue=phonenumber.value.trim();
    let dobValue=dob.value;

    // mata3 check alphabetic user
    let chiffre =checkuser(firstname);
    let chiffre1=checkuser(lastname);
   
    //check first name
    if(firstnameValue==="") {
        setErrorFor(firstname,"First Name cannot be blank");
    }else if (chiffre!==0) {
        setErrorFor(firstname,"First Name must be alphabetic");
    }else {
        setSuccessFor(firstname);
    }
    //check Last Name
    if(lastnameValue==="") {
        setErrorFor(lastname,"last Name cannot be blank");
    }else if (chiffre1!==0) {
        setErrorFor(lastname,"last Name must be alphabetic");
    }else {
        setSuccessFor(lastname);
    }
    //check email
    if(emailValue === '') {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}
    //check phone Number
    if(phonenumberValue==="") {
        setErrorFor(phonenumber, "phonenumber cannot be blank");}
    else if(checkuser(phonenumber)!==8) {
        setErrorFor(phonenumber, "phone number must only be 8 numbers");
    }else {
        setSuccessFor(phonenumber);
    }
  
    //check password
    if(passwordValue==="") {
        setErrorFor(password, "password cannot be blank");
    }else if(!ispassword(passwordValue)){
        setErrorFor(password, "Not a valid password");
    }else {
        setSuccessFor(password);
    }
    //check password 2
    if(password2Value==="") {
        setErrorFor(password2, "password cannot be blank");
    }else if (password2Value!==passwordValue) {
            setErrorFor(password2,"Password does not match");
    }else {
        setSuccessFor(password2);
    }
    //check date of birth
    if(dobValue==="") {
        setErrorFor(dob, "Date of birth cannot be blank cannot be blank");
    }else if(dateofbirth(dobValue)===false){
        setErrorFor(dob,"You must be 18");
    }else {
        setSuccessFor(dob);
    }

}
function setErrorFor(input,message) {
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    small.innerText=message;
    //add error class 
    formControl.className="form-control error";
}
function setSuccessFor(input) {
    let formControl=input.parentElement;
    formControl.className="form-control success";
}
function checkuser (input) {
    let uservalue=input.value;
    let chiffre=0;
    for(let i=0;i<uservalue.length;i++) {
     if(uservalue[i]==0 ||  uservalue[i]==1 || uservalue[i]==2 || uservalue[i]==3 || uservalue[i]==4|| uservalue[i]==5 || uservalue[i]==6 || uservalue[i]==7 ||uservalue[i]==8 || uservalue[i]==9){
            chiffre+=1;
         }
    }
    return chiffre;
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
function ispassword(password) {
    return /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/.test(password);
}
function dateofbirth (birth) {
    year=parseInt(birth.slice(0,4));
    age=2022-year;
    if(age>=18) {
        return true;
    }else {
        return false;
    }
}
console.log(dateofbirth(dobValue));

