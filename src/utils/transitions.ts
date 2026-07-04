export const smoothTransition = {
  forwards: {
    old: {
      name: "smooth-out",
      duration: "0.35s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "forwards",
    },
    new: {
      name: "smooth-in",
      duration: "0.55s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "backwards",
    },
  },
  backwards: {
    old: {
      name: "smooth-out-reverse",
      duration: "0.35s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "forwards",
    },
    new: {
      name: "smooth-in-reverse",
      duration: "0.55s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "backwards",
    },
  },
};
