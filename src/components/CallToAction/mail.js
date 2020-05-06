import mailtoLink from 'mailto-link'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Link } from 'components/ui/Button'
import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const Mail = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "email petitioners" } }) {
        frontmatter {
          title
          subtitle
          instructions
          submitPlaceholder
          note
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
    frontmatter: {
      title,
      subtitle,
      instructions,
      submitPlaceholder,
      note,
      mailTo: to,
      mailSubject: subject
    },
    internal: { content }
  } = markdownRemark
  const first = allMarkdownRemark.edges.map((p) => p.node.frontmatter.title)
  const last = first.pop()
  const body = content
    .replace('#{PETITIONERS}', `${first.join(', ')} und ${last}`)
    .trim()

  return (
    <Styled.Mail>
      <Container section>
        <TitleSection title={title} subtitle={subtitle} center />
        <Styled.Form>
          <Styled.MailInstructions>{instructions}</Styled.MailInstructions>
          <Link primary href={mailtoLink({ to, subject, body })}>
            {submitPlaceholder}
          </Link>
          <Styled.MailNote>{note}</Styled.MailNote>
        </Styled.Form>
      </Container>
    </Styled.Mail>
  )
}

export default Mail
