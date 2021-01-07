const textTemplate = document.createElement('template');

textTemplate.innerHTML = `
<link rel="stylesheet" href="../stylesheet/text_area.css" />

  <div contenteditable="true" id="text-area">
  </div>


`;

class Textarea extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(textTemplate.content.cloneNode(true));
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown() {
    const text = this.shadowRoot.getElementById("text-area").innerHTML.split("<br>").filter(el => el !== "")
    localStorage.setItem('textArea', this.shadowRoot.getElementById("text-area").innerHTML)
    const keyStroke = new CustomEvent("keyStroke",
      {
        bubbles: true,
        composed: true,
        detail: {
          text: text
        }
      });
    this.dispatchEvent(keyStroke);
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#text-area").innerHTML = localStorage.getItem("textArea")
    document.addEventListener('keydown', () => this.handleKeyDown())
  }
  disconnectedCallback() {
    localStorage.setItem('textArea', this.shadowRoot.getElementById("text-area").innerHTML)
  }
}

window.customElements.define('text-area', Textarea);