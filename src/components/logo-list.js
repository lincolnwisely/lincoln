import * as React from "react"
import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"
import * as styles from './ui.css.ts'
import { OutboundLink } from "gatsby-plugin-google-analytics"

  function deflate(e) {
    e.target.style.transform = 'scale(.9)';
    e.target.style.transition = 'all .4s ease';
  }

function reflate(e) {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = 'all .4s ease';
  }


export function LogoItem(props) {


  
  if (!props.image) return null

   if ( props.link ) {
     return (

       <OutboundLink onMouseOver={deflate} onMouseOut={reflate} className={styles.linkedImg} href={props.link} alt={`link to ${props.alt}`}>
       <Logo alt={props.alt ?? ""} image={props.image.gatsbyImageData} size="medium" />
       </OutboundLink>
       )

   } else {
return (


   <Logo alt={props.alt ?? ""} image={props.image.gatsbyImageData} size="medium" />
)
  }

  
}

export default function LogoList(props) {
  return (
    <Section paddingY={4}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="kicker">
            {props.text}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={5} variant="center">
          {props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      link
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
