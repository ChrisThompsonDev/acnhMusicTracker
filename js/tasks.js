function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 12; i++) {
    if ( localStorage.getItem(`taskdiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = '#8ee7b1'
      document.getElementById(`div${i}`).style.color = '#025edb'
    }
  }
}

checkLocalStorage()


function assignClickEvent() {
  for (let i = 1; i <= 12; i++) {
    let divId = document.getElementById(`div${i}`)
    divId.addEventListener('click', saveToLocal)
  }
}
assignClickEvent()



function saveToLocal() {
  if (this.style.background !== '') {
    localStorage.removeItem(`task${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`task${this.id}`, true)
    this.style.background = '#8ee7b1'
    this.style.color = '#025edb'
  }
}

///Create a function that checks today's date and stores it in localStorage. If the date is not the same, it clears the checkLocalStorage stylings and overwrites the date in localStorage

/* document.querySelector('#clear').addEventListener('click', clearTasks())

function clearTasks() {
  for (let i = 1; i <= 12; i++) {
  document.getElementById(`div${i}`).style.background = ''
  document.getElementById(`div${i}`).style.color = 'black'
  }
} */


