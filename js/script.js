window.onload = function(){ 
    console.log("Your JavaScript is linked, and ready to use")

    let i = document.querySelectorAll(".light");
    let themebtn = document.querySelector("#theme-button");
    
    themebtn.addEventListener('click', changeTheme)
    function changeTheme(){
        i.forEach((item, index) => {
            i[index].classList.toggle("light")
            i[index].classList.toggle("dark")
        })
    }




}