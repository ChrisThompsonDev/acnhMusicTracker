//Create app that allows a user to keep track of songs collected in ACNH by storing checkboxes to local storage


///////////// GET LIST OF SONGS FROM API AND LOAD INTO DOM /////////////
/////////////         ADD CHECKBOX TO EACH SONG            /////////////
const currentMain = document.querySelector('#main1');
const updateMain = document.querySelector('#main2');

function addDiv(fossilNum, fossilTitle, imgUrl) {
    // Create Div
    const newDiv = document.createElement('div')
    // Add id to Div
    newDiv.id = `div${fossilNum}`
    // Create checkbox
    const newCheckbox = document.createElement('input');
    //add type to checkbox
    newCheckbox.type = 'checkbox'
    // Add id to checkbox
    newCheckbox.id = `fossilCheckbox${fossilNum}`
    //add class to checkbox
    newCheckbox.classList.add('checkboxes')
    //add name to checkbox
    newCheckbox.name = `${fossilTitle}`

    // Create label element
    const newLabel = document.createElement('label')
    // Add id to element
    newLabel.for = `checkbox${fossilTitle}`
    // Add Text to label
    newLabel.innerText = `${fossilTitle}`
    // add element to DOM
    newDiv.appendChild(newCheckbox)
    newDiv.appendChild(newLabel)
    currentMain.appendChild(newDiv);
    
    /* // Add img to div parent
    newDiv.appendChild(newImg)
    newImg.src = `https://acnhapi.com/v1/images/songs/${num}`*/

    document.querySelector(`#fossilCheckbox${fossilNum}`).addEventListener('click', saveToLocal)

}

//Create new Divs with the music from the 2.0 Update (Not in the API)

/* function addMoreCheckboxes(songNum, songTitle, imgUrl) {
  const newDiv = document.createElement('div');
  newDiv.classList.add(`${songNum}`)
  // Create checkbox
  const newCheckbox = document.createElement('input');
  //add type to checkbox
  newCheckbox.type = 'checkbox'
  //add class to checkbox
  newCheckbox.classList.add('checkboxes')
  // Add id to checkbox
  newCheckbox.id = `checkbox${songNum}`
  //add name to checkbox
  newCheckbox.name = `${songTitle}`
  // Create label element
  const newLabel = document.createElement('label')
  // Add id to element
  newLabel.for = `checkbox${songTitle}`
  // Add Text to label
  newLabel.innerText = `${songTitle}`
  // add element to DOM
  newDiv.appendChild(newCheckbox)
  newDiv.appendChild(newLabel)
  updateMain.appendChild(newDiv);
  //add query selector to each
  document.querySelector(`#checkbox${songNum}`).addEventListener('click', saveToLocal)
  
} */


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
    })
    
    }
  
  getFossils()
  
///////////////////////////////////////////////////////////////////////////////
/////////////// STORE CHECKBOX STATUS TO LOCAL STORAGE ON CLICK ///////////////
///////////////////////////////////////////////////////////////////////////////                



function saveToLocal() {

  if (this.checked) {
    localStorage.setItem(`${this.id}`, true)
  } else {
    localStorage.removeItem(`${this.id}`)
  }
}




///////////////////////////////////////////////////////////////////////////////
/////////////// CHECK CHECKBOX STATUS IN LOCAL STORAGE ON LOAD ////////////////
/////////////////////////////////////////////////////////////////////////////// 




function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`fossilCheckbox${i}`) == 'true' ) {
      document.getElementById(`fossilCheckbox${i}`).checked = true
    }
  }
}


