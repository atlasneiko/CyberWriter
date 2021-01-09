pcTemplate = document.createElement('template');
pcTemplate.innerHTML = `
  <link rel="stylesheet" href="../stylesheet/battery.css" />

  				<div id="battery-container">
			<div class="b-pair1">
				<div class="battery-connector-t b-flicker-f"></div>
				<div class="battery-set">
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b1">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b2">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b3">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b4">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b5">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b6">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b7">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b8">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b9">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b10">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b11">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b12">
							<div class="battery-tab"></div>
						</div>
					</div>
				</div>
				<div class="battery-set bs2">
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b13">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b14">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b15">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b16">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b17">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b18">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b19">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b20">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b21">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b22">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b23">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b24">
							<div class="battery-tab"></div>
						</div>
					</div>
				</div>
				<div class="battery-connector-b b-flicker-f"></div>
			</div>

			<dvi class="b-pair2">
				<div class="battery-connector-t b-flicker-f"></div>
				<div class="battery-set">
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b25">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b26">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b27">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b28">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b29">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b30">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b31">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b32">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b33">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-s" id="b34">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-deploy" id="b35">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="empty-battery battery-right b-flicker-f" id="b36">
							<div class="battery-tab"></div>
						</div>
					</div>
				</div>
				<div class="battery-set bs2">
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b37">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b38">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b39">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b40">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b41">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b42">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b43">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b44">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-s" id="b45">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b46">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-f" id="b47">
							<div class="battery-tab"></div>
						</div>
					</div>
					<div class="battery">
						<div class="battery-link-front"></div>
						<div class="empty-battery battery-left b-flicker-deploy" id="b48">
							<div class="battery-tab"></div>
						</div>
					</div>
				</div>
			</dvi>
			<div id="for-deploy">
				<div  class="empty-deploy b-flicker-deploy" id="b49">
				<p>syncing</p>
					<div class="battery-tab"></div>
				</div>
				<div  class="empty-deploy b-flicker-deploy" id="b50">
				<p>ready for deploy</p>
					<div class="battery-tab"></div>
				</div>
			</div>
		</div>
`;


//TODO 1. total word count
//TODO 2. array of paragraph size



class Battery extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(pcTemplate.content.cloneNode(true));
		// this.text = [];

		// this.wordCount = this.text.join("").split(" ").length()
	}

	connectedCallback() {
		document.addEventListener("keyStroke", event => {
			this.text = event.detail.text;
			this.batteryCount = Math.floor(this.text.join(" ").split(" ").length / 100)

			console.log()
			// console.log(this.batteryCount)
			let res = 0
			for (let i = 1; i <= 50; i++) {
				if (i > this.batteryCount) {
					const emptyBattery = this.shadowRoot.querySelector(`#b${i}`)
					emptyBattery.classList.remove("empty-battery");
					emptyBattery.classList.remove("full-battery");
					emptyBattery.classList.add("empty-battery");
				} else {
					const fullBattery = this.shadowRoot.querySelector(`#b${i}`)
					fullBattery.classList.remove("full-battery");
					fullBattery.classList.remove("empty-battery");
					fullBattery.classList.add("full-battery");
				}
			}
			// console.log(this.shadowRoot.querySelector("#for-deploy"));


		})
	}

}

window.customElements.define('battery-tab', Battery);