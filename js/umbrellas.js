function assignClickEvent() {
  for (let i = 1; i <= 68; i++) {
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
  if (this.style.background == 'green') {
    localStorage.removeItem(`umbrella${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`umbrella${this.id}`, true)
    this.style.background = 'green'
    this.style.color = 'white'
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
    if ( localStorage.getItem(`umbrelladiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = 'green'
      document.getElementById(`div${i}`).style.color = 'white'
    }
  }
}

checkLocalStorage()
