import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import OpenLetter from 'components/OpenLetter'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Offener Brief" />
      <OpenLetter />
    </Layout>
  )
}

export default IndexPage
