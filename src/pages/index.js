import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import styled from "styled-components"

const Chillbg = styled.div`
  background: linear-gradient(-45deg, #efe8f7,#faf8e5,#efe8f7,#faf8e5,#efe8f7,#faf8e5);
  background-size: 800vw 800vw;
  animation: gradient 30s ease infinite;
`

export default function Homepage(props) {
  const { homepage } = props.data
  return (
    <Chillbg>        
      <Layout {...homepage}>
        {homepage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })}
      </Layout>
    </Chillbg>
  )
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
      }
    }
  }
`
