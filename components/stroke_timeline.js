const timelineTemplate = document.createElement("template");
timelineTemplate.innerHTML = `
<link rel="stylesheet" href="../stylesheet/timeline.css" />
<div id="timeline-container">
</div>
`

class Timeline extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(timelineTemplate.content.cloneNode(true));
    this.currKeyCount = 0;
    this.timeline = new Array(200).fill(0)
  }
  handleKeyDown() {
    this.currKeyCount++;
    console.log(this.currKeyCount)
  }
  connectedCallback() {
    document.addEventListener('keydown', (event) => this.handleKeyDown(event))
    var timelineInterval = setInterval(() => {
      console.log(this.timeline)
      this.timeline.shift();
      this.timeline.push(this.currKeyCount);
      const newTimeline = document.createElement('ul')
      this.timeline.forEach(count => {
        console.log(count + 1 + "px")
        const newItem = document.createElement("li")
        const newCount = document.createElement("div")
        newCount.classList.add("timeline-item")
        newCount.style.height = (count + 5) + "px"
        newItem.appendChild(newCount)
        newTimeline.appendChild(newItem)
      })
      this.currKeyCount = 0;
      this.shadowRoot.querySelector("#timeline-container").innerHTML = "";
      this.shadowRoot.querySelector("#timeline-container").appendChild(newTimeline);
    }, 500)
  }
}

window.customElements.define('time-line', Timeline)