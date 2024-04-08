export const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.04 * i }
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 }
  }
}