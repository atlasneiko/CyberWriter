const modalTemplate = document.createElement('template');
//* use slot to pass info
modalTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/shadow.css" />
  <div id="modal-background">
    <div id="welcome-modal">

      <h1 id="modal-title">
        <span class="f-flicker">C</span>Y<span class="s-flicker">B</span><span class="f-flicker">ERW</span><span class="s-flicker">RI</span><span class="f-flicker">TER</span>
      </h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; Due to hard drive shortage, each worker are only allowed to keep one story at a time and limited to 5000 words. It is highly advisable that workers utilize the UI to optimize their performance. All of your progress will be saved in real time. So there is no reason to panic or call tech support.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; Please take advantage of our efficiency meters on the right of the screen. The first one will be filled every time you've typed 100 words.<br/>&nbsp;&nbsp;&nbsp;&nbsp; The second meter measures your combo at the moment. Please remember that a fast writer is a good writer.<br/>&nbsp;&nbsp;&nbsp;&nbsp; The third meter shows your the structure of your work. Utilizing it to make your work more readable is highly advised.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;Now, get back to work.</p>
      <button class="toggle-modal close-tutorial">Get back to work</button>
    </div>
  </div>
  <button class="toggle-modal open-tutorial">tutorial</button>
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
      // console.log("showing")
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