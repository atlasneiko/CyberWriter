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
  }
}

window.customElements.define('text-area', Textarea);