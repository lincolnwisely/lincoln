import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, Flex } from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}
        </SuperHeading>
        <Flex alignItems="spaceBetween">
          {props.text && (
            <Text className={styles.aboutHeroText}>{props.text}</Text>
            )}
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
                className={styles.aboutHeroImage}
              />
            )}
          </Flex>
      </Container>

    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
