//Basic user activity tracking
const INPUT_EVENT_NAMES: string[] = ["click", "mousemove", "keydown"];

export const addTrackingEventListeners = (onEventFunction: Function) => {
  INPUT_EVENT_NAMES.forEach((eventName) =>
    document.body.addEventListener(eventName, (e) => onEventFunction(e), false)
  );
  window.addEventListener(
    "blur",
    (e) => {
      onEventFunction(e);
    },
    false
  );
  window.addEventListener(
    "focus",
    (e) => {
      onEventFunction(e);
    },
    false
  );
};
export const removeTrackingEventListeners = (onEventFunction: Function) => {
  INPUT_EVENT_NAMES.forEach((eventName) =>
    document.body.removeEventListener(eventName, () => onEventFunction(), false)
  );
  window.removeEventListener(
    "blur",
    (e) => {
      onEventFunction(e);
    },
    false
  );
  window.removeEventListener(
    "focus",
    (e) => {
      onEventFunction(e);
    },
    false
  );
};
