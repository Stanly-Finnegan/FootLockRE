let form = document.getElementById("form")

function validateName(name){
    //return boolean
    return(
        name.length >= 4 && name.length <= 16
    )
}

let emailErrorMessage = [
    "Email must contain @",
    "Email must contain . (gmail.com, yahoo.co.id, etc)"
]

let phoneErrorMessage = [
    "Phone must be Filled",
    "Phone number range mus be 10-13 number",
    "Phone number must filled by number"
]

function validateEmail(email){
    //return angka
    //email: john.doe@gmail.com
    let split = email.split("@")

    if(split.length == 1){
        return 0 //Error code tidak ada @
    }

    let checkDot = split[split.length - 1]
    //gmail.com
    //binus.ac.id
    let checkDotSplit = checkDot.split(".")
    if(checkDotSplit.length == 1){
        return 1 //Error code tidak ada "." di sebelah kanan
    }
    return -1
}


function validateCountry(country){
    //Parameter merupakan sebuah object
    if(country.selectedIndex == 0){
        return false //Error
    }
    return true
}

function validatePhone(phone){
    if(phone === ""){
        return 0
    }else if(phone.length < 10 || phone.length > 13){
        return 1
    }else if(!isNaN(phone)){
        return 2
    }
    
    return -1
}


let error = document.getElementById("error");
function showError(message){
    
    error.style.display = 'block'
    error.innerHTML = message
}

function clearError(){
    error.style.display = "none"
}

function formSubmit(){
    let name = document.getElementById("inputName");
    if(!validateName(name.value)){
        showError("Name length must be in range 4 - 16")
        return
    }

    let email = document.getElementById("inputEmail")
    let checkEmail = validateEmail(email.value)
    if(checkEmail != -1){
        showError(emailErrorMessage[checkEmail])
        return
    }

    // let phone = document.getElementById("inputPhone")
    // if(validatePhone != -1){
    //     showError(phoneErrorMessage[validatePhone])
    //     return
    // }


    let countries = document.getElementById("selectCountry")
    if(!validateCountry(countries)){
        showError("Please select a country")
        return
    }
    let country = countries.options[countries.selectedIndex].value

    let checkBox = document.getElementById("tos")
    if(!checkBox.checked){
        showError("Please agree to terms and condition")
        return
    }

    clearError()
    alert("Form succesfully submitted")
    console.log(name.value)
    console.log(email.value)
    console.log(phone.value)
    console.log(country)
    console.log(checkBox.value)
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    formSubmit()
})

