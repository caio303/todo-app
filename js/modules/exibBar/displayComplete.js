import { iList, updateCounter } from "../../script.js"
import createLi from "../createLi.js"

function displayComplete(){
    document.querySelector('#todo-list').innerHTML = ''
    let completes = iList.filter(item => {
        return item.isChecked == 'true'
    })
    completes.forEach(item => {
        createLi(item.text)
    })
    if(completes.length == 0){
        let note = document.createElement('li')
        let div = document.createElement('div')
        div.classList.add('note-content')
        div.innerHTML = 'No completed tasks yet, go for it! :)'
        note.appendChild(div)
        document.querySelector('#todo-list').appendChild(note)
    }
    updateCounter()
}

export default displayComplete