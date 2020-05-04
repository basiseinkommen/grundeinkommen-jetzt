import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'
import FormatHtml from 'components/utils/FormatHtml'

const OpenLetter = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "open letter" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `)

  const letter = markdownRemark

  return (
    <Container section>
      <TitleSection
        title={letter.frontmatter.title}
        subtitle={letter.frontmatter.subtitle}
      />
      <FormatHtml content={letter.html} />
    </Container>
  )
}

export default OpenLetter
