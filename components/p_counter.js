pcTemplate = document.createElement('template');
pcTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/p_counter.css" />

  <div id="p-counter">
    <h1>Counter</h1>
  </div>
`;


//TODO 1. total word count
//TODO 2. array of paragraph size
//TODO 3. 


class pCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(pcTemplate.content.cloneNode(true));

    document.addEventListener("keyStroke", event => {
      const text = event.detail;
      this.text = text;
      console.log(this.text)
    })

  }

  connectedCallback() {

  }

}

window.customElements.define('p-counter', pCounter);