
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import {useMediaQuery} from "react-responsive";
//useMediaQuery:Detects screen size,Used to disable heavy animations on mobile.

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);
    //I create a ref to access the Performance section DOM element. 
    //This reference is later used by GSAP ScrollTrigger to determine when animations should start and end.

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            //This retrieves the actual DOM element associated with the Performance section.
            if (!sectionEl) return;
            //The paragraph starts hidden with opacity 0 and slightly lower on the page using y:10.

             //As the user scrolls, GSAP animates it to full opacity and moves it back to its original position,
              //creating a smooth fade-up effect.
            // Text Animation
            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                        //The animation begins when the top of the paragraph reaches the bottom of the viewport and finishes
                        //  when it reaches the center of the screen. Using scrub:true keeps the animation synchronized with scrolling.
                    },
                }
            );

            if (isMobile) return;
            //After setting up the text animation, I stop execution on mobile devices. 
            // This prevents the more expensive image animations from running and improves performance.
            // Image Positioning Timeline
            const tl = gsap.timeline({
                //For desktop users, I create a GSAP timeline that controls all image movements. 
                // The timeline is connected to ScrollTrigger so animation progress follows the user's scroll position.
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                //Each animation takes 2 seconds to complete.
                //Ease controls how the animation moves, not where it moves.
                //power1.inOut creates a smooth acceleration and deceleration effect. 
                //GSAP automatically stops the older conflicting animation.
                //The animation starts slowly, speeds up in the middle, and slows down again before finishing.
                scrollTrigger: {
                    trigger: sectionEl, //entire performance section
                    start: "top bottom",//Start the animation when the top of the Performance section touches the bottom of the viewport.
                    end: "bottom top",
                    scrub: 1,//Adds a 1-second smoothing effect.
                    invalidateOnRefresh: true,

                    //invalidateOnRefresh: true forces ScrollTrigger to recalculate measurements whenever the page refreshes, resizes, 
                    //or layout changes, ensuring the animations remain accurate on different screen sizes.
                },
            });

            // Position Each Performance Image
            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );
   //The images are moved by GSAP using CSS position properties such as left, right, bottom, and transform.

    //For each image, I define a target position inside the performanceImgPositions configuration array. When the user scrolls, GSAP 
    //gradually updates those CSS properties and moves the image from its initial position to the target position
    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

             <div className="wrapper">
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance