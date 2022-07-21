import { style } from "@vanilla-extract/css"
import { media } from "./ui.css"


export const item = style({

  textAlign: "center",
  justifyContent: "center",
  marginRight: "auto",
  marginLeft: "auto",
  width: "80%",
  padding: "10px",
  flexGrow: '1',
  color: "black", 
  textDecoration: "none",
  "@media": {
    [media.small]: {
    width: "30%",
    minHeight: "250px",
    justifyContent: "center",
    // padding: "50px",
    },
  },
})


export const image = style({
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "160px",
  border: "10px solid #0A2728",
  borderRadius: "20px",
    "@media": {
    [media.small]: {
  maxWidth: "200px",
  // padding: "10px",

    },
  },

})


