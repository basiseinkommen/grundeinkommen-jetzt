import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/ui/Container'
import FormatHtml from 'components/utils/FormatHtml'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const Intro = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "call to action" } }) {
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
    <Styled.Intro>
      <Container section>
        <TitleSection id='mach-mit' title={title} subtitle={subtitle} center />
        <FormatHtml content={html} />
      </Container>
    </Styled.Intro>
  )
}

export default Intro
