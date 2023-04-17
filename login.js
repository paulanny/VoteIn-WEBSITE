const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const Submit = document.getElementById('submitbtn');
const Input = document.getElementsByClassName('.input');
const Errorp = document.getElementById('errorp');
const Errorps = document.getElementById('errorps');


togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

function Validate(event){
    const MatricInput = document.getElementById('matricno').value;
    const regex = /^[1-2][0-9][0][6][5][1][0]\d{2}$/;
    if(regex.test(MatricInput) && password.value.trim() !== ''){
        return true;
}

else {
       Errorp.style.display = 'block';
        Errorp.style.color = 'red';
        Errorps.style.display = 'block';
        Errorps.style.color = 'red';
        event.preventDefault();
       
}


}


function keyup(){
    Errorp.style.display = 'none';
        // Errorp.style.color = 'red';
}
Submit.addEventListener("click", Validate);
// Submit.addEventListener("click", keyup);

//   });
    
//     if (password.value.trim() === ''){
//     Errorp.style.display = 'block';
//     Errorp.style.color = 'red';
//     password.style.backgroundColor = 'red';
// }
// return;
// })



// errormsg[0].innerhtml = ''