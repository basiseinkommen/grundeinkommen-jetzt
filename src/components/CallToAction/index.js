import mailtoLink from 'mailto-link'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Link } from 'components/ui/Button'
import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const CallToAction = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "call to action" } }) {
        frontmatter {
          title
          subtitle
          submitPlaceholder
          mailTo
          mailSubject
        }
        internal {
          content
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "petitioners" } } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const {
    frontmatter: { title, subtitle, submitPlaceholder, mailTo: to, mailSubject: subject },
    internal: { content }
  } = markdownRemark
  const first = allMarkdownRemark.edges.map(p => p.node.frontmatter.title)
  const last = first.pop()
  const body = content.replace('#{PETITIONERS}', `${first.join(', ')} und ${last}`).trim()

  return (
    <Styled.CallToAction>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} center />
        <Styled.Form>
          <Link primary block href={mailtoLink({ to, subject, body})}>
            {submitPlaceholder}
          </Link>
        </Styled.Form>
      </Container>
    </Styled.CallToAction>
  )
}

export default CallToAction
