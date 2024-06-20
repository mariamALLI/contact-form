const formContainer = document.querySelector('#form_container')
const fnameInput = document.querySelector('#fname')

const lnameInput = document.querySelector('#lname')
const emailInput = document.querySelector('#email')

const radio1Input = document.querySelector('#radio1')
const radio2Input = document.querySelector('#radio2')

const radioBtn = document.querySelector('.radio')
const msgInput = document.querySelector('#msg')

const consentCheckbox = document.querySelector('#checkbox')
const submitBtn = document.getElementById('submit-btn')

const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')
const error6 = document.getElementById('error6')

const sntMsg = document.getElementById('snt-msg')
const queryBtn = document.querySelector('.query-btn')

const queryBtn1 = document.querySelector('#querybtn1')
const queryBtn2 = document.querySelector('#querybtn2')


queryBtn1.addEventListener('click', ()=>{
    console.log('clicked')
        queryBtn1.style.borderColor = "hsl(169, 82%, 27%)"
        queryBtn1.style.backgroundColor = "hsl(148, 38%, 91%)"
    

})

queryBtn2.addEventListener('click', ()=>{
    console.log('clicked')
    queryBtn2.style.borderColor = "hsl(169, 82%, 27%)"
    queryBtn2.style.backgroundColor = "hsl(148, 38%, 91%)"
})



submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (!fnameInput.value) {
      error1.style.display = "block"
      fnameInput.style.border= "1px solid hsl(0, 66%, 54%)"
      return;
    }else{
        error1.style.display = "none";
        fnameInput.style.borderColor =" hsl(169, 82%, 27%)"
    }
  
    if (!lnameInput.value) {
        error2.style.display = "block"
        lnameInput.style.border= "1px solid hsl(0, 66%, 54%)"
      return;
    }else{
        error2.style.display = "none";
        lnameInput.style.borderColor =" hsl(169, 82%, 27%)"
    }
  
    if (!emailInput.value) {
        error3.style.display = "block"
        emailInput.style.border= "1px solid hsl(0, 66%, 54%)"
      return;
    }else{
        error3.style.display = "none";
        emailInput.style.borderColor =" hsl(169, 82%, 27%)"
    }
  
    if (!radioBtn.checked) {
      error4.style.display = "block"
      return;
    }else{
        error4.style.display = "none";
        // queryBtn.style.backgroundColor = "hsl(148, 38%, 91%)"
    }

  
    if (!msgInput.value) {
        error5.style.display = "block";
        msgInput.style.border ="1px solid hsl(0, 66%, 54%)"
      return;
    }else{
        error5.style.display = "none";
        msgInput.style.borderColor =" hsl(169, 82%, 27%)"
    }
  
    if (!consentCheckbox.checked) {
        error6.style.display = "block"
      return;
    }else{
        error6.style.display = "none";
    }


    if(fnameInput.value&&
        lnameInput.value&&
        emailInput.value&&
        msgInput.value&&
        radioBtn.checked&&
        consentCheckbox.checked){
            sntMsg.style.display = "block";
            setTimeout(()=>{
                sntMsg.style.display = "none"
                fnameInput.value = " "
                lnameInput.value = " "
                emailInput.value = " "
                msgInput.value = " "
                radioBtn.checked = false
                consentCheckbox.checked = false
            },3000)
        }
})