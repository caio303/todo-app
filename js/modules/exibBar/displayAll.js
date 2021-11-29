import {iList,updateCounter} from '../../script.js'
import createLi from '../createLi.js'

function displayAll(){
    document.querySelector("#todo-list").innerHTML = ""
    iList.forEach(item => {
        createLi(item.text)
    })
    updateCounter()
}


export default displayAll