import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import img from '../../../static/images/grundeinkommen-jetzt.png'

const url = 'https://grundeinkommenjetzt.de'
const image = `${url}${img}`

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: image
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          property: 'twitter:image:src',
          content: image
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
}

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.any,
  title: PropTypes.string.isRequired
}

export default Seo
