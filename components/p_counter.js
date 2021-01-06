pcTemplate = document.createElement('template');
pcTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/p_counter.css" />

  <div id="p-counter">
    <h1>Counter</h1>
  </div>
`;

class pCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(pcTemplate.content.cloneNode(true));


  }

  connectedCallback() {
    document.addEventListener("keyStroke", event => {
      const text = event.detail;
      console.log(text)
    })
  }

}

window.customElements.define('p-counter', pCounter);