console.log("Your JavaScript is linked, and ready to use")


let i = document.querySelectorAll(".dark")                     //     Theme Feature
let themebtn = document.querySelector("#theme-button")

themebtn.addEventListener('click', changeTheme)    
function changeTheme(){
    i.forEach((item, index) => {
        i[index].classList.toggle("dark")
        i[index].classList.toggle("light")
    })
}

let checkbox = document.querySelectorAll(".check-function")     //      Checkbox Features
checkbox.forEach((item,index) => {
    checkbox[index].addEventListener('click',changeState)
})
function changeState(item) {
    let li = item.target.parentNode.parentNode
    li.classList.toggle("complete")
    updateCounter()
}


//  Remove and Add Item Features
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
function addHideClass(){
    if(window.innerWidth >=960){                                                                        
        document.querySelectorAll(".remove-button").forEach((item,index)=>{                 // Toggle hide class on resize (Responsivity Tests)
            item.classList.add('hide')                                                      // Didn't get it right 100% :( if u have any problem  in these tests
        })                                                                                  // just resize the window a little.
    }else{                                                                                  // i'm gonna try harder and study more about Events and Media Query...
        document.querySelectorAll(".remove-button").forEach((item,index)=>{
            item.classList.remove('hide')
        })
    }
}

function displayClose(item){                                                                  //   Toggle Hide on Hover
    if(window.innerWidth >=960 ){                                                             //          ( on desktop )
        item.target.querySelector(".remove-button").classList.toggle("hide")
    }else{
        item.target.querySelector('.remove-button').classList.remove('hide')
    }
}

let items = document.querySelectorAll("li")
items.forEach((item, index) => {
    items[index].addEventListener('mouseenter',displayClose)
    items[index].addEventListener('mouseleave', displayClose)                               //        Show Remove-button when hover
})
    

                // Item Removing Function -------------

document.querySelectorAll(".remove-button").forEach((item)=>{
    item.addEventListener('click',removeTask)
})
function removeTask(item){
    item.target.parentNode.remove()
    updateCounter()
}

                // Item Adding Function --------------
document.addEventListener('keydown', enterKey)
function enterKey(e){
    if(e.keyCode == 13){
        createTask()                                    //    Add When Press ENTER
    }
}
document.querySelector('.create-button').addEventListener('click',createTask)       //    Add When Click on Create-Button
function createLi(new_task){
            
    let li = document.createElement('li')           // <li draggable="true">
    li.setAttribute('draggable','true')
    
    let divButton = document.createElement('div')   // <div class="check-button">
    divButton.classList.add('check-button')
    
        let divCheck = document.createElement('div')
        divCheck.classList.add('check-function')    //    <div class="check-function"></div>
        divCheck.addEventListener('click',changeState)
        divButton.appendChild(divCheck)             // </div>
    


    let divContent = document.createElement('div')  // <div class="todo-content">
    divContent.classList.add('todo-content')        //    <span>new_task</span> 
    
    let taskSpan = document.createElement('span')
    taskSpan.innerHTML = new_task
    divContent.appendChild(taskSpan)                // </div>

    let divRemBtn = document.createElement('div')
    divRemBtn.classList.add('remove-button')        // <div class="remove-button"></div>

    li.appendChild(divButton)
    li.appendChild(divContent)
    li.appendChild(divRemBtn)                       // </li>

    document.querySelector("#todo-list").appendChild(li)            // Instanced the new task as a new Child in #todo-list
    
    li.querySelector('.remove-button').addEventListener('click', removeTask)
    let screen = window.innerWidth
    if(screen >= 960){
        li.addEventListener('mouseenter', displayClose)                         // Setting the New Tasks Event Listeners
        li.addEventListener('mouseleave', displayClose)
        li.querySelector('.remove-button').classList.add('hide')
    }else{
        li.querySelector('.remove-button').classList.remove('hide')
        addHideClass()
    }
    
}
function createTask(){
    if(document.querySelector("input[name='new-task']").value !== ""){
        let new_task = document.querySelector("input[name='new-task']").value
        createLi(new_task)
    }
    updateCounter()                                                                            //   Thanks for taking a look at my project !
}                                                                                              //   I really apreciate it.
                                                                                               //   If you like it, and need anything, just contact me!
            //    EXIBITION BAR  -------------------------------------------                   //   I'm open for critics and advices 2 ! 
                                                                                               //   LinkedIn acc: https://linkedin.com/in/caio303
            let desktop_exibBar = document.querySelector('#exibition-bar')                     //   Contact me if u got this easter egg :)
            let mobile_exibBar = document.querySelector('#mobile-exib-bar')


            
//     Items Left Functionality


    
    function updateCounter(){
        let counter = document.querySelector('#counter')
        let all = document.querySelector('#todo-list').childElementCount
        let complete = document.querySelectorAll('.complete').length
        let todo_tasks = all - complete
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
