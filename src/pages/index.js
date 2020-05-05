import React from 'react'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import OpenLetter from 'components/OpenLetter'
import Petitioners from 'components/Petitioners';
import CallToAction from 'components/CallToAction'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Offener Brief" />
      <OpenLetter />
      <Petitioners />
      <CallToAction />
    </Layout>
  )
}

export default IndexPage
