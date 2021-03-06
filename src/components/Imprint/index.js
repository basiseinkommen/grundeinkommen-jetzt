import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/ui/Container'
import FormatHtml from 'components/utils/FormatHtml'
import TitleSection from 'components/ui/TitleSection'

const Imprint = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "imprint" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `)

  const {
    frontmatter: { subtitle },
    html
  } = markdownRemark

  return (
    <Container section>
      <TitleSection subtitle={subtitle} />
      <FormatHtml content={html} />
    </Container>
  )
}

export default Imprint
