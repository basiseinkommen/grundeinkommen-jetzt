import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/ui/Container'
import Button from 'components/ui/Button'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const CallToAction = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "call to action" } }) {
        frontmatter {
          title
          subtitle
          submitPlaceholder
        }
        html
      }
    }
  `)

  const callToAction = markdownRemark

  return (
    <Styled.CallToAction>
      <Container section>
        <TitleSection
          title={callToAction.frontmatter.title}
          subtitle={callToAction.frontmatter.subtitle}
          center
        />
        <Styled.Form>
          <Button primary block>
            {callToAction.frontmatter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.CallToAction>
  )
}

export default CallToAction
