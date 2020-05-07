import mailtoLink from 'mailto-link'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Link } from 'components/ui/Button'
import Container from 'components/ui/Container'
import FormatHtml from 'components/utils/FormatHtml'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const SocialMedia = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "social media" } }) {
        frontmatter {
          title
          subtitle
        }
        html
      }
    }
  `)

  const {
    frontmatter: {
      title,
      subtitle
    },
    html
  } = markdownRemark

  return (
    <Styled.SocialMedia>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} center />
        <FormatHtml content={html} />
      </Container>
    </Styled.SocialMedia>
  )
}

export default SocialMedia
