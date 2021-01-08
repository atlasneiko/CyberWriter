const comboTemplate = document.createElement("template");
comboTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/combo_counter.css" />
		<div id="combo_container">
      <p id="combo_counter">0</p>
      <p id="combo_countdown">0</p>
      <div id="effects">
      
        <div id="combo-sonar">
          <div id="pulse"></div>
        </div>
        <div id="water-drop">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="circle-rainbow">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="clock">
          <div class="face face1">
            <div class="circle"></div>
          </div>
          <div class="face face2">
            <div class="circle"></div>
          </div>
        </div>
      </div>
  	</div>
`;

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
        this.shadowRoot.querySelector("#combo_counter").innerText = this.comboCount
        clearInterval(intervalId);
      }
      // console.log(this.comboTimer)
      this.shadowRoot.querySelector("#combo_countdown").innerText = this.comboTimer
      this.comboTimer -= 10;

    }, 10);
    this.timerId = intervalId
  }

  connectedCallback() {
    const combo = this.shadowRoot.querySelector('#combo_counter');
    document.addEventListener('keydown', (event) => this.handleKeyDown(event))
  }
}

window.customElements.define('combo-counter', ComboCounter);