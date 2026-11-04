import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Old homepage anchors now live on /work.
const MOVED_TO_WORK = new Set(["#case-studies", "#projects", "#skills"]);

export const RouteScroll = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPath = useRef<string | null>(null);
  useLayoutEffect(() => {
    if (location.pathname === "/" && MOVED_TO_WORK.has(location.hash)) {
      navigate({ pathname: "/work", hash: location.hash === "#skills" ? "" : location.hash }, { replace: true });
      return;
    }
    // Jumping to an anchor on the page you're already on should glide; arriving
    // from another page (or on first load) should land straight away.
    const glide = prevPath.current === location.pathname && location.hash !== "";
    prevPath.current = location.pathname;
    const frame = requestAnimationFrame(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: ScrollBehavior = glide && !reduced ? "smooth" : "instant";
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (target) {
        window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 80), behavior });
      } else {
        window.scrollTo({ top: 0, behavior });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash, navigate]);
  return null;
};
