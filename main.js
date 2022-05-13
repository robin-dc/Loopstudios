const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const toggle = document.querySelector('.toggle-button');


// ========================= to show the menu when hamburger was click  ========================= 
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})


// ========================= for black background when hamburger was click  ========================= 
function abc()
{
    var ChangeColor = document.getElementById ("btn")

    if (ChangeColor.className == "navbar")
    {
        ChangeColor.className = "otherbar"
    }
    else
    {
        ChangeColor.className = "navbar"
    }
}


// ========================= for hamburger animation  ========================= 
toggle.addEventListener('click', function (){
    this.classList.toggle('is-active')
})


// ========================= hamburger disappear when scroll  ========================= 
window.addEventListener("scroll",() =>{
    var ChangeColor = document.getElementById ("btn")
    ChangeColor.className = "navbar"
    navbarLinks.classList.toggle('active', false)
    toggle.classList.toggle('is-active',false)
});





