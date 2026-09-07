import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Portal.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_LABELS = [
  "Brand Identity",
  "Social Media Marketing",
  "Web Design & Development",
  "Performance Marketing",
  "Digital Strategy",
  "Video Production",
  "Corporate Presentation",
];

function Portal() {
  const portalRef = useRef(null);

  useEffect(() => {
    const portal = portalRef.current;

    if (!portal) return;

    const frames = Array.from(
      portal.querySelectorAll(".portal-frame")
    );

    const core = portal.querySelector(".portal-core");
    const chars = portal.querySelectorAll(".p-char");
    const hint = portal.querySelector(".portal-hint");

    const frameCount = frames.length;

    let scrollTrigger = null;
    let mobileTween = null;

    /*
     * DESKTOP
     * ----------------------------------
     */
    if (window.innerWidth > 900) {
      const duration = 0.34;
      const coreStart = 0.8;

      const stagger =
        frameCount > 1
          ? (coreStart - duration) / (frameCount - 1)
          : 0;

      scrollTrigger = ScrollTrigger.create({
        trigger: portal,
        start: "top top",
        end: "+=280%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          const progress = self.progress;

          frames.forEach((frame, index) => {
            const frameProgress = gsap.utils.clamp(
              0,
              1,
              (progress - index * stagger) / duration
            );

            updateFrame(frame, frameProgress);
          });

          const coreProgress =
            progress > coreStart
              ? Math.min(
                  1,
                  (progress - coreStart) /
                    (1 - coreStart)
                )
              : 0;

          updateCore(
            core,
            chars,
            coreProgress
          );

          if (hint) {
            hint.style.opacity =
              (1 - Math.min(1, progress / 0.15)) *
              0.7;
          }
        },
      });
    }

    /*
     * MOBILE
     * ----------------------------------
     */
    else {
      scrollTrigger = ScrollTrigger.create({
        trigger: portal,
        start: "top 75%",
        once: true,

        onEnter: () => {
          if (hint) {
            hint.style.opacity = 0;
          }

          const state = {
            progress: 0,
          };

          mobileTween = gsap.to(state, {
            progress: 1,
            duration: 2.2,
            ease: "power2.inOut",

            onUpdate: () => {
              frames.forEach((frame, index) => {
                const frameProgress =
                  gsap.utils.clamp(
                    0,
                    1,
                    (state.progress -
                      index * 0.08) /
                      0.45
                  );

                updateFrame(
                  frame,
                  frameProgress
                );
              });

              const coreProgress =
                gsap.utils.clamp(
                  0,
                  1,
                  (state.progress - 0.62) /
                    0.38
                );

              updateCore(
                core,
                chars,
                coreProgress
              );
            },
          });
        },
      });
    }

    /*
     * CLEANUP
     * ----------------------------------
     * Only kill the things we created.
     * No gsap.context() / ctx.revert().
     */
    return () => {
      if (mobileTween) {
        mobileTween.kill();
        mobileTween = null;
      }

      if (scrollTrigger) {
        scrollTrigger.kill();
        scrollTrigger = null;
      }
    };
  }, []);

  return (
    <section
      ref={portalRef}
      className="portal"
      id="portal"
    >
      <div className="portal-scene">
        {FRAME_LABELS.map((label) => (
          <div
            className="portal-frame"
            data-label={label}
            key={label}
          />
        ))}
      </div>

      <div className="portal-core">
        <span className="portal-word">
          {"IMPOSSIBLE".split("").map(
            (char, index) => (
              <span
                className="p-char"
                key={index}
              >
                {char}
              </span>
            )
          )}
        </span>

        <span className="portal-word">
          {"TO IGNORE.".split("").map(
            (char, index) => (
              <span
                className="p-char"
                key={index}
              >
                {char === " "
                  ? "\u00A0"
                  : char}
              </span>
            )
          )}
        </span>
      </div>

      <div className="portal-hint">
        Keep scrolling ↓
      </div>
    </section>
  );
}

function updateFrame(frame, progress) {
  const z = -6800 + progress * 7500;

  let opacity = 1;

  if (progress < 0.12) {
    opacity = progress / 0.12;
  } else if (progress > 0.85) {
    opacity = Math.max(
      0,
      1 - (progress - 0.85) / 0.15
    );
  }

  frame.style.transform =
    `translate(-50%, -50%) translateZ(${z}px)`;

  frame.style.opacity = opacity;

  frame.style.borderColor =
    `rgba(155, 1, 3, ${0.25 + opacity * 0.55})`;

  frame.style.boxShadow =
    `0 0 ${70 * opacity}px rgba(155, 1, 3, ${opacity * 0.55})`;
}

function updateCore(core, chars, progress) {
  core.style.opacity = progress;

  core.style.transform =
    `translate(-50%, -50%) scale(${0.8 + progress * 0.3})`;

  chars.forEach((char, index) => {
    const delay =
      (index / chars.length) * 0.55;

    const localProgress =
      gsap.utils.clamp(
        0,
        1,
        (progress - delay) * 2.4
      );

    char.style.opacity = localProgress;

    char.style.filter =
      `blur(${(1 - localProgress) * 10}px)`;

    char.style.transform =
      `translateY(${(1 - localProgress) * 26}px) scale(${0.6 + localProgress * 0.4})`;
  });

  core.classList.toggle(
    "settled",
    progress >= 1
  );

  core.style.setProperty(
    "--glow-op",
    progress
  );
}

export default Portal;