import { useEffect, useRef, useState } from "react";

/** True once the element has scrolled into view (fires once). */
export const useInView = <T extends Element>(margin = "0px 0px -10% 0px") => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) return setInView(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [inView, margin]);
  return { ref, inView };
};
