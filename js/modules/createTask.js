import {iList} from '../script.js'
import createLi from './createLi.js'
import {updateCounter} from '../script.js'

function createTask(){
    if(document.querySelector("input[name='new-task']").value !== ""){
        let new_task = document.querySelector("input[name='new-task']").value
        createLi(new_task)
        iList.push({
            text: new_task,
            isChecked: false
        })
    }
    document.querySelector("input[name='new-task']").value = ''
    updateCounter()                                                                            //   Thanks for taking a look at my project !
}

export default createTask