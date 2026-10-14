import { useEffect } from "react";

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const entries = [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ];
    const previous = entries.map(([selector, content]) => {
      const element = document.querySelector(selector);
      const old = element?.getAttribute("content");
      element?.setAttribute("content", content);
      return { element, old };
    });
    return () => {
      document.title = previousTitle;
      previous.forEach(({ element, old }) => { if (old != null) element?.setAttribute("content", old); });
    };
  }, [title, description]);
};
