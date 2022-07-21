import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"
import * as styles from "./hero.css"

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex justifyContent="spaceBetween" variant="responsive">
          <Box width="third">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList link links={props.links} />
          </Box>
          <Box width="third">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt ?? ""}
                image={getImage(props.image.gatsbyImageData)}
                className={styles.heroImage}
              />
            )}
          </Box>
        </Flex>


   
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
