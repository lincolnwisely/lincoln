import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head({ title, description, image }) {
  title = "Lincoln Wisely | Le Website"
  description = "Hi, I'm Lincoln Wisely, a developer based in St. Louis. This is my site built with GatsbyJS and Sanity.io"
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://lwisely.com" />
      <meta name="description" content={description} />

    </Helmet>
  )
}
