const comboTemplate = document.createElement("template");
comboTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/combo_counter.css" />
		<div id="combo_container" class="gear-0">
    
    <p id="combo_counter">0</p>
      <div id="circle-rainbow">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="combo-sonar">
        <div id="pulse"></div>
      </div>
      <div id="combo_countdown">
        <div id="countdown-bar"></div>
      </div>

      <div id="clock">
        <div class="face face1">
          <div class="circle"></div>
        </div>
        <div class="face face2">
          <div class="circle"></div>
        </div>
        <div class="face face3">
          <div class="circle"></div>
        </div>
        <div class="face face4">
          <div class="circle"></div>
        </div>
        <div class="face face5">
          <div class="circle"></div>
        </div>
        <div class="face face6">
          <div class="circle"></div>
        </div>
      </div>
    </div>

`;

// <div id="effects">

//   <div id="water-drop">
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//     <span></span>
//   </div>


// </div>

class ComboCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(comboTemplate.content.cloneNode(true));
    this.comboCount = 0;
    this.comboTimer = 0;
    this.timerId = 0;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    // console.log(this.shadowRoot)
  }

  handleKeyDown(e) {
    clearInterval(this.timerId);
    this.comboCount++;
    this.comboTimer = 2000;
    this.shadowRoot.querySelector("#combo_counter").innerText = this.comboCount
    var intervalId = setInterval(() => {
      if (this.comboTimer <= 0) {
        this.comboCount = 0;
        this.shadowRoot.querySelector
          ("#combo_counter").innerText = this.comboCount
        clearInterval(intervalId);
      }
      // console.log(this.comboTimer)
      this.shadowRoot.querySelector("#combo_countdown").setAttribute("style", `width: ${this.comboTimer / 20}px`)
      this.comboTimer -= 10;

      if (this.comboCount >= 100) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-6")
        this.shadowRoot.querySelector("#circle-rainbow").setAttribute("style", "display:block;")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-6 1.8s linear infinite; background-color: rgb(255, 0, 140)")
      } else if (this.comboCount >= 50) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-5")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-5 2s linear infinite; background-color: rgb(99, 232, 4)")
      } else if (this.comboCount >= 25) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-4")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-4 2.2s linear infinite; background-color: rgb(0, 105, 202)")

      } else if (this.comboCount >= 10) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-3")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-3 2.4s linear infinite; background-color: rgb(255, 3, 3)")

      } else if (this.comboCount >= 5) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-2")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-2 2.6s linear infinite; background-color: rgb(255, 111, 0)")

      } else if (this.comboCount >= 1) {
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-1")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-1 2.8s linear infinite; background-color: rgb(253, 165, 0)")
      } else {
        this.shadowRoot.querySelector("#circle-rainbow").setAttribute("style", "")
        this.shadowRoot.querySelector("#combo_container").setAttribute("class", "gear-0")
        this.shadowRoot.querySelector("#pulse").setAttribute("style", "	animation: pulse-0 3s linear infinite; background-color: #bebab4")
      }

    }, 10);
    this.timerId = intervalId
  }

  connectedCallback() {
    const combo = this.shadowRoot.querySelector('#combo_counter');
    document.addEventListener('keydown', (event) => this.handleKeyDown(event))


  }
}

window.customElements.define('combo-counter', ComboCounter);