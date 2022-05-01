function assignClickEvent() {
  for (let i = 1; i <= 36; i++) {
    let divId = document.getElementById(`gyroidNum${i}`)
    divId.addEventListener('click', saveToLocal)
  }
}
assignClickEvent()




function saveToLocal() {
  if (this.checked) {
    localStorage.setItem(`${this.id}`, true)
  } else {
    localStorage.removeItem(`${this.id}`)
  }
}


function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 1; i <= 36; i++) {
    if ( localStorage.getItem(`gyroidNum${i}`) == 'true' ) {
      document.getElementById(`gyroidNum${i}`).checked = true
    }
  }
}

checkLocalStorage()
