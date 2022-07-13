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
  padding: "10px",
  marginTop: "20px",
  width: "200px",
  fontSize: "18px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: '30px',
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  backgroundColor: "#FF4122"
})

export const success = style({
  height: "40px",
  fontSize: "24px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "30px"
})