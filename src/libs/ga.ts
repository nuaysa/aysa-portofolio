export const sendGAEvent = (label: string, category = "Button", action = "click") => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};
