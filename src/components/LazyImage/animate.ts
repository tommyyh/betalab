export const slideUp = {
  initial: {
    height: "0%"
  },
  open: () => ({
    height: "100%",
    transition: { duration: 0.9 }
  }),
  closed: {
    height: "0%",
    transition: { duration: 0.9 }
  }
}