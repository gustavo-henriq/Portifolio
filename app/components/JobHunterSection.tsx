import { Fragment, useEffect, useRef } from "react";
import type { Language } from "../types";
import "../styles/jobHunterSection.css";

const cards = [
    {
        key: "bronze",
        title: "Bronze Layer",
        titlePt: "Camada Bronze",
        description: "Raw job listings scraped from multiple sources via Playwright",
        descriptionPt: "Vagas brutas coletadas de múltiplas fontes via Playwright",
    },
    {
        key: "silver",
        title: "Silver Layer",
        titlePt: "Camada Prata",
        description: "Cleaned, deduplicated and structured into consistent fields",
        descriptionPt: "Dados limpos, sem duplicatas e estruturados em campos consistentes",
    },
    {
        key: "gold",
        title: "Gold Layer",
        titlePt: "Camada Ouro",
        description: "AI-scored by Gemini, ranked by fit, ready to deliver",
        descriptionPt: "Pontuado pela Gemini, ranqueado por aderência e pronto para entrega",
    },
] as const;

function DatabaseIcon() {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
            <ellipse cx="24" cy="12" rx="15" ry="6" />
            <path d="M9 12v20c0 3.3 6.7 6 15 6s15-2.7 15-6V12" />
            <path d="M9 22c0 3.3 6.7 6 15 6s15-2.7 15-6" />
        </svg>
    );
}

function FilterIcon() {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M10 12h28L27 25v9l-6 3V25L10 12Z" />
            <path d="M17 19h14" />
        </svg>
    );
}

function SparkIcon() {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
            <path d="M26 5 13 27h10l-2 16 14-24H25l1-14Z" />
        </svg>
    );
}

const icons = {
    bronze: <DatabaseIcon />,
    silver: <FilterIcon />,
    gold: <SparkIcon />,
};

