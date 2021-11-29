import {iList} from '../script.js'
import {updateCounter} from '../script.js'

function removeTask(e){
    let li_textContent = e.target.previousElementSibling.textContent
    let li_index = iList.map(e => e.text).indexOf(li_textContent)
    iList.splice(li_index,1)
    e.target.parentNode.remove()
    updateCounter()
}

export default removeTask