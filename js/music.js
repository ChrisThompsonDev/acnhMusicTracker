//Create app that allows a user to keep track of songs collected in ACNH by storing checkboxes to local storage

/// STORE CHECKBOX STATUS TO LOCAL STORAGE ON CLICK               

function saveToLocal() {
  if (this.style.background !== '') {
    localStorage.removeItem(`music${this.id}`)
    this.style.background = ''
    this.style.color = 'black'
  } else {
    localStorage.setItem(`music${this.id}`, true)
    this.style.background = '#8ee7b1'
    this.style.color = '#025edb'
  }
  progressBar()
}

/////// CHECK CHECKBOX STATUS IN LOCAL STORAGE ON LOAD

function checkLocalStorage() {
  console.log(localStorage)
  for(let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`musicdiv${i}`) == 'true' ) {
      document.getElementById(`div${i}`).style.background = '#8ee7b1'
      document.getElementById(`div${i}`).style.color = '#025edb'
    }
  }
}


/////// UPDATE PROGRESS BAR

function progressBar() {
  let bar = 0
  for (let i = 0; i <= 107; i++) {
    if ( localStorage.getItem(`musicdiv${i}`) == 'true' ) {
      bar += 1
    }
  }
  console.log(bar)
  document.querySelector('#percent').innerHTML = `${bar} / 107`
  document.querySelector('#file').value = `${bar}`
}



///////////// GET LIST OF SONGS FROM API AND LOAD INTO DOM /////////////
/////////////         ADD CHECKBOX TO EACH SONG            /////////////
const currentMain = document.querySelector('#main1');
const updateMain = document.querySelector('#main2');

function addDiv(songNum, songTitle, imgUrl) {
    // Create Div
    const newDiv = document.createElement('div')
    // Add id to Div
    newDiv.id = `div${songNum}`
    // Create img
    const newImg = document.createElement('img');
    //add img source to img element
    newImg.src = `${imgUrl}`
    // Add id to image
    newImg.id = `image${songNum}`
    //add class to image
    newImg.classList.add('images')

    // Create h4 element
    const newh4 = document.createElement('h4')
    // Add Text to h4
    newh4.innerText = `${songTitle}`
    // add element to DOM
    newDiv.appendChild(newImg)
    newDiv.appendChild(newh4)
    currentMain.appendChild(newDiv);

    document.querySelector(`#div${songNum}`).addEventListener('click', saveToLocal)
}

//Create new Divs with the music from the 2.0 Update (Not in the API)

function addMoreCheckboxes(songNum, songTitle, imgUrl) {
    // Create Div
    const newDiv = document.createElement('div')
    // Add id to Div
    newDiv.id = `div${songNum}`
    // Create img
    const newImg = document.createElement('img');
    //add img source to img element
    newImg.src = `${imgUrl}`
    // Add id to checkbox
    newImg.id = `image${songNum}`
    //add class to checkbox
    newImg.classList.add('images')

    // Create h4 element
    const newh4 = document.createElement('h4')
    // Add Text to h4
    newh4.innerText = `${songTitle}`
    // add element to DOM
    newDiv.appendChild(newImg)
    newDiv.appendChild(newh4)
    updateMain.appendChild(newDiv);

    document.querySelector(`#div${songNum}`).addEventListener('click', saveToLocal)
}


let songs = {}

  function getMusic() {
    fetch(`https://acnhapi.com/v1/songs`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      Object.values(data).forEach(item => {
        songs[item.id] = item
        addDiv(item.id, item.name['name-USen'], item.image_uri)
      })
      addMoreCheckboxes(96, "K.K. Fugue", "https://dodo.ac/np/images/4/4c/K.K._Fugue_NH_Texture.png", "https://dodo.ac/np/images/8/85/NH_K.K._Fugue_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(97, "K.K. Polka", "https://dodo.ac/np/images/a/af/K.K._Polka_NH_Texture.png", "https://dodo.ac/np/images/7/72/NH_K.K._Polka_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(98, "K.K. Slack-Key", "https://dodo.ac/np/images/5/5a/K.K._Slack-Key_NH_Texture.png", "https://dodo.ac/np/images/5/5a/NH_K.K._Slack-Key_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(99, "K.K. Chorinho", "https://dodo.ac/np/images/thumb/2/28/K.K._Chorinho_NH_Texture.png/256px-K.K._Chorinho_NH_Texture.png", "https://dodo.ac/np/images/d/dd/NH_K.K._Chorinho_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(100, "K.K. Chillwave", "https://dodo.ac/np/images/thumb/a/a2/Chillwave_NH_Texture.png/256px-Chillwave_NH_Texture.png", "https://dodo.ac/np/images/b/b9/NH_Chillwave_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(101, "K.K. Dub", "https://dodo.ac/np/images/9/9b/K.K._Dub_NH_Texture.png", "https://dodo.ac/np/images/3/35/NH_K.K._Dub_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(102, "K.K. Lovers", "https://dodo.ac/np/images/thumb/6/62/K.K._Lovers_NH_Texture.png/256px-K.K._Lovers_NH_Texture.png", "https://dodo.ac/np/images/f/f9/NH_K.K._Lovers_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(103, "K.K. Bashment", "https://dodo.ac/np/images/thumb/b/b9/K.K._Bashment_NH_Texture.png/256px-K.K._Bashment_NH_Texture.png", "https://dodo.ac/np/images/a/a9/NH_K.K._Bashment_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(104, "K.K. Hop", "https://dodo.ac/np/images/thumb/a/a9/K.K._Hop_NH_Texture.png/256px-K.K._Hop_NH_Texture.png", "https://dodo.ac/np/images/9/9d/NH_K.K._Hop_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(105, "K.K. Break", "https://dodo.ac/np/images/thumb/d/db/K.K._Break_NH_Texture.png/256px-K.K._Break_NH_Texture.png", "https://dodo.ac/np/images/d/df/NH_K.K._Break_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(106, "K.K. Khoomei", "https://dodo.ac/np/images/thumb/8/8d/K.K._Khoomei_NH_Texture.png/256px-K.K._Khoomei_NH_Texture.png", "https://dodo.ac/np/images/6/6f/NH_K.K._Khoomei_%28Aircheck%2C_Hi-Fi%29.flac")
      addMoreCheckboxes(107, "K.K. Robot Synth", "https://dodo.ac/np/images/thumb/8/8e/K.K._Robot_Synth_NH_Texture.png/256px-K.K._Robot_Synth_NH_Texture.png", "https://dodo.ac/np/images/b/bf/NH_K.K._Robot_Synth_%28Aircheck%2C_Hi-Fi%29.flac")
      
      checkLocalStorage()
      progressBar()
    })
    
    }
  
  getMusic()