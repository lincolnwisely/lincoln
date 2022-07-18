import { style } from "@vanilla-extract/css"
import { NONAME } from "dns"

import { media } from "./ui.css"

export const form = style({
  display: "flex", 
  flexDirection:"column",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  "@media": {
    [media.small]: {
    width: "50%",
    justifyContent: "center",

    },
  },
})


export const input = style({
  marginBottom: "25px",
  height: "50px",
  paddingLeft: "20px"
})

export const checkboxLabel = style({
  margin: "10px",
})

export const button = style({
  padding: "16px",
  marginTop: "20px",
  width: "80%",
  maxWidth: "300px",
  fontSize: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: '10px',
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  backgroundColor: "#f14e41",
})

export const success = style({
  height: "40px",
  fontSize: "24px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "30px"
})