const form = document.querySelector("form")
 addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticted = authentication(username,password)

    if (authenticted){
        window.location.href = "file:///C:/Users/MJ/may%20basic%20information.html"
    }else{
        alert("wrong password")
    }
})

// function for checking name and password

function authentication(username,password){
    if(username === "marcho" && password === "2005"){
        return true
    }else{
        return false
    }
}