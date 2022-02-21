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
    let x=0;
    let firstnameValue=firstname.value.trim();
    let lastnameValue=lastname.value.trim();
    let passwordValue=password.value.trim();
    let password2Value=password2.value.trim();
    let emailValue=email.value.trim();
    let phonenumberValue=phonenumber.value.trim();
    let dobValue=dob.value;
    let tableau=document.getElementById("tableau");

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
         x++;
    }
    //check Last Name
    if(lastnameValue==="") {
        setErrorFor(lastname,"last Name cannot be blank");
    }else if (chiffre1!==0) {
        setErrorFor(lastname,"last Name must be alphabetic");
    }else {
        setSuccessFor(lastname);
        x++
    }
    //check email
    if(emailValue === '') {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
       x++
	}
    //check phone Number
    if(phonenumberValue==="") {
        setErrorFor(phonenumber, "phonenumber cannot be blank");}
    else if(checkuser(phonenumber)!==8) {
        setErrorFor(phonenumber, "phone number must only be 8 numbers");
    }else {
        setSuccessFor(phonenumber);
        x++
    }
  
    //check password
    if(passwordValue==="") {
        setErrorFor(password, "password cannot be blank");
    }else if(!ispassword(passwordValue)){
        setErrorFor(password, "Not a valid password");
    }else {
        setSuccessFor(password);
        x++
    }
    //check password 2
    if(password2Value==="") {
        setErrorFor(password2, "password cannot be blank");
    }else if (password2Value!==passwordValue) {
            setErrorFor(password2,"Password does not match");
    }else {
        setSuccessFor(password2);
        x++
    }
    //check date of birth
    if(dobValue==="") {
        setErrorFor(dob, "Date of birth cannot be blank cannot be blank");
    }else if(dateofbirth(dobValue)===false){
        setErrorFor(dob,"You must be 18");
    }else {
        setSuccessFor(dob);
        x++
    }
    //check all 
        if(x==7) {
            tableau.style.cssText="visibility:visible";
            remplirtableau(firstname,lastname,password,phonenumber,email,dob);
            
        }
    let childElements = document.getElementsByClassName('todelete');
    let  buttonElement = document.getElementsByClassName('delete');
    let  buttonElement2 = document.getElementsByClassName('update');
//To delete a user
let _handler = function(e) {
     e.target.parentNode.parentNode.remove();
}
function deleteItem(buttonsClass, childClass) {
  for (var i=0;i<buttonsClass.length;i++) {
    buttonsClass[i].addEventListener('click', _handler, false);
  }    
}
deleteItem(buttonElement, childElements);
//to update a user 
let _update=function(e) {
    let x=e.target.parentNode.parentNode;
    let y= x.children;
    console.log(y);
    firstname.value=y[0].textContent;
    lastname.value=y[1].textContent;
    email.value=y[3].textContent;
    phonenumber.value=y[2].textContent;
    password.value=y[4].textContent;
    password2.value=y[4].textContent;
    dob.value=y[5].textContent;
}
function UpdateItem(buttonsClass, childClass) {

    for (var i=0;i<buttonsClass.length;i++) {
      buttonsClass[i].addEventListener('click', _update, false);
    }    
  }
  UpdateItem(buttonElement2, childElements);

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
function remplirtableau(first,last,pass,phone,mail,birth) {
    first=firstname.value;
    last=lastname.value;
    pass=password.value;
    phone=phonenumber.value;
    mail=email.value;
    birth=dob.value;
    let tbody=document.getElementById("tabbody");
    let trow=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let btn1=document.createElement("button");
    let btn2=document.createElement("button");
    btn1.innerHTML="Delete";
    btn2.innerHTML="Update";
    btn1.setAttribute("class","delete");
    btn2.setAttribute("class","update");
    btn1.style.cssText="display:block;color:white;background-color:red;padding:9px;border:none;margin-bottom:5px";
    btn2.style.cssText="display:block;color:white;background-color:cyan;padding:8px;border:none";

    console.log(btn1);
    //nabdew bl td 
    td1.innerHTML=first;
    console.log(td1);
    td2.innerHTML=last;
    td3.innerHTML=phone;
    td4.innerHTML=mail;
    td5.innerHTML=pass;
    td6.innerHTML=birth;
    td7.appendChild(btn1);
    td7.appendChild(btn2);
    //tawa nhotou data fi west row
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.setAttribute("class","todelete");
    console.log(trow);
    //taw nhotou row fi west table
    tbody.appendChild(trow);
}
