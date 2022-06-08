import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import styled from "styled-components"

const Chillbg = styled.div`
  background: linear-gradient(-45deg, #efe8f7,#faf8e5,#efe8f7,#faf8e5,#fbe2dc,#faf8e5);
  background-size: 2000% 2000%;
  animation: gradient 30s ease infinite;
`

export default function About(props) {
  const { aboutPage } = props.data

  return (
    <Chillbg>
      <Layout {...aboutPage}>
        {aboutPage.blocks.map((block) => {
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
    aboutPage {
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
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
