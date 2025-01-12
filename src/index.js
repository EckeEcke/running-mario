

function runMario() {

    // add Mario
    const marioContainer = document.createElement("div")
    const mario = `
      <div id="running-mario">
        <div class="position-relative">
          <img id="mario" src="https://eckeecke.github.io/images/mariosprites-walking.png">
        </div>
      </div>
    `
    
    marioContainer.innerHTML = mario
    document.body.appendChild(marioContainer)
    const marioBox = document.getElementById("running-mario")
    
    // move Mario
    const marioSprite = document.getElementById("mario")
    let marioLeft = -60;
    
    function movingBox(){
      marioBox.style.transform = `translateX(${marioLeft}px)`

      if(marioLeft < window.innerWidth){
        marioLeft += 2;
      }
    
      if(marioLeft >= window.innerWidth){
        marioLeft = -500;
      }
    }
    
    setInterval(movingBox, 1000/60)
    
    let spritesheetPosition = 0
    let sheetMovement = 50
    
    function animateMario(){
      spritesheetPosition += sheetMovement
      marioSprite.style.transform = `translateX(${-spritesheetPosition}px)`
    
      if(spritesheetPosition === 100){
        sheetMovement = -50
      }
    
      if(spritesheetPosition === 0){
        sheetMovement = 50
      }
    }

    setInterval(animateMario, 102)
    
    // add sound on click
    const marioSound = new Audio("https://eckeecke.github.io/sounds/mario_its_me.wav")

    function itsMeMario(){
      marioSound.volume = 0.2
      marioSound.play()
    }

    marioSprite.addEventListener("click", itsMeMario)

    // add stylesheet
    const head  = document.getElementsByTagName('head')[0]
    const stylesheet  = document.createElement('style')
    stylesheet.innerHTML = `
      #running-mario {
        position: fixed;
        height: 60px;
        width: 50px;
        transform: translateX(-60px);
        bottom: -5px;
        overflow: hidden;
        z-index: 5;
      }
      
      #mario {
        position: absolute;
        right: -100px;
        height: 60px;
        width: 150px;
        background-color: none;
        cursor: pointer;
      }
    `
    head.appendChild(stylesheet)
}

export default runMario


