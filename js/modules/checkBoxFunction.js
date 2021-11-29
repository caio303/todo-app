import {updateCounter,iList} from '../script.js'
function checkBox(){
    let checkbox = document.querySelectorAll(".check-function")     //      Checkbox Features
    checkbox.forEach((item,index) => {
        checkbox[index].addEventListener('click',changeState)
    })
    
}
export function changeState(item) {
    let li = item.target.parentNode.parentNode
    li.classList.toggle("complete")
    
    let toggledLiText = item.target.parentNode.nextSibling.textContent
    let index = iList.map(e => e.text).indexOf(toggledLiText)
    if(iList[index].isChecked == 'true'){
        iList[index].isChecked = 'false'
    }else{
        iList[index].isChecked = 'true'
    }
    updateCounter()
}

export default checkBox