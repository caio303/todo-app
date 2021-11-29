import {addHideClass,displayClose,iList} from '../script.js'
import {changeState} from './checkBoxFunction.js'
import removeTask from './removeTask.js'

function createLi(new_task){
    
    let li = document.createElement('li')           // <li>
    let listIndex = iList.map(e => e.text).indexOf(new_task)
    if(iList[listIndex] !== undefined){
        if(iList[listIndex].isChecked == 'true'){
            li.classList.add('complete')
        }
    }

    let divButton = document.createElement('div')   // <div class="check-button">
    divButton.classList.add('check-button')
    
        let divCheck = document.createElement('div')
        divCheck.classList.add('check-function')
        divCheck.addEventListener('click',changeState)    //    <div class="check-function"></div>
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

export default createLi