import * as React from "react"
import { graphql } from "gatsby"
import ContactForm from './contact'
import {
  Container,
  Section,
  Heading,
  Text,
  Kicker,
} from "./ui"

export default function HomepageCta(props) {
  return (
    <Container>
      <Section padding={4} radius="large" background="primary">
        <Heading center>
          {props.kicker && <Kicker center>{props.kicker}</Kicker>}
          {props.heading}
        </Heading>
        <Text as="p" center variant="lead">
          {props.text}
        </Text>
        <ContactForm/>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
