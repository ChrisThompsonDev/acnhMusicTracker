//Create app that allows a user to keep track of songs collected in ACNH by storing checkboxes to local storage

/////////////// STORE CHECKBOX STATUS TO LOCAL STORAGE ON CLICK                

function saveToLocal() {
  if (this.style.background !== '') {
    localStorage.removeItem(`fossil${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`fossil${this.id}`, true)
    this.style.background = '#8ee7b1'
    this.style.color = '#025edb'
  }
  progressBar()
}

/////////////// CHECK CHECKBOX STATUS IN LOCAL STORAGE ON LOAD //

function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 73; i++) {
    if ( localStorage.getItem(`fossildiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = '#8ee7b1'
      document.getElementById(`div${i}`).style.color = '#025edb'
    }
  }
}

/////// UPDATE PROGRESS BAR

function progressBar() {
  let bar = 0
  for (let i = 0; i <= 73; i++) {
    if ( localStorage.getItem(`fossildiv${i}`) == 'true' ) {
      bar += 1
    }
  }
  console.log(bar)
  document.querySelector('#percent').innerHTML = `${bar} / 73`
  document.querySelector('#file').value = `${bar}`
}

///////////// GET LIST OF SONGS FROM API AND LOAD INTO DOM /////////////
/////////////         ADD CHECKBOX TO EACH SONG            /////////////
const currentMain = document.querySelector('#main1');
const updateMain = document.querySelector('#main2');

function addDiv(fossilNum, fossilTitle, imgUrl) {
    // Create Div
    const newDiv = document.createElement('div')
    // Add id to Div
    newDiv.id = `div${fossilNum}`
    // Create img
    const newImg = document.createElement('img');
    //add img source to img element
    newImg.src = `${imgUrl}`
    // Add id to image
    newImg.id = `image${fossilNum}`
    //add class to image
    newImg.classList.add('images')

     // Create h4 element
     const newh4 = document.createElement('h4')
     // Add Text to h4
     newh4.innerText = `${fossilTitle}`
     // add element to DOM
     newDiv.appendChild(newImg)
     newDiv.appendChild(newh4)
     currentMain.appendChild(newDiv);
 
     document.querySelector(`#div${fossilNum}`).addEventListener('click', saveToLocal)

}



let songs = {}

  function getFossils() {
    let i = 0
    fetch(`https://acnhapi.com/v1/fossils`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      Object.values(data).forEach(item => {
        //item['file-name'] = item
        i++
        let fossilName = item.name['name-USen']
        fossilName = fossilName.charAt(0).toUpperCase() + fossilName.slice(1)
        addDiv(i, fossilName, item.image_uri)
      })
            
      checkLocalStorage()
      progressBar()
    })
    
    }
  
  getFossils()
  





