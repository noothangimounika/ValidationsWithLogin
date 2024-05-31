const empid=document.getElementById('empid')
const email=document.getElementById('email')
const form=document.getElementById('form')
const errorelement=document.getElementById('error')

form.addEventListener('submit',(e) => {
    let message=[]
    if(empid.value=== '' || empid.value==null){
        message.push('Name is required')
    }

    if(message.length>0 ){
        e.preventDefault()
        errorelement.innerText=messages.join(',')
    }
     
})

/*function validate(){
    var empid = document.getElementById(empid).value
    var password = document.getElementById(password).value
    if(empid == "mounika" && password=="mounika") {
      alert("Login Successful");
      return false;
    }
    else{
      alert("Login Failed");
    }
  }*/

  