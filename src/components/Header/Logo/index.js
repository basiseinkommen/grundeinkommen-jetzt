import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as Styled from './styles'

const Logo = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const logoTitle = site.siteMetadata.title

  return (
    <Styled.Logo to="/">
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  )
}

export default Logo
