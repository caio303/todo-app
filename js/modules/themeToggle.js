function themeToggleEvent(){
    
    let i = document.querySelector('body')
    let themebtn = document.querySelector("#theme-button")

    themebtn.addEventListener('click',()=>{
            i.classList.toggle("dark")
            i.classList.toggle("light")
            if(localStorage.getItem('theme') == 'light'){
                localStorage.setItem('theme','dark')
            }else if(localStorage.getItem('theme') == 'dark'){
                localStorage.setItem('theme','light')
            }
    })

}

export default themeToggleEvent