export function JobHunterSection({ language }: { language: Language }) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const stageRef = useRef<HTMLDivElement | null>(null);
    const spotlightRef = useRef<HTMLDivElement | null>(null);
    const chainPanelRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const arrowRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const stage = stageRef.current;
        const spotlight = spotlightRef.current;
        const chainPanel = chainPanelRef.current;
        const activeCards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        const activeArrows = arrowRefs.current.filter(Boolean) as HTMLDivElement[];

        if (!section || !stage || !spotlight || !chainPanel || activeCards.length !== 3 || activeArrows.length !== 2) {
            return;
        }

        if (window.matchMedia("(max-width: 768px)").matches) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
            return;
        }

        let context: { revert: () => void } | null = null;
        let cancelled = false;

        void Promise.all([
            import("gsap"),
            import("gsap/ScrollTrigger"),
        ]).then(([gsapModule, scrollTriggerModule]) => {
            if (cancelled) {
                return;
            }

            const gsap = gsapModule.gsap;
            const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            context = gsap.context(() => {
                const arrowLines = activeArrows
                    .map((arrow) => arrow.querySelector("span"))
                    .filter(Boolean) as HTMLSpanElement[];

                gsap.set(activeCards, {
                    y: 28,
                    opacity: 0,
                    scale: 0.98,
                    transformOrigin: "50% 100%",
                });
                gsap.set(chainPanel, {
                    autoAlpha: 0,
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: -18,
                    scale: 0.98,
                    pointerEvents: "none",
                    transformOrigin: "50% 0%",
                });
                gsap.set(activeArrows, { opacity: 0 });
                gsap.set(arrowLines, { scaleX: 0, transformOrigin: "0% 50%" });
                gsap.set(spotlight, { yPercent: 16, opacity: 0 });

                const timeline = gsap.timeline({
                    defaults: { ease: "power3.out" },
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "+=165%",
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.22,
                        anticipatePin: 1,
                        fastScrollEnd: true,
                        invalidateOnRefresh: true,
                    },
                });

                timeline
                    .to(chainPanel, {
                        autoAlpha: 1,
                        clipPath: "inset(0% 0% 0% 0%)",
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                    }, 0.08)
                    .set(chainPanel, { pointerEvents: "auto" }, 0.16)
                    .to(activeCards, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.22,
                        stagger: 0.065,
                    }, 0.26)
                    .to(activeArrows[0], {
                        opacity: 1,
                        duration: 0.16,
                    }, 0.5)
                    .to(arrowLines[0], {
                        scaleX: 1,
                        duration: 0.18,
                        ease: "power1.out",
                    }, 0.51)
                    .to(activeArrows[1], {
                        opacity: 1,
                        duration: 0.16,
                    }, 0.65)
                    .to(arrowLines[1], {
                        scaleX: 1,
                        duration: 0.18,
                        ease: "power1.out",
                    }, 0.66)
                    .to(spotlight, { yPercent: -8, opacity: 1, duration: 0.34 }, 0.52);

                window.requestAnimationFrame(() => ScrollTrigger.refresh());
            }, section);
        });

        return () => {
            cancelled = true;
            context?.revert();
        };
    }, [language]);

    return (
        <section ref={sectionRef} className="jobHunterSection" aria-label={language === "en" ? "Job Hunter case study" : "Estudo de caso Job Hunter"}>
            <div ref={spotlightRef} className="jobHunterSpotlight" aria-hidden="true" />

            <div className="jobHunterContent">
                <div className="jobHunterSummary">
                    <p className="projectEyebrow">
                        {language === "en" ? "Featured Project 01" : "Projeto em Destaque 01"}
                    </p>
                    <h3 className="projectTitle">
                        Job Hunter
                    </h3>
                    <p className="jobHunterSubtitle">
                        {language === "en"
                            ? "An autonomous system that finds, filters, and delivers the right job listings."
                            : "Um sistema autônomo que encontra, filtra e entrega as vagas certas."}
                    </p>
                    <p className="jobHunterDescription">
                        {language === "en"
                            ? "A fully automated pipeline that scrapes listings, refines them through three data layers, then uses an AI model to score each one against a candidate's profile. Only the best matches get delivered."
                            : "Um pipeline totalmente automatizado que coleta vagas, refina tudo em três camadas de dados e usa IA para pontuar cada vaga contra o perfil do candidato. Só as melhores combinações são entregues."}
                    </p>

                    <div className="jobHunterFooter">
                        <p className="jobHunterTags">
                            {language === "en"
                                ? "Python · Playwright · MongoDB Atlas · Gemini API · Medallion Architecture"
                                : "Python · Playwright · MongoDB Atlas · Gemini API · Arquitetura Medallion"}
                        </p>
                        <div className="jobHunterActions">
                            <span className="jobHunterStatus">
                                {language === "en" ? "Pipeline complete · Telegram delivery in progress" : "Pipeline completo · Entrega via Telegram em andamento"}
                            </span>
                            <a
                                href="https://github.com/gustavo-henriq/JobHunter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="jobHunterLink"
                            >
                                GitHub →
                            </a>
                        </div>
                    </div>
                </div>

                <div ref={chainPanelRef} className="jobHunterChainPanel">
                    <div className="jobHunterChainIntro">
                        <span>{language === "en" ? "Data chain" : "Cadeia de dados"}</span>
                        <p>
                            {language === "en"
                                ? "Raw listings move through Bronze, Silver and Gold layers until only ranked, delivery-ready matches remain."
                                : "As vagas brutas passam pelas camadas Bronze, Prata e Ouro até sobrarem apenas matches ranqueados e prontos para entrega."}
                        </p>
                    </div>

                    <div ref={stageRef} className="jobHunterStage" aria-hidden="true">
                        {cards.map((card, index) => (
                            <Fragment key={card.key}>
                                <div
                                    ref={(element) => {
                                        cardRefs.current[index] = element;
                                    }}
                                    className={`jobLayerCard ${card.key}`}
                                >
                                    <span className="jobLayerIcon">{icons[card.key]}</span>
                                    <h3>{language === "en" ? card.title : card.titlePt}</h3>
                                    <p>{language === "en" ? card.description : card.descriptionPt}</p>
                                </div>

                                {index < cards.length - 1 ? (
                                    <div
                                        ref={(element) => {
                                            arrowRefs.current[index] = element;
                                        }}
                                        className="jobFlowArrow"
                                    >
                                        <span />
                                    </div>
                                ) : null}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
