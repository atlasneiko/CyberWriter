const modalTemplate = document.createElement('template');
//* use slot to pass info
modalTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/shadow.css" />
  <div id="modal-background">
    <div id="welcome-modal">

      <h1 id="modal-title">
        <span class="f-flicker">C</span>Y<span class="s-flicker">B</span>ERWri<span class="f-flicker">TER</span>
      </h1>
      <p>Due to hard drive shortage, you are only allowed to keep one story at a time and limited to 5000 words.</p>
      <button class="toggle-modal">Get back to work</button>
    </div>
  </div>
  <button class="toggle-modal">tutorial</button>
`;
{/* <span class="f-flicker">b</span>rea < span class="flicker" > t</span > he */ }
//  <h3 class="name"></h3>
//     <div class="info">
//       <p><slot name="email" /></p>
//       <p><slot name='phone' /></p>
//     </div>
//     <button id="toggle-name">Hide Info</button>

class WelcomeModal extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));
    // * use querySelector to pick h3 and then give innerText 
    // this.shadowRoot.querySelector('.name').innerText = this.getAttribute('name')
  }

  toggleModal() {

    this.showInfo = !this.showInfo
    const modal = this.shadowRoot.querySelector('#modal-background');
    if (this.showInfo) {
      console.log("showing")
      modal.style.display = 'block';
      // toggleBtn.innerText = "Hide Info"
    } else {
      modal.style.display = 'none';
      // toggleBtn.innerText = "Show Info"
    }
  }

  connectedCallback() {
    const toggleBtns = this.shadowRoot.querySelectorAll('.toggle-modal');
    toggleBtns.forEach(btn => {
      btn.addEventListener("click", () => this.toggleModal())
    });
    // this.shadowRoot.querySelectorAll(".toggle-modal").addEventListener('click', () => this.toggleModal())
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector(".toggle-modal").removeEventListener();
  }
}

window.customElements.define('welcome-modal', WelcomeModal);