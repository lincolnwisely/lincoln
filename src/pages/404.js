import * as React from "react"
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import ChevronRight from "../components/chevron-right"
import * as styles from "../components/404.css"
import styled from "styled-components"

const Chillbg = styled.div`
  background: linear-gradient(-45deg, #efe8f7,#faf8e5,#efe8f7,#faf8e5,#fbe2dc,#faf8e5);
  background-size: 2000% 2000%;
  animation: gradient 30s ease infinite;
`

export default function NotFound() {
  return (
    <Chillbg>

    <Layout title="404: Page not found">
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega" className={styles.heading}>
              404
            </Heading>
            <Heading as="h1">Page not found</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Sorry! We couldn’t find the page you were looking for.
              </Text>
              <Link to="/" className={styles.link}>
                <span>Back to home</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  </Chillbg>
  )
}
