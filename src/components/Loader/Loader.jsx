import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loader.css";

function Loader() {
  const loaderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return;

    const counter = { value: 0 };

    const progressTween = gsap.to(counter, {
      value: 100,
      duration: 1,
      ease: "power1.inOut",
      onUpdate: () => {
        setProgress(Math.floor(counter.value));
      },
    });

    const exitTween = gsap.to(loader, {
      delay: 1,
      duration: 0.9,
      scaleY: 0,
      ease: "power4.inOut",
      onComplete: () => {
        loader.style.display = "none";
      },
    });

    return () => {
      progressTween.kill();
      exitTween.kill();
    };
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-mark">
        matchsticks<span>.</span>
      </div>

      <div className="loader-bar">
        <div
          className="loader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="loader-percent">
        {progress}%
      </div>
    </div>
  );
}

export default Loader;