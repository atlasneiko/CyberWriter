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
    // console.log(this.shadowRoot.getElementById("text-area").innerHTML.split("<br>").filter(el => el !== ""));
    // console.log(this.shadowRoot.getElementById("text-area").innerHTML.split("<br>").filter(el => el !== "").length);
    const keyStroke = new CustomEvent("keyStroke",
      {
        bubbles: true,
        composed: true,
        detail: {
          text: this.shadowRoot.getElementById("text-area").innerHTML.split("<br>").filter(el => el !== "")
        }
      });
    console.log(keyStroke)
    this.dispatchEvent(keyStroke);
  }

  connectedCallback() {
    document.addEventListener('keydown', () => this.handleKeyDown())
    window.textarea = this.shadowRoot.getElementById('text-area');
  }
}

window.customElements.define('text-area', Textarea);