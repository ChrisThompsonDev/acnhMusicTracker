function assignClickEvent() {
  for (let i = 1; i <= 36; i++) {
    let divId = document.getElementById(`div${i}`)
    divId.addEventListener('click', saveToLocal)
  }
}
assignClickEvent()




/* function saveToLocal() {
  if (this.checked) {
    localStorage.setItem(`${this.id}`, true)
  } else {
    localStorage.removeItem(`${this.id}`)
  }
} */

function saveToLocal() {
  if (this.style.background !== '') {
    localStorage.removeItem(`gyroid${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`gyroid${this.id}`, true)
    this.style.background = '#8ee7b1'
    this.style.color = '#025edb'
  }
}


/* function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 1; i <= 36; i++) {
    if ( localStorage.getItem(`gyroidNum${i}`) == 'true' ) {
      document.getElementById(`gyroidNum${i}`).checked = true
    }
  }
} */

function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`gyroiddiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = '#8ee7b1'
      document.getElementById(`div${i}`).style.color = '#025edb'
    }
  }
}

checkLocalStorage()
