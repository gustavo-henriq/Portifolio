import "../styles/ambientBackground.css";
import { useEffect, useRef } from "react";

export function AmbientBackground() {
    const backgroundRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const background = backgroundRef.current;

        if (!background || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let frameId = 0;

        function updateParallax() {
            background?.style.setProperty("--ambient-y", `${window.scrollY * -0.025}px`);
            background?.style.setProperty("--ambient-x", `${window.scrollY * 0.012}px`);
        }

        function scheduleUpdate() {
            window.cancelAnimationFrame(frameId);
            frameId = window.requestAnimationFrame(updateParallax);
        }

        updateParallax();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("scroll", scheduleUpdate);
        };
    }, []);

    return <div ref={backgroundRef} className="ambientBackground" aria-hidden="true" />;
}
