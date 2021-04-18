import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      primary100: "#D8F3DC",
      primary200: "#B7E4C7",
      primary300: "#95D5B2",
      primary400: "#74C69D",
      primary500: "#52B788",
      primary600: "#49A47A",
      primary700: "#2D6A4F",
      primary800: "#1B4332",
      primary900: "#081C15",
    },
  },
  media: {},
  utils: {},
  prefix: "",
  insertionMethod: "append | prepend | () => {}",
  themeMap: {},
});
