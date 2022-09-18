import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import InfoBlock from 'components/ui/InfoBlock'
import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'

import * as Styled from './styles'

const Materials = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "materials" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "facebook/instagram material" } } }
        sort: { fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              image
            }
          }
        }
      }
    }
  `)

  const sectionTitle = markdownRemark.frontmatter
  const services = allMarkdownRemark.edges

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Services>
        {services.map((item) => {
          const {
            id,
            frontmatter: { title, icon, description }
          } = item.node

          return (
            <Styled.ServiceItem key={id}>
              <InfoBlock icon={icon} title={title} content={description} />
            </Styled.ServiceItem>
          )
        })}
      </Styled.Services>
    </Container>
  )
}

export default Materials