const passValue = document.querySelector('.email-box')
const loginButton = document.querySelector('.login-button')
const lockImage = document.querySelector('.lock-image')
const loginSection = document.querySelector('.login-container')
const lockButton = document.querySelector('.lock-button-container')

loginButton.addEventListener('click', function(e){
    e.preventDefault()

    if(passValue.value === 'asifbokachele'){
        lockImage.style.visibility = 'hidden'
        loginSection.innerHTML = ''
        lockButton.style.display = 'block'
    }
    else{
        alert("Wrong Password!")
    }
})

lockButton.addEventListener('click', function(e){
    e.preventDefault()

    lockImage.style.visibility = 'visible'
    loginSection.innerHTML = `<br><br>
    <h1 class="login-title">Please Login!</h1>

    <div class="login-fields">
        <div class="email-field">
            <label for="Email">Enter Your Email:</label><br>
            <input type="text" id="Email" class="name-box">
        </div><br>
        <div class="pass-field">
            <label for="Pass">Enter Your Password:</label><br>
            <input type="text" id="Pass" class="email-box">
        </div>
        <button class="login-button">Log In</button>

    </div>`

    

    const loginButton = document.querySelector('.login-button')

    lockButton.style.display = 'none'
})