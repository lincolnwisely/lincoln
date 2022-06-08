import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import styled from "styled-components"

const Chillbg = styled.div`
  background: linear-gradient(-45deg, #efe8f7,#faf8e5,#efe8f7,#faf8e5,#fbe2dc,#faf8e5);
  background-size: 2000% 2000%;
  animation: gradient 30s ease infinite;
`

export default function Page(props) {
  const { page } = props.data

  return (
    <Chillbg>
      <Layout {...page}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
            />
        </Container>
      </Box>
    </Layout>
  </Chillbg>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
