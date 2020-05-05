import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Loadable from '@loadable/component'

import Container from 'components/ui/Container'
import TitleSection from 'components/ui/TitleSection'
import FormatHtml from 'components/utils/FormatHtml'

import * as Styled from './styles'

const Carousel = Loadable(() => import('components/ui/Carousel'))

const Petitioners = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { category: { eq: "petitioners section" } }
      ) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "petitioners" } } }
        sort: { fields: frontmatter___order }

      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sectionTitle = markdownRemark.frontmatter
  const petitioners = allMarkdownRemark.edges

  return (
    <Container section>
      <TitleSection
        title={sectionTitle.title}
        subtitle={sectionTitle.subtitle}
        center
      />
      <Styled.Petitioners>
        <Carousel>
          {petitioners.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node

            return (
              <Styled.Petitioner key={id}>
                <Styled.Image>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.Petitioner>
            )
          })}
        </Carousel>
      </Styled.Petitioners>
    </Container>
  )
}

export default Petitioners
