import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Magnetic } from "@/components/ui/magnetic";

type FooterStyle = CSSProperties & {
  "--footer-pointer-x": string;
  "--footer-pointer-y": string;
};

const SOCIAL_LINKS = [
  { label: "GitHub", link: "https://github.com/AlsonChong" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/alson-chong" },
  {
    label: "Instagram",
    link: "https://www.instagram.com/alsonc.1?stkn=NXJvN2VkY3p5cDc3&utm_source=qr",
  },
];

export function HoverFooter() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [pointer, setPointer] = useState({ x: "50%", y: "50%" });

  const updatePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;

    setPointer({
      x: `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
      y: `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
    });
  };

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") setIsHovering(true);
  };

  return (
    <footer className="hover-footer overflow-hidden border-t border-border">
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-20">
          <div>
            <p className="max-w-md text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
              Let&apos;s create something worth remembering.
            </p>
            <div className="inline-block">
              <Magnetic intensity={0.25} range={90} springOptions={{ bounce: 0 }}>
                <a
                  href="#contact"
                  className="mt-7 inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start a conversation →
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-muted-foreground">Navigate</p>
              <nav aria-label="Footer navigation" className="mt-3 flex flex-col items-start gap-2">
                <a href="#top" className="hover-footer-link">
                  Home
                </a>
                <a href="#work" className="hover-footer-link">
                  Work
                </a>
                <a href="#about" className="hover-footer-link">
                  About
                </a>
                <a href="#contact" className="hover-footer-link">
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <p className="text-muted-foreground">Connect</p>
              <p className="mt-3 leading-relaxed text-foreground">
                For collaborations and project enquiries, use the contact form above or the social links below.
              </p>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Social links">
                {SOCIAL_LINKS.map((social) => (
                  <div key={social.label} className="inline-block">
                    <Magnetic intensity={0.16} range={70} springOptions={{ bounce: 0 }}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {social.label}
                      </a>
                    </Magnetic>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Alson Chong, All Rights Reserved.</span>
          <span>@alsonc8069@gmail.com</span>
        </div>
      </div>

      <div
        ref={stageRef}
        className={`hover-footer-stage ${isHovering ? "is-hovering" : ""}`}
        style={
          {
            "--footer-pointer-x": pointer.x,
            "--footer-pointer-y": pointer.y,
          } as FooterStyle
        }
        onPointerMove={updatePointer}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={() => setIsHovering(false)}
        role="img"
        aria-label="Alson"
      >
        <span aria-hidden="true" className="hover-footer-word hover-footer-outline">
          ALSON
        </span>
        <span aria-hidden="true" className="hover-footer-word hover-footer-reveal">
          ALSON
        </span>
      </div>
    </footer>
  );
}
