type fontTag = {
  as: "p" | "h1" | "h2" | "h3";
};

type TypographyOptions =
  | "d1"
  | "d1-extrabold"
  | "d2-regular"
  | "d2-extrabold"
  | "d3"
  | "h1-regular"
  | "h1-extrabold"
  | "h2-medium"
  | "h2-extrabold"
  | "h3"
  | "p1"
  | "p1-medium"
  | "p2"
  | "button-large"
  | "button-medium"
  | "button-small"
  | "tag";

const d: fontTag = { as: "p" }
const h1: fontTag = { as: "h1" }
const h2: fontTag = { as: "h2" }
const h3: fontTag = { as: "h3" }
const p: fontTag = { as: "h3" }

const propProvider = (
  fontSize: string,
  lineHeight: string,
  fontWeight: number
) => ({
  fontSize,
  lineHeight,
  fontWeight
})

const PropAcessor = () => ({
  d1: {
    ...d,
    ...propProvider("32px", "40px", 400)
  },
  "d1-extrabold": {
    ...d,
    ...propProvider("32px", "40px", 800)
  },
  "d2-regular": {
    ...d,
    ...propProvider("24px", "32px", 400)
  },
  "d2-extrabold": {
    ...d,
    ...propProvider("24px", "32px", 800)
  },
  d3: {
    ...d,
    ...propProvider("20px", "24px", 400)
  },
  "h1-regular": {
    ...h1,
    ...propProvider("16px", "24px", 400)
  },
  "h1-extrabold": {
    ...h1,
    ...propProvider("16px", "24px", 800)
  },
  "h2-medium": {
    ...h2,
    ...propProvider("24px", "22px", 500)
  },
  "h2-extrabold": {
    ...h2,
    ...propProvider("24px", "22px", 800)
  },
  h3: {
    ...h3,
    ...propProvider("12px", "18px", 500)
  },
  p1: {
    ...p,
    ...propProvider("12px", "16px", 400)
  },
  "p1-medium": {
    ...p,
    ...propProvider("14px", "20px", 500)
  },
  p2: {
    ...p,
    ...propProvider("10px", "14px", 400)
  },
  "button-large": {
    ...d,
    ...propProvider("20px", "24px", 800)
  },
  "button-medium": {
    ...d,
    ...propProvider("14px", "20px", 800)
  },
  "button-small": {
    ...d,
    ...propProvider("12px", "16px", 800)
  },
  tag: {
    ...d,
    ...propProvider("10px", "14px", 800)
  }
})

export { TypographyOptions }

export default PropAcessor
