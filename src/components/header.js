import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  Flex,
  NavLink,
  Button,
  VisuallyHidden,
} from "./ui"
import {
  desktopHeaderNavWrapper,
} from "./header.css"
import BrandLogo from "./brand-logo"
import { brandLogoStyles } from './ui.css';

// const Largelink = styled.div`
//   width: 200px;
//   margin-right: 300px;
// `
export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          cta {
            id
            href
            text
          }
        }
      }
    }
  `)

  const { cta } = data.layout.header



  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        
        <Flex variant="space-between">
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo className={brandLogoStyles} />
            </NavLink>
          {/* <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === "Group" ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                      />
                    ) : (
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav> */}
          <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
        </Flex>
      </Container>

    </header>
  )
}
