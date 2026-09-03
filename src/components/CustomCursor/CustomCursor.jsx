import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    if (!cursor || !ring || !label) return;

    const isTouch = window.matchMedia(
      "(max-width: 900px)"
    ).matches;

    if (isTouch) return;

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(ring, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.55,
        ease: "power3.out",
      });
    };

    const setLabel = (element, text) => {
      const enter = () => {
        cursor.classList.add("cursor-big");
        ring.classList.add("cursor-ring-hide");
        label.textContent = text;
      };

      const leave = () => {
        cursor.classList.remove("cursor-big");
        ring.classList.remove("cursor-ring-hide");
        label.textContent = "";
      };

      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);

      return () => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      };
    };

    window.addEventListener("mousemove", moveCursor);

    const cleanupFunctions = [];

    document
      .querySelectorAll(".work-item, .hero-media")
      .forEach((element) => {
        cleanupFunctions.push(
          setLabel(element, "VIEW")
        );
      });

    document
      .querySelectorAll(".video-card")
      .forEach((element) => {
        cleanupFunctions.push(
          setLabel(element, "PLAY")
        );
      });

    document
      .querySelectorAll(".svc-item")
      .forEach((element) => {
        cleanupFunctions.push(
          setLabel(element, "VIEW")
        );
      });

    document
      .querySelectorAll(".client-cell")
      .forEach((element) => {
        cleanupFunctions.push(
          setLabel(element, "OPEN")
        );
      });

    document
      .querySelectorAll(".before-after-slider")
      .forEach((element) => {
        cleanupFunctions.push(
          setLabel(element, "DRAG")
        );
      });

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="custom-cursor"
      >
        <span ref={labelRef}></span>
      </div>

      <div
        ref={ringRef}
        id="cursorRing"
        className="custom-cursor-ring"
      />
    </>
  );
}

export default CustomCursor;