const comboTemplate = document.createElement("template");
comboTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/combo_counter.css"
  <div id="combo_container>
    <p id="combo_counter">hi</p>
  </div>
`;

class ComboCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(comboTemplate.content.cloneNode(true));

    this.comboTimer = 0;
    this.timerId = 0;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    clearInterval(this.timerId);
    this.comboTimer = 2;
    var intervalId = setInterval(() => {
      if (this.comboTimer <= 0) {
        clearInterval(intervalId);
      }
      console.log(this.comboTimer)
      this.comboTimer--;

    }, 1000);
    this.timerId = intervalId
  }

  connectedCallback() {
    const combo = this.shadowRoot.querySelector('#combo_counter');
    document.addEventListener('keydown', (event) => this.handleKeyDown(event))
    console.log("hi")
  }
}

window.customElements.define('combo-counter', ComboCounter);