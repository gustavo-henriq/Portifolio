import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties } from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
    className?: string;
    delay?: number;
};

export function Reveal({ children, className = "", delay = 0, style, ...props }: RevealProps) {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -80px 0px",
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`reveal ${isVisible ? "revealVisible" : ""} ${className}`.trim()}
            style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
            {...props}
        >
            {children}
        </div>
    );
}
