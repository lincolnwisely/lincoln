import * as React from "react"
import { Helmet } from "react-helmet"
import { Script } from "gatsby"

export default function Head({ title, description, image }) {
  title = "Lincoln Wisely | Le Website"
  description = "Hi, I'm Lincoln Wisely, a developer based in St. Louis. This is my site built with GatsbyJS and Sanity.io"
  return (
    <Helmet>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=UA-72917900-1'
        forward={[`gtag`]}
      />
    <Script id="gtag-config">
      {`
        window.dataLayer = window.dataLayer || []
        window.gtag = function gtag() { window.dataLayer.push(arguments) }
        gtag('js', new Date())
        gtag('config', 'UA-72917900-1')
      `}
    </Script>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://lwisely.com" />
      <meta name="description" content={description} />

    </Helmet>
  )
}
