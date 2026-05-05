// import { gsap } from "gsap"; // Убрать в продакшене

export class Event_09_05_26 {
    constructor() {
        this.initLayout();
        this.initAnimation();
        // this.initAnimationMobile();
        // this.initMobile();
        // this.initDev();
    }

    initLayout() {
        this.bodyBlock = document.body;
        this.event_090526 = document.createElement("div");
        // this.container = document.createElement('div');

        this.event_090526.id = "event_090526";
        this.event_090526.className = "anniversary anniversary--event090526";
        // this.container.classList = 'anniversary__container';

        this.event_090526.innerHTML = `
			<picture id="event_090526Back">
				<img src="/assets/events/event_09_05_26/images/events_09_05_26_back.webp" alt="">
			</picture>
			<picture id="event_090526Tape">
				<img src="/assets/events/event_09_05_26/images/events_09_05_26_tape.webp" alt="">
			</picture>
			<picture id="event_090526Slogan">
				<img src="/assets/events/event_09_05_26/images/events_09_05_26_slogan.webp" alt="">
			</picture>
			<picture id="event_090526Photo">
				<img src="/assets/events/event_09_05_26/images/events_09_05_26_photo.webp" alt="">
			</picture>
			<picture id="event_0905269num">
				<img src="/assets/events/event_09_05_26/images/events_09_05_26_9num.webp" alt="">
			</picture>
		`;

        // Appends
        this.bodyBlock.appendChild(this.event_090526);
    }

    initAnimation(delay = 0.6) {
        const event_090526Back = document.getElementById("event_090526Back"),
            event_090526Tape = document.getElementById("event_090526Tape"),
            event_090526Photo = document.getElementById("event_090526Photo"),
            event_090526Slogan = document.getElementById("event_090526Slogan"),
            event_0905269num = document.getElementById("event_0905269num");
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: this.initHide(7),
        });

        tl.to(this.event_090526, {
            duration: 1,
            autoAlpha: 1,
            zIndex: 9999,
            // easy: "elastic.in(1,0.3)"
        })
            .from(event_090526Back, {
                duration: 1,
                delay: "-0.4",
                autoAlpha: 0,
            })
            .from([event_090526Tape, event_090526Photo], {
                duration: 0.6,
                delay: "-0.2",
                autoAlpha: 0,
                y: "5%",
                stagger: 0.3,
            })
            .from([event_090526Slogan, event_0905269num], {
                duration: 0.6,
                delay: "-0.2",
                autoAlpha: 0,
                x: "-10%",
            });
    }

    initAnimationMobile(delay = 0.6) {
        const event_090526 = document.getElementById("event_090526"),
            event_090526BackM = document.getElementById("event_090526BackM"),
            event_090526Nine = document.getElementById("event_090526Nine"),
            event_090526SloganM = document.getElementById(
                "event_090526SloganM",
            ),
            event_090526Year = document.getElementById("event_090526Year"),
            event_090526Logo = document.getElementById("event_090526Logo");
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: this.initHide(7),
        });

        tl.to(event_090526, {
            duration: 0.3,
            autoAlpha: 1,
            zIndex: 9999,
            // easy: "elastic.in(1,0.3)"
        })
            .from(event_090526Nine, {
                duration: 1,
                delay: "0.5",
                autoAlpha: 0,
                // y: '-10%'
            })
            .from(event_090526BackM, {
                duration: 1,
                delay: "-0.3",
                autoAlpha: 0,
            })
            .from(event_090526SloganM, {
                duration: 0.6,
                delay: "-0.3",
                autoAlpha: 0,
                x: "5%",
                stagger: 0.3,
            })
            .from([event_090526Year, event_090526Logo], {
                duration: 0.6,
                delay: "-0.4",
                autoAlpha: 0,
                x: "10%",
            });
    }

    initHide(delay) {
        let tl = new gsap.timeline({
            delay: delay,
            onComplete: () => {
                setTimeout(() => {
                    this.bodyBlock.removeChild(this.event_090526);
                }, 1000);
            },
        });

        tl.to(this.event_090526, {
            autoAlpha: 0,
            duration: 0.6,
            delay: "-0.8",
            display: "none",
            zIndex: "-1",
            ease: "power1",
        });
    }

    initDev() {
        this.event_090526.style.opacity = 1;
        this.event_090526.style.visibility = "visible";
        this.event_090526.style.zIndex = 9999;
    }

    initMobile() {
        screen.orientation.addEventListener("change", () => {
            if (
                screen.orientation.type === "landscape-primary" ||
                screen.orientation.type === "landscape-secondary"
            ) {
                location.reload();
            } else if (
                screen.orientation.type === "portrait-primary" ||
                screen.orientation.type === "portrait-secondary"
            ) {
                location.reload();
            }
        });

        if (
            screen.orientation.type === "landscape-primary" ||
            screen.orientation.type === "landscape-secondary"
        ) {
            this.initAnimation();
        } else if (
            screen.orientation.type === "portrait-primary" ||
            screen.orientation.type === "portrait-secondary"
        ) {
            this.initAnimationMobile();
        } else {
            this.initAnimation();
        }
    }
}
