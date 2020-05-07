import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'
import FormatHtml from 'components/utils/FormatHtml'

const Supporters = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "supporters" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `)

  const {
    frontmatter: { title, subtitle },
    html
  } = markdownRemark

  return (
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <FormatHtml content={html} />
    </Container>
  )
}

export default Supporters
