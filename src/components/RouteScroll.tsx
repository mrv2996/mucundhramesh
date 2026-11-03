import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Old homepage anchors now live on /work.
const MOVED_TO_WORK = new Set(["#case-studies", "#projects", "#skills"]);

export const RouteScroll = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (location.pathname === "/" && MOVED_TO_WORK.has(location.hash)) {
      navigate({ pathname: "/work", hash: location.hash === "#skills" ? "" : location.hash }, { replace: true });
      return;
    }
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (target) {
        window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 80), behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash, navigate]);
  return null;
};
