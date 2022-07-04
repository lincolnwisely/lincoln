import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text
export const heroHeader = style({
  maxWidth: "1108px",
})

export const heroText = style({
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[5],
  marginRight: theme.space[8],
  maxWidth: "498px",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const heroImage = style({
  width: "100%",
})
