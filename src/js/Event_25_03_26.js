import { gsap } from "gsap";

class Event_25_03_26 {
    constructor() {
        this.initLayout();
        if (import.meta.env.PROD) {
            this.initAnimation();
            // this.initDev();
        }
        if (import.meta.env.DEV) {
            // this.initAnimation();
            this.initDev();
        }
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.dayCulture2026 = document.createElement("div");
        this.container = document.createElement("div");

        this.dayCulture2026.id = "dayCulture2026";
        this.dayCulture2026.className =
            "anniversary anniversary--dayCulture2026";
        this.container.classList = "anniversary__container";

        this.dayCulture2026.innerHTML = `
			<picture id="dayCulture2026Back">
				<img src="assets/events/dayCulture2026/images/webp/dayCulture2026Back.webp" alt="">
			</picture>
            <picture id="dayCulture2026Slogan">
				<img src="assets/events/dayCulture2026/images/webp/dayCulture2026Slogan.webp" alt="">
			</picture>
		`;

        this.container.innerHTML = `
            <picture id="dayCulture2026_1">
                <img src="assets/events/dayCulture2026/images/webp/dayCulture2026_1.webp" alt="">
            </picture>
            <picture id="dayCulture2026_2">
                <img src="assets/events/dayCulture2026/images/webp/dayCulture2026_2.webp" alt="">
            </picture>
        `;

        // Appends
        this.bodyBlock.appendChild(this.dayCulture2026);
        this.dayCulture2026.appendChild(this.container);
    }

    initAnimation() {
        const dayCulture2026 = document.getElementById("dayCulture2026"),
            dayCulture2026Back = document.getElementById("dayCulture2026Back"),
            dayCulture2026Slogan = document.getElementById(
                "dayCulture2026Slogan",
            ),
            dayCulture2026_1 = document.getElementById("dayCulture2026_1"),
            dayCulture2026_2 = document.getElementById("dayCulture2026_2");
        let tl = new gsap.timeline({
            delay: 0.5,
            onComplete: this.initHide(8),
        });

        tl.to(dayCulture2026, {
            duration: 0.6,
            delay: 0,
            autoAlpha: 1,
            zIndex: 9999,
            // easy: "elastic.in(1,0.3)"
        })
            .from([dayCulture2026Back], {
                duration: 0.8,
                delay: "-0.2",
                autoAlpha: 0,
            })
            .from([dayCulture2026_1, dayCulture2026_2], {
                duration: 2,
                delay: "-0.3",
                autoAlpha: 0,
                // y: "30%",
                stagger: 0.3,
                // easy: "power2",
            })
            .from(dayCulture2026Slogan, {
                duration: 2,
                delay: "-0.6",
                autoAlpha: 0,
                // x: "100vmin",
                // scale: 1.5,
                // easy: "bounce",
            });
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                setTimeout(() => {
                    this.bodyBlock.removeChild(this.dayCulture2026);
                }, 1000);
            },
        });

        tl.to(this.dayCulture2026, {
            autoAlpha: 0,
            duration: 0.6,
            delay: "-0.8",
            display: "none",
            zIndex: "-1",
            ease: "power1",
        });
    }

    initDev() {
        this.dayCulture2026.style.opacity = 1;
        this.dayCulture2026.style.visibility = "visible";
        this.dayCulture2026.style.zIndex = 9999;
    }
}

export { Event_25_03_26 };
