/// STORE CHECKBOX STATUS TO LOCAL STORAGE ON CLICK    
function saveToLocal() {
  if (this.style.background !== '') {
    localStorage.removeItem(`umbrella${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`umbrella${this.id}`, true)
    this.style.background = '#8ee7b1'
    this.style.color = '#025edb'
  }
  progressBar()
}

/////// CHECK CHECKBOX STATUS IN LOCAL STORAGE ON LOAD
function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`umbrelladiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = '#8ee7b1'
      document.getElementById(`div${i}`).style.color = '#025edb'
    }
  }
}

checkLocalStorage()

/////// UPDATE PROGRESS BAR

function progressBar() {
  let bar = 0
  for (let i = 0; i <= 68; i++) {
    if ( localStorage.getItem(`umbrelladiv${i}`) == 'true' ) {
      bar += 1
    }
  }
  console.log(bar)
  document.querySelector('#percent').innerHTML = `${bar} / 68`
  document.querySelector('#file').value = `${bar}`
}


function assignClickEvent() {
  for (let i = 1; i <= 68; i++) {
    let divId = document.getElementById(`div${i}`)
    divId.addEventListener('click', saveToLocal)
  }
}
assignClickEvent()
progressBar()



