import themeToggleEvent from './modules/themeToggle.js'
import checkBox from './modules/checkBoxFunction.js'
import createTask from './modules/createTask.js'
import removeTask from './modules/removeTask.js'
import displayAll from './modules/exibBar/displayAll.js'
import displayActive from './modules/exibBar/displayActive.js'
import displayComplete from './modules/exibBar/displayComplete.js'

console.log("Welcome to my project! I'm Caio.\n  \
My Contact -->\n  \
Phone Number: +5583987914312\n  \
LinkedIn: https://www.linkedin.com/in/caio303/")

// The Absolute Tasks List ( Items List )
export let iList = [
    {
        text:'Complete my Javascript Project',
        isChecked:'true'
    },
    {
        text:'Walk my lil\'dog',
        isChecked:'true'
    },
    {
        text:'Learn new things !',
        isChecked:'false'
    },
    {
        text:'Make money to help my family',
        isChecked:'false'
    },
    {
        text:'Get hired, or get some freelas :)',
        isChecked:'false'
    },
    {
        text:'Develop a website for my uncle\'s business',
        isChecked:'false'
    },
    {
        text:'Wash the dishes 3x a day :(',
        isChecked:'false'
    }
]

// Check the LocalStorage for the chosen theme, and apply it
if(localStorage.getItem('theme') == null){
    localStorage.setItem('theme','dark')
}
document.querySelector('body').classList.add(localStorage.getItem('theme'))

themeToggleEvent()

// Check toggle function
checkBox()

// Rendering all the tasks
displayAll()

if(window.screenX >=960 || window.innerWidth >=960){
    document.querySelectorAll(".remove-button").forEach((item,index)=>{
        item.classList.add('hide')
    })
}else{
    document.querySelectorAll(".remove-button").forEach((item,index)=>{
        item.classList.remove('hide')
    })
}
window.addEventListener('resize', addHideClass)
export function addHideClass(){
    if(window.innerWidth >=960){                                                                        
        document.querySelectorAll(".remove-button").forEach((item,index)=>{                 // Toggle hide class on resize (Responsivity Tests)
            item.classList.add('hide')                                                      // Didn't get it right 100% :( if u have any problem  in these tests
        })                                                                                  // just resize the window a little, or refresh the page.
    }else{                                                                                  // i'm gonna try harder and study more about Events and Media Query...
        document.querySelectorAll(".remove-button").forEach((item,index)=>{
            item.classList.remove('hide')
        })
    }
}

export function displayClose(e){                                                    //   Toggle Hide on Hover
    if(window.innerWidth >=960 ){                                                   //      ( on desktop )
        e.target.querySelector(".remove-button").classList.toggle("hide")
    }else{
        e.target.querySelector('.remove-button').classList.remove('hide')
    }
}

let items = document.querySelectorAll("li")
items.forEach((item, index) => {
    items[index].addEventListener('mouseenter',displayClose)
    items[index].addEventListener('mouseleave', displayClose)                       //        Show Remove-button when hover
})
    

// Item Removing Function -------------
document.querySelectorAll(".remove-button").forEach((item)=>{
    item.addEventListener('click',removeTask)
})

// Item Adding Function --------------
document.addEventListener('keydown', enterKey)
function enterKey(e){
    if(e.keyCode == 13){
        createTask()                                    //    Add Task When Press ENTER
    }
}
document.querySelector('.create-button').addEventListener('click',createTask)       //    Add Task When Click on Create-Button
                        
                        //   I really apreciate it.
                        //   If you like it, and need anything, just contact me!
                        //   I'm open for critics and advices 2 ! 
                        //   LinkedIn acc: https://linkedin.com/in/caio303
                        //   Contact me if u got this easter egg :)            

//     Items Left Functionality
export function updateCounter(){
    let counter = document.querySelector('#counter')
    let all = iList.length
    let complete = iList.filter(item => item.isChecked == 'true')
    let todo_tasks = all - complete.length
    counter.innerHTML = todo_tasks + " Items Left"
    if(todo_tasks === 0){
        counter.innerHTML += "  |  Try adding something :)"
    }
}
updateCounter()                                     //  UPDATE THE ITEMS LEFT COUNTER FUNCTION 


//      Clear Complete Functionality
document.querySelector("#clear-complete").addEventListener('click',clearComplete)
function clearComplete(){
    document.querySelectorAll('.complete').forEach((item)=>{item.remove()})
    let completed = iList.filter(item => item.isChecked == 'true')
    completed.forEach(item => {
        let index = iList.map(e => e.text).indexOf(item.text)
        iList.splice(index,1)
    })
    updateCounter()
}                                                   //  Clear complete Tasks from list :)

//       Display Bar Functionality
let disp_all = document.querySelector("#disp-all")
let disp_active = document.querySelector("#disp-active")
let disp_complete = document.querySelector("#disp-complete")

document.querySelector("#display-bar").childNodes.forEach((item)=>{     // Class Changing
    item.addEventListener('click', function(e){
        disp_all.classList.remove('display')
        disp_active.classList.remove('display')
        disp_complete.classList.remove('display')
        e.target.classList.add('display')
    })
})


document.addEventListener('click', e => {
    if(e.target.id === 'disp-all'){
        displayAll()
    }
})

document.addEventListener('click', e => {
    if(e.target.id == 'disp-active'){
        displayActive()
    }
})

document.addEventListener('click', e => {
    if(e.target.id == 'disp-complete'){
        displayComplete()
    }
})
