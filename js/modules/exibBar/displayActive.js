import { iList, updateCounter } from "../../script.js"
import createLi from "../createLi.js"

function displayActive(){
    document.querySelector('#todo-list').innerHTML = ''
    let actives = iList.filter(item => {
        return item.isChecked == 'false'
    })
    actives.forEach(item => {
        createLi(item.text)
    })
    if(actives.length == 0){
        let note = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('note-content')
        div.innerHTML = 'No active tasks, you\'ve nailed it! :)'
        note.appendChild(div)
        document.querySelector('#todo-list').appendChild(note)
    }
    updateCounter()
}

export default displayActive