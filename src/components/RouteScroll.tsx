import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const RouteScroll = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (target) {
        window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 80), behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash]);
  return null;
};
