var btn = document.querySelector(".header__item-button")
var background = document.querySelector(".maindiv")

btn.onclick = function(){
    var profilebase = document.querySelector(".profile")
    btn.classList.toggle("header__item-button-night")
    if (btn.classList.contains("header__item-button" && "header__item-button-night")) {
        background.style.background = "black"
        btn.style.background = "white"
        btn.style.color = "black"
        profilebase.style.boxShadow = "0 0 20px 0 white"
    }
    else{
        btn.style.background = "black"
        btn.style.color = "white"
        background.style.background = "#E5E5E5"
        profilebase.style.boxShadow = "0 0 50px 0 black"
    }
}
