import * as React from "react"
import { Helmet } from "react-helmet"

export default function Head({ title = "Lincoln Wisely | Le Website", description="*in a cool robot voice* welcome, earthlings", image }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <meta charSet="utf-8" />
      <title>Lincoln Wisely | Le Website</title>
        <meta
          name="description"
          property="og:description"
          content="*in a cool robot voice* welcome, earthlings"
        />

      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </Helmet>
  )
}
