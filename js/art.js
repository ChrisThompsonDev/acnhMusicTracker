//Create app that allows a user to keep track of songs collected in ACNH by storing checkboxes to local storage


///////////// GET LIST OF SONGS FROM API AND LOAD INTO DOM /////////////
/////////////         ADD CHECKBOX TO EACH SONG            /////////////
const currentMain = document.querySelector('#main1');
const updateMain = document.querySelector('#main2');

function addDiv(artNum, artTitle, imgUrl) {
    // Create Div
    const newDiv = document.createElement('div')
    // Add id to Div
    newDiv.id = `div${artNum}`
    // Create img
    const newImg = document.createElement('img');
    //add img source to img element
    newImg.src = `${imgUrl}`
    // Add id to image
    newImg.id = `image${artNum}`
    //add class to image
    newImg.classList.add('images')

    // Create h4 element
    const newh4 = document.createElement('h4')
    // Add Text to h4
    newh4.innerText = `${artTitle}`
    // add element to DOM
    newDiv.appendChild(newImg)
    newDiv.appendChild(newh4)
    currentMain.appendChild(newDiv);

    document.querySelector(`#div${artNum}`).addEventListener('click', saveToLocal)
}



let songs = {}

  function getFossils() {
    let i = 0
    fetch(`https://acnhapi.com/v1/art`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      Object.values(data).forEach(item => {
        item['file-name'] = item
        let artName = item.name['name-USen']
        artName = artName.charAt(0).toUpperCase() + artName.slice(1)
        addDiv(item.id, artName, item.image_uri)
      })
            
      checkLocalStorage()
    })
    
    }
  
  getFossils()
  

/////////////// STORE CHECKBOX STATUS TO LOCAL STORAGE ON CLICK /
/* function saveToLocal() {

  if (this.checked) {
    localStorage.setItem(`${this.id}`, true)
  } else {
    localStorage.removeItem(`${this.id}`)
  }
} */

function saveToLocal() {
  if (this.style.background == 'green') {
    localStorage.removeItem(`art${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`art${this.id}`, true)
    this.style.background = 'green'
    this.style.color = 'white'
  }
}



/////////////// CHECK CHECKBOX STATUS IN LOCAL STORAGE ON LOAD //
/* function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`artCheckbox${i}`) == 'true' ) {
      document.getElementById(`artCheckbox${i}`).checked = true
    }
  }
} */

function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 43; i++) {
    if ( localStorage.getItem(`artdiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = 'green'
      document.getElementById(`div${i}`).style.color = 'white'
    }
  }
}

checkLocalStorage()
